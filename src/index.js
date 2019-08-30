import Main from './components/mainModule';

const slider = document.querySelector('.slider');
const mainDiv = document.querySelector('#content');

const main = new Main(mainDiv);
const initSlider = (slider) => {
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    intervals: 6000,
  });
};

main.createNav();
initSlider(slider);
