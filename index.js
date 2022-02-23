const number = document.getElementById('number');
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const leaveBtn = document.getElementById('leave');
const modalWrapper = document.querySelector('.modal-wrapper');

number.textContent = generatePhoneNumber();

noBtn.addEventListener('click', () => {
  number.textContent = generatePhoneNumber();
});

yesBtn.addEventListener('click', () => document.querySelector('.modal-wrapper').classList.replace('disable', 'active'));

leaveBtn.addEventListener('click', () => document.location.href = 'https://kraken-afk.github.io');

modalWrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-wrapper'))
    e.target.classList.replace('active', 'disable');
})


function generatePhoneNumber() {
  return `+62 ${digit(3)}-${digit(4)}-${digit(4)}`
  
  function digit(n) {
    const math = () => Math.floor(Math.random() * 9);
    let number = new String;
    
    for (let i = 0; i < n; i++) number += math();
    return number;
  }
}