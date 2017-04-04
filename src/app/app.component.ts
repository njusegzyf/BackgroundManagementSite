import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';

import { NavbarComponent } from './core/core.module';
import { NavbarRouterLinkItem, NavbarRouterLinkGroup } from './core/core.module';

@Component({
  selector: 'background-management-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  // entryComponents: [NavbarComponent],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title = 'Background Management';

  // use `ViewChild` to get the sub component
  @ViewChild(NavbarComponent)
  navbar: NavbarComponent;

  constructor() { }

  ngOnInit(): void {
    this.navbar.navItems =
      [new NavbarRouterLinkItem('Dashboard', ['/dashboard']),
      new NavbarRouterLinkGroup('Mongodb', [], [
        new NavbarRouterLinkItem('Dashboard', ['mongodb/dashboard']),
        new NavbarRouterLinkItem('Works', ['mongodb/works'])
      ]),
      new NavbarRouterLinkGroup('Redis', [], [
        new NavbarRouterLinkItem('Dashboard', [])
      ]),
      new NavbarRouterLinkGroup('Message Reply', ['messageReply'], [
        new NavbarRouterLinkItem('Dashboard', ['messageReply'])
      ])
      ];
  }

  // ngOnInit(): void {
  //   this.navbar.navItems =
  //     [new NavbarRouterLinkItem("Todo Items", ["/todoItems"]),
  //     new NavbarRouterLinkItem("Publications", ["/publications"]),
  //     new NavbarRouterLinkGroup("Hero Menu", [], [
  //       new NavbarRouterLinkItem("Dashboard", ["/dashboard"]),
  //       new NavbarRouterLinkItem("Heroes", ["/heroes"])
  //     ]),
  //     new NavbarRouterLinkItem("Contacts", ["/contacts"]),
  //     new NavbarRouterLinkItem("Treeview Sample", ["/treeview-sample"]),
  //     new NavbarRouterLinkItem("Treetable Sample", ["/treetable-sample"])
  //     ];
  // }
}

