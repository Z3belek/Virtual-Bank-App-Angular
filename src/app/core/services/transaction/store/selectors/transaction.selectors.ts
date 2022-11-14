import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Transaction } from "@core/models/transaction.model";

const TransactionState = createFeatureSelector<Transaction>('UserDataFeatureKey');

export const dataTransaction = createSelector(
    TransactionState,
    (TransactionState) => `${TransactionState.userId} ${TransactionState.amount}`
);