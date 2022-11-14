import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { concatMap, map } from "rxjs";
import { Transaction } from "@core/models/transaction.model";
import { TransactionService } from "@core/services/transaction/transaction.service";
import * as TransactionActions from "../actions/transaction.actions";
import { UserService } from "@core/services/user/user.service";

@Injectable()
export class TransactionEffects {

    constructor(
        private actions$: Actions,
        private transactionService: TransactionService,
        private userService: UserService
    ) { }

    getAllTransactions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TransactionActions.getAllTransactionsSuccess),
            concatMap(() => {
                return this.transactionService.getAllTransactions().pipe(
                    map((transactions: Transaction[]) => {
                        return { type: TransactionActions.getAllTransactionsSuccess.type, transactions };
                    })
                );
            }),
        );
    });

    getTransactionById$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TransactionActions.getTransactionByIdSuccess),
            concatMap((action) => {
                return this.transactionService.getTransactionById(action.id).pipe(
                    map((transaction: Transaction) => {
                        return { type: TransactionActions.getTransactionByIdSuccess.type, id: action.id };
                    })
                )
            })
        )
    })

    deleteTransaction$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TransactionActions.deleteTransactionSuccess),
            concatMap((action) => {
                return this.transactionService.deleteTransaction(action.id).pipe(
                    map(() => {
                        return { type: TransactionActions.deleteTransactionSuccess.type, id: action.id };
                    })
                )
            })
        )
    })
}