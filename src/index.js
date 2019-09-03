import M from 'materialize-css';
import MainModule from './components/mainModule';
import MainPage from './components/MainPage';
import ContactPage from './components/ContactPage';


const mainDiv = document.querySelector('#content');
const sideNav = document.querySelector('.sidenav');

const mainModule = new MainModule(mainDiv);
const mainPage = new MainPage();

const generateMainSkeleton = () => {
  mainModule.createNav();
  mainModule.createMain();
  mainModule.createFooter();
};
const setContent = (content) => {
  const main = document.querySelector('main');
  main.appendChild(content);
};
const handleMenuClick = (button) => {
  const map = {
    'home-link': 'home page',
    'contact-link': 'contact page',
    'menu-link': 'menu-page',
  };
  console.log(map[button.className]);
};
const navEventListener = (button) => {
  button.addEventListener('click', () => {
    handleMenuClick(button);
  });
};

const changeContent = () => {
  const home = document.querySelector('.home-link');
  const menu = document.querySelector('.menu-link');
  const contact = document.querySelector('.contact-link');
  navEventListener(home);
  navEventListener(menu);
  navEventListener(contact);
};
const render = () => {
  generateMainSkeleton();
  setContent(mainPage.generateMainContent());
  changeContent();
};

const initSlider = (slider) => {
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    intervals: 6000,
  });
};

const initMaterialize = () => {
  const slider = document.querySelector('.slider');
  initSlider(slider);
  M.Sidenav.init(sideNav, {});
  const mbs = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(mbs, {});
};


render();

initMaterialize();
