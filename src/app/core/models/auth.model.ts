export interface LoginUser {
    email: string;
    password: string;
}

export interface RegisterUser {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface AccessToken {
    user: string;
}
