const btns = document.querySelectorAll('.calculator-keys button');
const textField = document.querySelector('.calculator-screen__input');
let expression = '';

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    let btnValue = btns[i].getAttribute('value');
      execute(btnValue);

  });
}

function execute(value) {
  switch (value) {
    case "=":
      textField.value = eval(expression);
      expression = textField.value;
      break;
    case "all-clear":
      expression = '';
      textField.value = '';
      break;
    default:
      expression += value;
      textField.value += value;
  }
}
