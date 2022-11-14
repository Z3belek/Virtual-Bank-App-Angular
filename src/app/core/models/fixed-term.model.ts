export interface createOrModifyFixedTerm {
    userId: number;
    accountId: number;
    amount: number;
    creation_date: string;
    closing_date: string;
}

export interface FixedTerm {
    id: number;
    userId: number;
    accountId: number;
    amount: number;
    creation_date: string;
    closing_date: string;
    createdAt: string;
    updatedAt: string;
}

export interface FixedTermWithInterest {
    id: number;
    userId: number;
    accountId: number;
    amount: number;
    interest: number;
    creation_date: string;
    closing_date: string;
    createdAt: string;
    updatedAt: string;
}