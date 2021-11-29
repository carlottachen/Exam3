console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
//	console.log('form submit');
	
	alert("Successfully submitted");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function giveCompliment(evt) {
	alert("This cat loves you");
}

let image = document.getElementById('catimage');

image.addEventListener('mouseover', giveCompliment);


