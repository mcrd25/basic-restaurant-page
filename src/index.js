function component() {
	var element = document.createElement('div');

	// use your function!
	element.innerHTML = `<h1>Hello, World</h1>`;
	return element;
}
// const sliderInit = () => {

// }
// var main = document.querySelector('#content');
// main.appendChild(component());
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
	indicators: false,
	height: 500,
	transition: 500,
	intervals: 6000
});