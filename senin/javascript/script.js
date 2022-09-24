function total(aritmatika){
  let form = document.getElementById('form-field')
  let a = parseFloat(form.input1.value);
  let b = parseFloat(form.input2.value);
  let hasil = form.getHasil;
  let total;

  if(isNaN(a) || isNaN(b)){
    return alert('oops... input tidak valid');
  }
  
  switch (aritmatika) {
    
    case '+':
        total = a + b;
      break;

    case '-':
        total = a - b;
      break;

    case '*':
        total = a * b;
      break;

    case '/':
        total = a / b;
      break;

    case '^':
        total = Math.pow(a,b);
      break;
  
    default:
      break;
  }
    hasil.value = total;
}