const container = document.getElementById('container')

const p = document.createElement('p');

container.appendChild(p);

p.textContent = "Hey I'm Red!";
p.style.color='red';

const h3 = document.createElement('h3');
container.appendChild(h3);
h3.textContent="I'm a blue h3!";
h3.style.color='blue';

const div = document.createElement('div');


const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

const divP = document.createElement('p');
divP.textContent = "me too";
div.appendChild(divP);


container.appendChild(div);
div.style.cssText="border: 1px dashed black; background-color: pink";
