export default class Nav {
  constructor() {
    this.navDiv = () => {
      const navDiv = document.createElement('div');
      navDiv.className = 'navbar-fixed darken-2';
      return navDiv;
    };
    this.navComponent = () => {
      const nav = document.createElement('nav');
      nav.className = 'red';
      return nav;
    };
    this.containerDiv = () => {
      const div = document.createElement('div');
      div.className = 'container';
      return div;
    };
    this.navWrapper = () => {
      const div = document.createElement('div');
      div.className = 'nav-wrapper';
      div.appendChild(this.logo());
      div.appendChild(this.sideNavTrigger());
      div.appendChild(this.navContent('right hide-on-med-and-down'));
      return div;
    };
    this.sideNav = () => this.navContent('sidenav', 'mobile-nav');
    this.navContent = (className = '', id = '') => {
      const ul = document.createElement('ul');
      const menu = ['home', 'menu', 'contact'];
      const appendListItems = (menuItem) => {
        this.appendListItem(ul, menuItem);
      };
      ul.className = className;
      ul.id = id;
      menu.forEach(appendListItems);
      return ul;
    };
    this.appendListItem = (ul, menuItem) => {
      const li = document.createElement('li');
      const menuContent = menuItem.charAt(0).toUpperCase() + menuItem.slice(1);
      const a = this.createA(`${menuItem}-link`, menuContent);
      li.appendChild(a);
      ul.appendChild(li);
    };
    this.logo = () => {
      const a = document.createElement('a');
      a.className = 'brand-logo';
      a.innerHTML = 'Best Restaurant';
      return this.createA('brand-logo', 'Best Restaurant');
    };
    this.sideNavTrigger = () => {
      const sideNav = document.createElement('a');
      sideNav.className = 'sidenav-trigger';
      sideNav.setAttribute('data-target', 'mobile-nav');
      sideNav.innerHTML = '<i class="material-icons">menu</i>';
      return sideNav;
    };
    this.createA = (classname, innerHTML = '') => {
      const a = document.createElement('a');
      a.className = classname;
      a.innerHTML = innerHTML;
      return a;
    };
  }

  generateNav() {
    const navDiv = this.navDiv();
    const nav = this.navComponent();
    const container = this.containerDiv();
    const navWrapper = this.navWrapper();

    container.appendChild(navWrapper);
    nav.appendChild(container);
    navDiv.appendChild(nav);
    return navDiv;
  }

  generateSideNav() {
    return this.sideNav();
  }
}
