import Nav from './sub/nav';

export default class Main {
  constructor(parentNode) {
    this.parent = parentNode;
    this.nav = new Nav();
  }

  createNav() {
    const { parent, nav } = this;

    parent.appendChild(nav.generateNav());
    parent.appendChild(nav.generateSideNav());
  }
}
