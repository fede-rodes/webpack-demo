import _ from 'lodash';
var messages = require('./messages.js');

/* function component () {
  var element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component()); */

// var element = document.createElement('div');
var element = document.getElementById('root');
element.innerHTML = '<p>' + messages.hi + ' ' + messages.name + '</p>';
// document.body.appendChild(element);

if (module.hot) {
  module.hot.accept();
}
