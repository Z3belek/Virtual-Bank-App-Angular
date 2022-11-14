import { createReducer, on } from "@ngrx/store";
import { Transaction } from "@core/models/transaction.model";
import * as TransactionActions from "../actions/transaction.actions";

export interface TransactionReducer {
    transactions: Transaction[],
    error: string
}

export const TransactionInitialState: TransactionReducer = {
    transactions: [],
    error: ''
}

export const TransactionReducer = createReducer(
    TransactionInitialState,
    on(TransactionActions.getAllTransactionsSuccess, (state): TransactionReducer => { return {...state }}),
    on(TransactionActions.getAllTransactionsFailure, (state, { error }): TransactionReducer => { return {...state, error }}),
    on(TransactionActions.getTransactionByIdSuccess, (state): TransactionReducer => { return {...state }}),
    on(TransactionActions.getTransactionByIdFailure, (state, { error }): TransactionReducer => { return {...state, error }}),
    on(TransactionActions.deleteTransactionSuccess, (state): TransactionReducer => { return {...state }}),
    on(TransactionActions.deleteTransactionFailure, (state, { error }): TransactionReducer => { return {...state, error }}),
)
