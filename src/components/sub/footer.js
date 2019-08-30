export default class Footer {
  constructor() {
    this.footer = document.createElement('footer');
    this.p = document.createElement('p');
    this.footetText = () => 'The Best Restaurant &copy; 2019';
  }

  generateFooter() {
    this.p.innerHTML = this.footetText();
    this.footer.appendChild(this.p);
    return this.footer;
  }
}
