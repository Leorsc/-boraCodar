const sofaImage = document.querySelector('#sofa__image');
const btnRotation = document.querySelector('#button__rotation');

btnRotation.addEventListener('click', (event) => {
    if (event.srcElement.attributes.src.value !== './assets/iconClose.svg') {
        btnRotation.src = './assets/iconClose.svg';
        btnRotation.style.width = '16px';
        sofaImage.src = './assets/sofaImage.gif';
        return;
    }
    btnRotation.src = './assets/icon360.svg';
    btnRotation.style.width = '33px';
    sofaImage.src = './assets/sofaImage.svg';
    return;
})