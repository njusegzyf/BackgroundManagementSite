export interface INavbarRouterLink {
  title: string;
  routerLink: Array<string>;
  routerLinkActive: string;

  // Methods for type test and type cast.
  isGroup(): boolean;
  asGroup(): INavbarRouterLinkGroup;
}

export interface INavbarRouterLinkGroup extends INavbarRouterLink {
  subRouterLinks: Array<INavbarRouterLink>;
}

export abstract class NavbarRouterLinkBase implements INavbarRouterLink {
  constructor(
    public title: string,
    public routerLink: Array<string>,
    public routerLinkActive: string = 'active') {

    //assert(this.title !== null);
    //assert(this.routerLink !== null)
  }

  abstract isGroup(): boolean;
  abstract asGroup(): INavbarRouterLinkGroup;
}

export class NavbarRouterLinkItem extends NavbarRouterLinkBase {
  constructor(pTitle: string, pRouterLink: Array<string>, pRouterLinkActive: string = 'active') {
    super(pTitle, pRouterLink, pRouterLinkActive)
  }

  isGroup(): boolean { return false; }
  asGroup(): NavbarRouterLinkGroup { throw 'Not an INavbarRouterLinkGroup.'; }
}

export class NavbarRouterLinkGroup extends NavbarRouterLinkBase implements INavbarRouterLinkGroup {
  constructor(
    pTitle: string,
    pRouterLink: Array<string>,
    public subRouterLinks: Array<INavbarRouterLink>,
    pRouterLinkActive: string = 'active') {
    super(pTitle, pRouterLink, pRouterLinkActive);

    //assert(this.subRouterLinks);
  }

  isGroup(): boolean { return true; }
  asGroup(): NavbarRouterLinkGroup { return this; }
}

export default NavbarRouterLinkItem;
