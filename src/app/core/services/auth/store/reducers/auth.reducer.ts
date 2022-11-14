import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const UserAuthStateKey = 'UserAuthState';

export interface UserAuthState {
    isLoggedIn: boolean;
    errorMessage: string | null;
}

export const initialUserState: UserAuthState = {
    isLoggedIn: false,
    errorMessage: null
};

export const authReducers = createReducer(
    initialUserState,
    on(AuthActions.LoginSuccess, AuthActions.browserRefresh, initialUserState => ({
        ...initialUserState,
        isLoggedIn: true,
        errorMessage: null
    })),
    on(AuthActions.LoginFailure, initialUserState => ({
        ...initialUserState,
        isLoggedIn: false,
        errorMessage: 'Incorrect email or password.'
    })),
    on(AuthActions.Logout, initialUserState => ({
        ...initialUserState,
        isLoggedIn: false,
        errorMessage: null
    })),
    on(AuthActions.RegisterSuccess, initialUserState => ({
        ...initialUserState,
        isLoggedIn: false,
        errorMessage: null
    })),
    on(AuthActions.RegisterFailure, initialUserState => ({
        ...initialUserState,
        isLoggedIn: false,
        errorMessage: 'User with this email already exists.'
    })),
    on(AuthActions.ResetPasswordSuccess, initialUserState => ({
        ...initialUserState,
        isLoggedIn: false,
        errorMessage: null
    })),
    on(AuthActions.ResetPasswordFailure, initialUserState => ({
        ...initialUserState,
        isLoggedIn: false,
        errorMessage: 'User with this id does not exist.'
    }))
);

export const getAuthenticationToken = (state: UserAuthState) => state.isLoggedIn;