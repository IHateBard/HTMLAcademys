const zoomSmallerButton = document.querySelector('.scale__control--smaller');
const zoomBiggerButton = document.querySelector('.scale__control--bigger');
const zoomScaleInput = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview img');

//-------- Scale IMG --------//
var scaleValue = 100;
zoomScaleInput.value = `${scaleValue}%`;

zoomSmallerButton.addEventListener('click', () => {
    if (scaleValue > 25) { 
        scaleValue -= 25
        getScale(scaleValue);
    }
});

zoomBiggerButton.addEventListener('click', () => {
    if (scaleValue <= 75) { 
        scaleValue += 25
        getScale(scaleValue);
    }
});


const getScale = (scaleValue) => {
    zoomScaleInput.value = `${scaleValue}%`;
    return img.style.transform = `scale(${scaleValue/100})`;
}
