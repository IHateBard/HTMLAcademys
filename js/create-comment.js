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
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ]

const createComment = (map, parentId) => {
    const id = parentId + getUniqueId(map, 5);
    return{
        id,
        avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
        message: getRandomArrayElement(COMMENTS),
        name: getRandomArrayElement(NAMES)
      }
  }

export {createComment};