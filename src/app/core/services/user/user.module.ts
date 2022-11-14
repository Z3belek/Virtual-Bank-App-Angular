import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userDataReducers } from './store/reducers/user.reducer';
import { UserEffects } from './store/effects/user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature('UserDataFeatureKey', userDataReducers)
  ]
})
export class UserModule { }
