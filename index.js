// Import stylesheets
import './style.css';

var myCar = new Object();
myCar.make = 'Ford'; //define an object
myCar.model = 'Mustang';
myCar.year = 1987;

console.log(myCar['make']); //access the object property
console.log(myCar['model']);
console.log(myCar['year']);

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
