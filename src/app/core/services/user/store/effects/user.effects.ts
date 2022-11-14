import { Injectable } from "@angular/core";
import { User } from "@core/models/user.model";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from "rxjs";
import { UserService } from "../../user.service";
import { userData, userDataSuccess } from "../actions/user.actions";
@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    UserData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(userData),
            concatMap((action: any) => {
                return this.userService.getUserData().pipe(
                    map((user: User) => {
                        return userDataSuccess(action.user),
                            catchError(error => of(error))
                    })
                );
            })
        )
    },
        { dispatch: false }
    );
}