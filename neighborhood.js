
let random = document.querySelector('button.random-button');

getRandom = event => {
//	event.preventDefault();
	const restaurants = ['Cheesecake Factory', 'Mod Pizza', 'Red Robins',
	'Chic-fil-a', 'Joy Teriyaki', 'Five Guys', 'Taco Bell', "Roxy's Island Grill"];

	const randomRest = restaurants[Math.floor(Math.random() * restaurants.length)];
	//alert(randomRest);
	document.getElementById('display-here').innerHTML = randomRest;
	//console.log(randomRest);
}
if(random)
	random.addEventListener('click', getRandom);
