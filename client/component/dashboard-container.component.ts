import { Component,OnInit } from '@angular/core';
import { Worksheet } from '../model/worksheet';
import { User } from '../model/user-account';
import { DashboardService } from '../utility/dashboard.service';
import { UserService } from '../utility/user.service';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'dashboard-container',
  template: '<router-outlet></router-outlet>',
})
export class DashboardContainerComponent{}