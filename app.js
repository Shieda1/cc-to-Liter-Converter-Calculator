// https://www.omnicalculator.com/conversion/cc-to-liter-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const litersRadio = document.getElementById('litersRadio');
const ccRadio = document.getElementById('ccRadio');

let liters;
let cc = v; 

// labels of the inpust
const variable = document.getElementById('variable');

litersRadio.addEventListener('click', function() {
  variable.textContent = 'cc';
  cc = v;
  result.textContent = '';
});

ccRadio.addEventListener('click', function() {
  variable.textContent = 'Liters';
  liters = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(litersRadio.checked)
    result.textContent = `Liters = ${computeliters().toFixed(5)}`;

  else if(ccRadio.checked)
    result.textContent = `cc = ${computecc().toFixed(5)}`;
})

// calculation

function computeliters() {
  return Number(cc.value) / 1000;
}

function computecc() {
  return Number(liters.value) * 1000;
}