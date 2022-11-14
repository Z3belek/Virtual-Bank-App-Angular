export interface createOrModifyAccount {
    creationDate: Date | string;
    money: number;
    isBlocked: boolean;
    userId: number;
}

export interface Account {
    id: number;
    creationDate: Date;
    money: number;
    isBlocked: boolean;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface depositToAccount {
    type: string;
    concept: string;
    amount: number;
}
