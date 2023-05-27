const zoomSmallerButton = document.querySelector('.scale__control--smaller');
const zoomBiggerButton = document.querySelector('.scale__control--bigger');
const zoomScaleInput = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview img');

//-------- Scale IMG --------//
let scaleValue = 100;
zoomScaleInput.value = `${scaleValue}%`;

// eslint-disable-next-line no-shadow
const getScale = (scaleValue) => {
  zoomScaleInput.value = `${scaleValue}%`;
  return (img.style.transform = `scale(${scaleValue / 100})`);
};

zoomSmallerButton.addEventListener('click', () => {
  if (scaleValue > 25) {
    scaleValue -= 25;
    getScale(scaleValue);
  }
});

zoomBiggerButton.addEventListener('click', () => {
  if (scaleValue <= 75) {
    scaleValue += 25;
    getScale(scaleValue);
  }
});
