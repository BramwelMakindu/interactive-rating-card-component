const btnEl = document.querySelector('.submit-btn');
const mainEl = document.querySelector('.main-div');
const secondEl = document.querySelector('.second-div');
const numberBtns = document.querySelectorAll('.number');
const selectionText = document.querySelector('.selection-text');


btnEl.addEventListener('click', ()=>{
    mainEl.classList.add('active');
    secondEl.classList.add('active');
});

numberBtns.forEach((numberBtn)=>{
    numberBtn.addEventListener('click', () => {
        let selection =numberBtn.innerHTML
        selectionText.innerHTML = `You selected ${selection} out of 5`;
        numberBtn.classList.add('active');
        numberBtn.classList.remove('active');
    })
})