const style = require('./styles/body.css');
// import _ from 'lodash';
import Button from './button.js';
import Image from './image.js';
import Image2 from './image2.js';
import { mult } from './math.js';
const messages = require('./messages.js');

/* function component () {
  var element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component()); */

// var element = document.createElement('div');
/* var element = document.getElementById('root');
element.innerHTML = `<p>${messages.hi} ${messages.name}</p>`; */
// document.body.appendChild(element);

/* var element = document.getElementById('root');
element.innerHTML = Button.button;
Button.attachEvent(); */

console.log('is DEV', DEVELOPMENT.toString());
console.log('is PROD', PRODUCTION.toString());

var element = document.getElementById('root');
element.innerHTML = `<div class=${style.box}>
${Image}
${Image2}
${mult(5,4)}
</div>`;

if (module.hot) {
  module.hot.accept();
}
