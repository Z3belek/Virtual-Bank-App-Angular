export interface User {
    id:number,
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    roleId: number;
    points: number;
}

export interface modifyUser {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    roleId: number;
    points: number;
}