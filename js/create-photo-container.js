import {createComment} from './create-comment.js'
import {getRandomPositiveInteger} from './generate-number.js'
import {getRandomArrayElement} from './get-random-array-element.js'
import {getUniqueId} from './get-unique-id.js'

const DESCRIPTION = [
    'Описание 1',
    'Описание 2',
    'Описание 3',
    'Описание 4',
    'Описание 5',
    'Описание 6',
    'Описание 7',
    'Описание 8',
    'Описание 9',
    'Описание 10',
    'Описание 11',
    'Описание 12',
    'Описание 13',
    'Описание 14',
    'Описание 15',
    'Описание 16',
    'Описание 17',
    'Описание 18',
    'Описание 19',
    'Описание 20',
  ]
  
  //массив использованных id
  const takenIds = {}

  const createPhotoContainer = () => {
    const idComments = {};
    const userIds =  Array.from({length: 6}, () => getRandomPositiveInteger(1,6))
    const id = getUniqueId(takenIds, 25);
    const comments = Array.from({length: getRandomPositiveInteger(5, 50)}, () => createComment(idComments, id));
    return{
      userIds: getRandomArrayElement(userIds),
      id,
      url: `photos/${id}.jpg`,
      description: getRandomArrayElement(DESCRIPTION),
      likes: getRandomPositiveInteger(0,200),
      comments
    };
  };

  export {createPhotoContainer};