import M from 'materialize-css';
import MainModule from './components/mainModule';
import MainPage from './components/MainPage';

const slider = document.querySelector('.slider');
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
  console.log(main);
  main.innerHTML = '<div>TEsting123</div>';
};
// const changeContent = () => {
// }
const render = () => {
  generateMainSkeleton();
  currentContent('<div>Testing 123456436546u35689  u36 45u6 jhdfghjbdsfgjhbsdfjgb jdbghjdbvgjhbdvjgbdfjgvbsjdhd  </div>');
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
initMaterialize();
