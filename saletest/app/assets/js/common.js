function Calculator() {

  let result = document.querySelectorAll('.calculator-result p')[0],
      expression = number = '',
      legend = true,
      symb = ['+', '-', '.', '*', '/'];

  this.checkClass = (item, element) => {
    return item.classList.contains(element);
  }

  this.changeNumber = (item) => {
    let symbol = item.innerHTML,
        lastSymbol = expression.slice(-1);
    this.checkClass(item, 'btn-dark') && !legend ? number = expression = '' : null;
    legend = true;
    if(this.checkClass(item, 'btn-dark')){
      result.innerHTML = number += symbol;
    } else {
      number = '';
      result.innerHTML = symbol;
      this.checkClass(item, 'js-division') ? symbol = "/" : this.checkClass(item, 'js-multiplication') ? symbol = "*" : null;
    }
    lastSymbol = this.checkClass(item, 'btn-orange') && !+lastSymbol && lastSymbol != 0 && lastSymbol != '.';
    lastSymbol ? expression = expression.slice(0, -1) + symbol : expression += symbol;
  }

  this.changeResult = (item) => {
    if(symb.indexOf(expression.slice(0, 1)) > 2 || symb.indexOf(expression.slice(-1)) > -1 || this.checkClass(item, 'js-delete')){
      result.innerHTML = '0';
      expression = number = '';
    } else {
      if(this.checkClass(item, 'js-reverse')){
        result.innerHTML = expression = number = (expression * -1).toString();
      } else if (this.checkClass(item, 'js-percent')){
        result.innerHTML = expression = number = (expression / 100).toString();
      } else {
        if(expression !== ''){
          result.innerHTML = +eval(expression).toFixed(2).toString();
          expression = result.innerHTML;
          legend = false;
        }
      }
    }
  }
}

const calculator = new Calculator,
      operations = document.querySelectorAll('.btn-grey, .js-equally'),
      numbers = document.querySelectorAll('.btn-dark, .btn-orange:not(.js-equally)');

Array.from(numbers).forEach((item, index) => item.addEventListener("click", () => calculator.changeNumber(item)));
Array.from(operations).forEach((item, index) => item.addEventListener("click", () => calculator.changeResult(item)));
