const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');
const imgPreview = document.querySelector('.img-upload__preview')

let effectValue = ''

const filterClick = (evt) => {
    let effect = evt.target.value;
    
    if (effect == 'none'){
        sliderElement.setAttribute('hidden', true); 
    }else{
        sliderElement.removeAttribute('hidden', true);
    }

    switch (effect) {
        case 'none':
            break;
        case 'chrome':
            sliderElement.noUiSlider.updateOptions({
                range: {
                  min: 0,
                  max: 1
                },
                start: 1,
                step: 0.1
              });
              effectValue = 'grayscale';
              imgPreview.style.filter = `${effectValue}(${valueElement.value})`
            break;
        case 'sepia':
            sliderElement.noUiSlider.updateOptions({
                range: {
                  min: 0,
                  max: 1
                },
                start: 1,
                step: 0.1
              });
            effectValue = 'sepia';
            imgPreview.style.filter = `${effectValue}(${valueElement.value})`
            console.log('sepia',imgPreview);
            break;
        case 'marvin':
            sliderElement.noUiSlider.updateOptions({
                range: {
                  min: 0,
                  max: 100
                },
                start: 100,
                step: 1
              });
            effectValue = 'invert';
            imgPreview.style.filter = `${effectValue}(${valueElement.value}%)`
            break;
        case 'phobos':
            sliderElement.noUiSlider.updateOptions({
                range: {
                  min: 0,
                  max: 3
                },
                start: 3,
                step: 0.1
              });
            effectValue = 'blur';
            imgPreview.style.filter = `${effectValue}(${valueElement.value}px)`
            break;
        case 'heat':
            sliderElement.noUiSlider.updateOptions({
                range: {
                  min: 0,
                  max: 3
                },
                start: 3,
                step: 0.1
              });
            effectValue = 'brightness';
            imgPreview.style.filter = `${effectValue}(${valueElement.value})`
            break;

        default:
          imgPreview.style.filter = `none`
      }


    imgPreview.className = `img-upload__preview effects__preview--${effect}`  
}

effectList.addEventListener('change', filterClick);


noUiSlider.create(sliderElement, {
    range: {
        min: 0,
        max: 100,
    },
    start: 100,
    step: 1,
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
});

sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    if (effectValue == 'invert') {
      imgPreview.style.filter = `${effectValue}(${valueElement.value}%)`
    }else if (effectValue == 'blur'){
      imgPreview.style.filter = `${effectValue}(${valueElement.value}px)`
    }else{
      imgPreview.style.filter = `${effectValue}(${valueElement.value})`
    }
});