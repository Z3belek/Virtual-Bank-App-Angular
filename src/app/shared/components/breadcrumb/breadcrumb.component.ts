import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Observable, filter } from 'rxjs';
@Component({
  selector: 'ab-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  innerRoutes: string[] = [];
  currentRoute!: string;

  constructor(
    private router: Router
  ) {
    this.currentRoute = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
      if (this.currentRoute === '/home') {
        this.currentRoute = '';
      }
      this.currentRoute = this.currentRoute.replace('/', '');
      this.innerRoutes = this.currentRoute.split('/');
    });
  }

  ngOnInit(): void {
  }
}
