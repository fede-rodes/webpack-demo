import _ from 'lodash';
import Button from './button.js';
var messages = require('./messages.js');

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

var element = document.getElementById('root');
element.innerHTML = Button.button;
Button.attachEvent();

if (module.hot) {
  module.hot.accept();
}
