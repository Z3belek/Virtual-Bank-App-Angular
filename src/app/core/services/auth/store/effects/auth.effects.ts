import { Injectable } from "@angular/core";
import { RegisterUser, LoginUser } from "@core/models/auth.model";
import { AuthService } from "../../auth.service";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, of, map, switchMap, tap, concatMap } from 'rxjs';
import * as AuthActions from "@core/services/auth/store/actions/auth.actions";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }

    Login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.LoginSuccess),
            switchMap((action) => {
                return this.authService.login(action.user).pipe(
                    map((user: LoginUser) => {
                        return { type: AuthActions.LoginSuccess.type, user };
                    }),
                    tap((user) => {
                        this.router.navigate(['/profile']);
                    }),
                    catchError((error) => {
                        return of({ type: AuthActions.LoginFailure.type, error });
                    })
                )
            })
        )
    },
        { dispatch: false }
    )

    Register$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.RegisterSuccess),
            concatMap((action: any) => {
                return this.authService.register(action.user).pipe(
                    map((user) => {
                        return { type: AuthActions.RegisterSuccess.type, user };
                    }),
                    tap((user) => {
                        this.router.navigate(['/login']);
                    }),
                    catchError((error) => {
                        return of({ type: AuthActions.RegisterFailure.type, error });
                    })
                )
            })
        )
    },
        { dispatch: false }
    )

    Logout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.Logout),
            tap(() => {
                this.authService.logout();
                this.router.navigate(['/login']);
            })
        )
    },
        { dispatch: false }
    )

    ResetPassword$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.ResetPasswordSuccess),
            concatMap((action: any) => {
                return this.authService.resetPassword(action.id, action.password).pipe(
                    map((user) => {
                        return { type: AuthActions.ResetPasswordSuccess.type, user };
                    }),
                    tap((user) => {
                        this.router.navigate(['/login']);
                    }),
                    catchError((error) => {
                        return of({ type: AuthActions.ResetPasswordFailure.type, error });
                    })
                )
            })
        )
    },
        { dispatch: false }
    )
}