import { createAction, props } from '@ngrx/store';
import { Transaction } from '@core/models/transaction.model';

export const getAllTransactionsSuccess = createAction(
    '[Transaction] Get All Transactions Success'
);

export const getAllTransactionsFailure = createAction(
    '[Transaction] Get All Transactions Failure',
    props<{ error: string }>()
);

export const getTransactionByIdSuccess = createAction(
    '[Transaction] Get Transaction By Id Success',
    props<{ id: number }>()
);

export const getTransactionByIdFailure = createAction(
    '[Transaction] Get Transaction By Id Failure',
    props<{ error: string }>()
);

export const deleteTransactionSuccess = createAction(
    '[Transaction] Delete Transaction Success',
    props<{ id: number }>()
);

export const deleteTransactionFailure = createAction(
    '[Transaction] Delete Transaction Failure',
    props<{ error: string }>()
);
