let input = document.getElementById('input');
let button = document.getElementById('button');
const img = document.createElement('img');
const div = document.getElementById('q');
const text = document.createElement('h1');
const div2 = document.getElementById('p');


button.addEventListener('click', (event) => {
let a = fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`);
a
 	.then(a => {
 		return a.json();
 	})
 	.then(item => {
 		img.src = item[0].show.image.medium;
 		div.appendChild(img);
 		
 		text.innerText = item[0].show.name;
 		div2.appendChild(text);
 		
 	});
});


