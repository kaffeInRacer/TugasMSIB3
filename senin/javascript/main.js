function total(aritmatika){
  let form = document.getElementById('form-field')
  let a = parseFloat(form.input1.value);
  let b = parseFloat(form.input2.value);
  let hasil = form.getHasil;
  let operator = aritmatika.value;
  let total;
  

  if(isNaN(a) || isNaN(b)){
    return alert('oops... input tidak valid');
  }
  
  switch (operator) {
    
    case 'plus':
        total = a + b;
      break;

    case 'minus':
        total = a - b;
      break;

    case 'time':
        total = a * b;
      break;

    case 'for':
        total = a / b;
      break;

    case 'multi':
        total = Math.pow(a,b);
      break;
  
    default:
      break;
  }
    hasil.value = total;
}