import {getRandomPositiveInteger} from './generate-number.js'
import {getRandomArrayElement} from './get-random-array-element.js'
import {getUniqueId} from './get-unique-id.js'

const NAMES = [
    'Александра',
    'Бронислав',
    'Владислава',
    'Геннадий',
    'Доминика',
    'Елизавета',
    'Жанна',
    'Зиновий',
    'Экко',
    'Бард',
  ]
  
const COMMENTS = [
    'Коммент 1',
    'Коммент 2',
    'Коммент 3',
    'Коммент 4',
    'Коммент 5',
    'Коммент 6'
  ]

const createComment = (map, parentId) => {
    const id = parentId + getUniqueId(map, 5);
    return{
        id,
        avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
        message: getRandomArrayElement(COMMENTS),
        name: getRandomArrayElement(NAMES)
      };
  };

export {createComment};