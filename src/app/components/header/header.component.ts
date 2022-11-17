import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Todo App';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  inRoute(route: string) {
    return route === this.router.url;
  }
}
