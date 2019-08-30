class mainModule {
  constructor(parentNode) {
    this.parent = parentNode;
  }

  createNav() {
    this.nav = document.createElement('div');
    this.nav.className = ''
    return this.nav;
  }
}
export {
  mainModule as default
};
