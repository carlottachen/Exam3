
let color = document.getElementById('color');
let place = document.getElementById('place');
let ritual = document.getElementById('ritual');

function getColor(event) {
	alert('Brown is my favorite color!!!');
}
color.addEventListener('click', getColor);

function getPlace(event) {
	alert('My favorite place is the beach');
}
place.addEventListener('click', getPlace);

getRitual = event => {
	alert('Every evening I like to walk before bed');
}
ritual.addEventListener('click', getRitual);

