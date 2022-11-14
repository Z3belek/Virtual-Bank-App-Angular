export interface createOrModifyTransaction {
    amount: number;
    concept: string;
    date: string;
    type: string;
    accountId: number;
    userId: number;
    to_account_id: number;
}

export interface Transaction {
    id: number;
    amount: number;
    concept: string;
    date: string;
    type: string;
    accountId: number;
    userId: number;
    to_account_id: number;
    createdAt: string;
    updatedAt: string;
}