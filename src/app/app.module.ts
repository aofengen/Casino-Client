import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './router.module';
import { HttpModule } from '@angular/http';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlackjackHomeComponent } from './blackjackhome/blackjackhome.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CardsComponent } from './cards/cards.component';
import { StatsComponent } from './stats/stats.component';
import { VideopokerComponent } from './videopoker/videopoker.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ConfirmpassModalComponent } from './confirmpass-modal/confirmpass-modal.component';
import { ChangepassModalComponent } from './changepass-modal/changepass-modal.component';

import { BlackjackService } from './services/blackjack.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { VideopokerService } from './services/videopoker.service';
import * as $ from 'jquery';
import { VideopokerHomeComponent } from './videopokerhome/videopokerhome.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlackjackHomeComponent,
    BlackjackComponent,
    ProfileComponent,
    LeaderboardComponent,
    CardsComponent,
    SignupModalComponent,
    LoginModalComponent,
    ConfirmpassModalComponent,
    ChangepassModalComponent,
    StatsComponent,
    VideopokerComponent,
    VideopokerHomeComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BlackjackService,
    NgbActiveModal,
    AuthGuard,
    AuthService,
    VideopokerService
  ],
  entryComponents: [
    SignupModalComponent,
    LoginModalComponent,
    ConfirmpassModalComponent,
    ChangepassModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
