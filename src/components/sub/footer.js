export default class Footer {
  constructor() {
    this.footer = document.createElement('footer');
    this.p = document.createElement('p');
    this.footetText = () => 'The Best Restaurant &copy; 2019';
  }

  generateFooter() {
    this.footer.className = 'section red darken-2 white-text center';
    this.p.className = 'flow-text';
    this.p.innerHTML = this.footetText();
    this.footer.appendChild(this.p);
    return this.footer;
  }
}
