const numbers = document.querySelectorAll('.btn-dark, .btn-orange:not(.js-equally)'),
      operations = document.querySelectorAll('.btn-grey, .js-equally'),
      symb = ['+', '-', '.', '*', '/'];

let result = document.querySelectorAll('.calculator-result p')[0],
    expression = '',
    number = '';

Array.from(numbers).forEach((item, index) => item.addEventListener("click", () => changeNumber(item)));
Array.from(operations).forEach((item, index) => item.addEventListener("click", () => changeResult(item)));

const checkClass = (item, element) => {
  return item.classList.contains(element);
}

const changeNumber = (item) => {
  let symbol = item.innerHTML,
      lastSymbol = expression.slice(-1);
  if(checkClass(item, 'btn-dark')){
    number += symbol;
    result.innerHTML = number = number.replace( /^([^\.]*\.)|\./g, '$1' );
  } else {
    number = '';
    result.innerHTML = symbol;
    checkClass(item, 'js-division') ? symbol = "/" : checkClass(item, 'js-multiplication') ? symbol = "*" : null;
  }
  lastSymbol = checkClass(item, 'btn-orange') && !+lastSymbol && lastSymbol != 0 && lastSymbol != '.';
  lastSymbol ? expression = expression.slice(0, -1) + symbol : expression += symbol;
}

const changeResult = (item) => {
  if(symb.indexOf(expression.slice(0, 1)) > 2 || symb.indexOf(expression.slice(-1)) > -1 || checkClass(item, 'js-delete')){
    result.innerHTML = '0';
    expression = number = '';
  } else {
    if(checkClass(item, 'js-reverse')){
      result.innerHTML = expression = number = (expression * -1).toString();
    } else if (checkClass(item, 'js-percent')){
      result.innerHTML = expression = number = (expression / 100).toString();
    } else {
      if(expression !== ''){
        result.innerHTML = +eval(expression).toFixed(2).toString();
        expression = number = '';
      }
    }
  }
}
