const genBtn = document.querySelector('.btn1');
const copyBtn = document.querySelector('.btn2');
let password = document.getElementById('password');

genBtn.addEventListener('click', () => genPassword());
copyBtn.addEventListener('click', () => copyPassword());