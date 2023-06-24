
const inputDisplay = document.querySelector('#display');
const htmlNodes = document.querySelectorAll('.col');
var currentOperation;

console.log(htmlNodes);

htmlNodes.forEach( htmlElement => {
  htmlElement.classList.add('d-flex');
  htmlElement.classList.add('justify-content-around');
});

document.querySelectorAll('button').forEach( button => {
  button.classList.add('btn-block');
  button.addEventListener('click', (event) => {
    const targetInput = event.target.innerText;
    if (event.target.classList.contains('btn-primary')) {
      if (targetInput === '.') {
        if (currentOperation !== undefined) {
          let sanitizedValue = '';
          const values = inputDisplay.value.split(currentOperation);
          for(let i=0; i<values.length; i++) {
            if (i === (values.length-1)) {
              values[i] = values[i].replaceAll('.', '');
            } else {
              values[i] += currentOperation
            }
            sanitizedValue += values[i];
          }
          inputDisplay.value = sanitizedValue;
        } else {
          inputDisplay.value = inputDisplay.value.replaceAll('.', '');
        }
      }
      inputDisplay.value += targetInput;
    } else if (event.target.classList.contains('btn-outline-danger')) {
      inputDisplay.value = '';
      currentOperation = undefined;
    } else if (event.target.classList.contains('btn-outline-success')) {
      if (currentOperation === undefined) {
        currentOperation = targetInput;
        inputDisplay.value += targetInput;
      } else {
        let result;
        const operands = inputDisplay.value.split(currentOperation);
        switch(true) {
          case currentOperation === '+' :
            result = 0;
            operands.forEach( operand => {
              result += Number(operand);
            });
            break;
          case currentOperation === '-' :
            result = operands[0] * 2;
            operands.forEach( operand => {
              result -= Number(operand);
            });
            break;
          case currentOperation === '/' :
            result = operands[0] * operands[0];
            operands.forEach( operand => {
              const divisor = (Number(operand) === 0 ? 1 : Number(operand));
              result /= divisor;
            });
            break;
          case currentOperation === 'x' :
            result = 1;
            operands.forEach( operand => {
              result *= Number(operand);
            });
            break;            
        }
        currentOperation = targetInput;
        inputDisplay.value = result + currentOperation;
      }
    }
  });
});