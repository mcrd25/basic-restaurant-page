import Nav from './sub/nav';
import Footer from './sub/footer';

export default class MainModule {
  constructor(parentNode) {
    this.parent = parentNode;
    this.nav = new Nav();
    this.footer = new Footer();
  }

  createNav() {
    const { parent, nav } = this;

    parent.appendChild(nav.generateNav());
    parent.appendChild(nav.generateSideNav());
  }

  createMain() {
    const main = document.createElement('main');
    this.parent.appendChild(main);
  }

  createFooter() {
    this.parent.appendChild(this.footer.generateFooter());
  }
}
