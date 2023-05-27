const commentsContainer = document.querySelector('.social__comments');
const fragment = document.createDocumentFragment();

const printComments = (id, index, previousIndex, container) => {
  let currentArray = [];
  currentArray = container[id].comments.slice(previousIndex, index);
  currentArray.forEach((item) => {
    const newElement = document.createElement('li');
    newElement.classList.add('social__comment');
    newElement.innerHTML =
      '<img class="social__picture" width="35" height="35">  <p class="social__text"> </p>';
    newElement.querySelector('img').src = item.avatar;
    newElement.querySelector('img').alt = item.name;
    newElement.querySelector('p').textContent = item.message;
    fragment.appendChild(newElement);
    commentsContainer.appendChild(fragment);
  });
};

export { printComments };
