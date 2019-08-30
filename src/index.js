import MainModule from './components/mainModule';

const slider = document.querySelector('.slider');
const mainDiv = document.querySelector('#content');
const sideNav = document.querySelector('.sidenav');

const mainModule = new MainModule(mainDiv);

const render = () => {
  mainModule.createNav();
  mainModule.createFooter();
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
