const Button = {
  button: '<button id="my-button">Click me</button>',
  attachEvent() {
    const elem = document.getElementById('my-button');
    elem.addEventListener('click', (e) => {
      console.log('button clicked!');
    });
  },
};

export default Button;
