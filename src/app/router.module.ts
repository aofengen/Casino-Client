import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';
import { StatsComponent } from './stats/stats.component';

export const routes = [
    { path: '', component: HomeComponent },
    { path: 'leaderboard', component: LeaderboardComponent },
    { path: 'game', component: GameComponent, canActivate: [AuthGuard] },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'stats/:id', component: StatsComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/'}
]