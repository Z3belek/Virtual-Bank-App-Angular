import { createAction, props } from "@ngrx/store";
import { User } from "@core/models/user.model";

export const userData = createAction(
    "[User] User Data"
);

export const userDataSuccess = createAction(
    "[User] User Data Success",
    props<{ user: User[] }>()
);

export const userAccount = createAction(
    "[User] User Account",
    props<{ user: User }>()
);