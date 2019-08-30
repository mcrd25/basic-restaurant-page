import MainModule from './components/mainModule';

const slider = document.querySelector('.slider');
const mainDiv = document.querySelector('#content');
const sideNav = document.querySelector('.sidenav');

const mainModule = new MainModule(mainDiv);

const generateMainSkeleton = () => {
  mainModule.createNav();
  mainModule.createMain();
  mainModule.createFooter();
};
const currentContent = (content) => {
  const main = document.querySelector('main');
  main.innerHTML = content;
};
const changeContent = () => {
  
}
const render = () => {
  generateMainSkeleton();

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
