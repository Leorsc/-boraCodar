const buttonOne = document.querySelector('#number-1');

buttonOne.addEventListener('click', (event) => {
    console.log(parseInt(event.target.innerText) + 1);
})