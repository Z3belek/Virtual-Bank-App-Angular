import { createFeatureSelector, createSelector } from '@ngrx/store';
import { initialUserState } from '../reducers/auth.reducer';

export interface initialUserState {
    isLoggedIn: boolean;
    errorMessage: string | null;
}

export const authFeatureSelector = createFeatureSelector<initialUserState>('auth');

export const isLoggedSelector = createSelector(
    authFeatureSelector,
    (authState: initialUserState): boolean => authState.isLoggedIn
)
