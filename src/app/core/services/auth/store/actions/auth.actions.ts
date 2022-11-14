import { createAction, props } from '@ngrx/store';
import { LoginUser, RegisterUser } from '@core/models/auth.model';


export const LoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: LoginUser }>()
);

export const LoginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const Logout = createAction(
  '[Auth] Logout'
);

export const RegisterSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: RegisterUser }>()
);

export const RegisterFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: any }>()
);

export const ResetPasswordSuccess = createAction(
  '[Auth] Reset Password Success',
  props<{ id: string, password: string }>()
);

export const ResetPasswordFailure = createAction(
  '[Auth] Reset Password Failure',
  props<{ error: any }>()
);

export const browserRefresh = createAction(
  '[Auth] Browser Refresh',
  props<{ user: LoginUser }>()
);