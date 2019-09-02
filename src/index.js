import M from 'materialize-css';
import MainModule from './components/mainModule';
import MainPage from './components/MainPage';


const mainDiv = document.querySelector('#content');
const sideNav = document.querySelector('.sidenav');

const mainModule = new MainModule(mainDiv);
const mainPage = new MainPage();

const generateMainSkeleton = () => {
  mainModule.createNav();
  mainModule.createMain();
  mainModule.createFooter();
};
const currentContent = (content) => {
  const main = document.querySelector('main');
  main.appendChild(content);
};
// const changeContent = () => {
// }
const render = () => {
  generateMainSkeleton();
  currentContent(mainPage.generateMainContent());
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
  initSlider(slider);
  M.Sidenav.init(sideNav, {});
};


render();
const slider = document.querySelector('.slider');
initMaterialize();
