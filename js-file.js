
// Get the container element
const container = document.getElementById('container');
container.style.border = "2px solid yellow";


// Create a <p> element with red text
const pElement = document.createElement('p');
pElement.textContent = "sou o p vermelho";
pElement.style.color = 'red';
container.appendChild(pElement);


// Create an <h3> element with blue text
const h3Element = document.createElement('h3');
h3Element.textContent = "sou um h3 azul";
h3Element.style.color = 'blue';
container.appendChild(h3Element);


// Create a <div> element with black border and pink background color
const divElement = document.createElement('div');
divElement.style.border = '1px solid black';
divElement.style.backgroundColor = 'pink';



// Create an <h1> element inside the <div> element
const h1InsideDiv = document.createElement('h1');
h1InsideDiv.textContent = "sou o h1 dentro da div"
h1InsideDiv.style.color = "green";
divElement.appendChild(h1InsideDiv);



// Create a <p> element inside the <div> element
const pElementInsideDiv = document.createElement('p');
pElementInsideDiv.textContent = 'sou um p dentro da div';
divElement.appendChild(pElementInsideDiv);



// Append the <div> element to the container
container.appendChild(divElement);