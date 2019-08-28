function component() {
	var element = document.createElement('div');

	// use your function!
	element.innerHTML = `<h1>Hello, World</h1>`;
	return element;
}
var main = document.querySelector('#content');
main.appendChild(component());