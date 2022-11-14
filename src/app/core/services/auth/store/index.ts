import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as AuthActions from "@core/services/auth/store/actions/auth.actions";
import * as AuthReducers from "@core/services/auth/store/reducers/auth.reducer";
import * as AuthEffects from "@core/services/auth/store/effects/auth.effects";
import * as AuthSelectors from "@core/services/auth/store/selectors/auth.selectors";
import { environment } from "@env/environment";

export interface AppState {
    [AuthReducers.UserAuthStateKey]: AuthReducers.UserAuthState
}

export const reducers: ActionReducerMap<AppState> = {
    [AuthReducers.UserAuthStateKey]: AuthReducers.authReducers
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        return reducer(state, action);
    }
}