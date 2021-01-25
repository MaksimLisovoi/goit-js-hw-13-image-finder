// import { get } from 'core-js/fn/dict';
import notifications from './notification';
import galleryTemplate from '../templates/gallery.hbs';
import galleryItemTemplate from '../templates/gallery-item.hbs';
import index from '../index';
// import renderGallery from './renderGallery'

export default {
  q: '',
  page: 1,
  perPage: 12,
  totalPages: 0,
  baseUrl: 'https://pixabay.com/api/',
  isLastPage: false,

  get queryValue() {
    return this.q;
  },
  set queryValue(val) {
    return (this.q = val);
  },

  getFetch(val = this.q, place) {
    let key = '19973249-c52aafd5b7bc4f65352a2c6d7';
    this.queryValue = val;
    let params = `?image_type=photo&orientation=horizontal&q=${this.q}&page=${this.page}&per_page=${this.perPage}&key=${key}`;
    let url = this.baseUrl + params;

    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data.hits;
      })
      .then(result => {
        const items = galleryItemTemplate(result);
        place.insertAdjacentHTML('beforeend', items);
        window.scrollTo({
          top: place.scrollHeight,
          behavior: 'smooth',
        });
      });
  },

  //метод добавления сраницы
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
    console.log('incrementPage:', this.page);
  },
};
