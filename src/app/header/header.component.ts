import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BlackjackService } from '../services/blackjack.service';
import * as $ from 'jquery';
import { VideopokerService } from '../services/videopoker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {

  constructor(private as: AuthService, private router: Router, private ac: ActivatedRoute, private gs: BlackjackService,
              private vs: VideopokerService) { }

    token: string;
    name: string;
    userIdNumber: number;

  ngOnInit() {}

  ngAfterContentChecked() {
    if (localStorage.getItem("token")) {
      this.as.token = localStorage.getItem("token");
      this.userIdNumber = this.as.getUserIdNumber();
      this.name = this.as.getName();
    }

  }

  logout() {
    this.as.token = null;
    this.name = null;
    this.userIdNumber = null;
    if (localStorage.getItem("statsSaved") == "no" && Number(localStorage.getItem("handsPlayed")) > 0) {
      this.gs.saveStats();      
    }
    if (localStorage.getItem("poker")) {
      this.vs.postStats();
    }
    localStorage.clear();
    this.router.navigate(['/']);
  }

  pageClicked(x) {
    this.as.pageClicked(x);
  }
}
