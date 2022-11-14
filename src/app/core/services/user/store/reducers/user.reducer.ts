import { createReducer, on } from "@ngrx/store";
import * as UserData from "../actions/user.actions";
import { User } from "@core/models/user.model";

export const UserDataFeatureKey = 'userData';

export interface UserReducers {
    userData: User[]
}

export const UserInitialState: UserReducers = {
    userData: []
}

export const userDataReducers = createReducer(
    UserInitialState,
    on(UserData.userData, (state): UserReducers => {
        return {
            ...state
        }
    }),
    on(UserData.userDataSuccess, (state, action): UserReducers => {
        return {
            ...state,
            userData: action.user
        }
    })
)