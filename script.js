document.querySelector('#one').onclick =()=>{
  document.forms.display.value += 1;
}
document.querySelector('#two').onclick =()=>{
  document.forms.display.value += 2;
}
document.querySelector('#three').onclick =()=>{
  document.forms.display.value += 3;
}
document.querySelector('#four').onclick =()=>{
  document.forms.display.value += 4;
}
document.querySelector('#five').onclick =()=>{
  document.forms.display.value += 5;
}
document.querySelector('#six').onclick =()=>{
  document.forms.display.value += 6;
}
document.querySelector('#seven').onclick =()=>{
  document.forms.display.value += 7;
}
document.querySelector('#eight').onclick =()=>{
  document.forms.display.value += 8;
}
document.querySelector('#nine').onclick =()=>{
  document.forms.display.value += 9;
}
document.querySelector('#zero').onclick =()=>{
  document.forms.display.value += 0;
}
document.querySelector('#dot').onclick =()=>{
  document.forms.display.value += '.';
}

// Process

document.querySelector('#subs').onclick =()=>{
  document.forms.display.value += '-';
}
document.querySelector('#add').onclick =()=>{
  document.forms.display.value += '+';
}
document.querySelector('#multi').onclick =()=>{
  document.forms.display.value += '*';
}
document.querySelector('#divide').onclick =()=>{
  document.forms.display.value += '/';
}

// Result
document.querySelector('#equal').onclick =()=>{
  if (display.value === ''){
    alert('Please enter any number');
  } else {
    document.forms.display.value = eval(document.forms.display.value);
  }
}

// Clear
document.querySelector('#clear').onclick =()=>{
  document.forms.display.value = "";
}