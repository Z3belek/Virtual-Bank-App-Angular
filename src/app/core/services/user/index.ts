import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { authReducers } from "../auth/store/reducers/auth.reducer";
import { userDataReducers } from "../user/store/reducers/user.reducer";

export * as UserActions from './store/actions/user.actions';


export interface AppState {
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
};