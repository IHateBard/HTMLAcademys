import {getRandomPositiveInteger} from './generate-number.js'

const getRandomArrayElement = (elements) => {
    return elements[getRandomPositiveInteger(0, elements.length - 1)];
};
  
export {getRandomArrayElement}