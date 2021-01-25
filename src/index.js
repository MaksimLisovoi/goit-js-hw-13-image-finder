import css from './styles.css';
import apiService from './js/apiService';
import x from './js/refs';
import galleryTemplate from './templates/gallery.hbs';
import galleryItemTemplate from './templates/gallery-item.hbs';

const { form, gallery, input, loadMoreBtn } = x;

// Обработка формы запроса

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target);
  gallery.innerHTML = '';
  apiService.resetPage();
  const inputVal = e.target.elements.query.value;

  apiService.getFetch(inputVal, gallery);

  // Чистим инпут

  input.value = '';
  loadMoreBtn.classList.remove('isHiden');
});

//ОБРАБАТЫВАЕМ КНОПКУ ДОГРУЗКИ

loadMoreBtn.addEventListener('click', () => {
  console.log('ok');
  apiService.incrementPage();
  // Вызываем метод запроса и отрисовки
  apiService.getFetch(undefined, gallery);
});
