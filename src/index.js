import M from 'materialize-css';
import MainModule from './components/mainModule';
import MainPage from './components/MainPage';
import ContactPage from './components/ContactPage';
import MenuPage from './components/MenuPage';


const mainDiv = document.querySelector('#content');

const mainModule = new MainModule(mainDiv);
const mainPage = new MainPage();
const contactPage = new ContactPage();
const menuPage = new MenuPage();

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
  const mbs = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(mbs, {});
};

const generateMainSkeleton = () => {
  mainModule.createNav();
  mainModule.createMain();
  mainModule.createFooter();
};

const setContent = (content) => {
  const main = document.querySelector('main');
  const div = document.querySelector('.content');
  if (div) main.removeChild(div);
  main.append(content);
  initMaterialize();
};
const handleMenuClick = (button) => {
  const map = {
    'home-link': mainPage.generateMainContent(),
    'contact-link': contactPage.generateMainContent(),
    'menu-link': menuPage.generateMainContent(),
  };
  setContent(map[button.className]);
};
const navEventListener = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      handleMenuClick(button);
    });
  });
};

const changeContent = () => {
  const home = document.querySelectorAll('.home-link');
  const menu = document.querySelectorAll('.menu-link');
  const contact = document.querySelectorAll('.contact-link');
  navEventListener(home);
  navEventListener(menu);
  navEventListener(contact);
};
const initSideBar = () => {
  const sideNav = document.querySelector('.sidenav');
  M.Sidenav.init(sideNav, {});
};
const render = () => {
  generateMainSkeleton();
  initSideBar();
  setContent(mainPage.generateMainContent());
  changeContent();
};

render();
