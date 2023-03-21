const getEditingForm = () => { 
    document.getElementById('upload-file').addEventListener('change', function(e) {
    if (e.target.files[0]) {
        document.querySelector('.img-upload__overlay').classList.remove('hidden');
        document.querySelector('body').classList.add('modal-open');
    };
  });
};

const closeEditingForm = () => {
  const cloneButton = document.querySelector('.img-upload__cancel')
  cloneButton.addEventListener('click', () => {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  });
};

export {getEditingForm, closeEditingForm};