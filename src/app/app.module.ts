import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from '@core/services/auth/store/effects/auth.effects';
import { authReducers } from '@core/services/auth/store/reducers/auth.reducer';
import { NgChartsModule } from 'ng2-charts';
import { userDataReducers } from '@core/services/user/store/reducers/user.reducer';
import { InterceptorModule } from '@core/helpers/interceptor.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AvatarComponent } from '@shared/components/avatar/avatar.component';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { HeaderModule } from '@shared/components/header/header.module';
import { EditProfileComponent } from '@shared/components/header/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    AvatarComponent,
    BreadcrumbComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    HttpClientModule,
    InterceptorModule,
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forFeature('auth', authReducers),
    StoreModule.forRoot({ UserAuthStateKey: userDataReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgChartsModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
