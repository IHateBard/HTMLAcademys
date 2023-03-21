import {getRandomPositiveInteger} from './generate-number.js'

const getUniqueId = (idMap, maxLenght) => {
    const id = getRandomPositiveInteger(1, maxLenght)
    if (!idMap[id]) {
      idMap[id] = true;
      return id;
    }else if(Object.keys(idMap).length === maxLenght){
      return
    }
    return getUniqueId(idMap, maxLenght);
};

export {getUniqueId};