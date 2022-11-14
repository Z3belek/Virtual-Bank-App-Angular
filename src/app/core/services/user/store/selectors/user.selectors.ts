import { createSelector, createFeatureSelector } from "@ngrx/store";
import { User } from "@core/models/user.model";
import { UserDataFeatureKey, UserInitialState } from "../reducers/user.reducer";
import * as UserDataReducers from "../reducers/user.reducer";

const UserState = createFeatureSelector<UserDataReducers.UserReducers>(UserDataFeatureKey);

export const getUserData = createSelector(
    UserState,
    (UserState) => UserState.userData
)