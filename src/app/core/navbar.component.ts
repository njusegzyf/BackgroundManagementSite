import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';

import { INavbarRouterLink } from './navbar-router-link';

@Component({
  selector: 'zyf-navbar',
  templateUrl: 'app/core/navbar.component.html'
})
export class NavbarComponent implements OnInit {
  @Input() title: string = "";
  @Input() navItems: Array<INavbarRouterLink>;

  constructor() { }

  ngOnInit() { }
}

export default NavbarComponent;
