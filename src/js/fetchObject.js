// import { get } from 'core-js/fn/dict';
import notifications from './notification';

// import renderCountries from './render-countries';

// function fetchCountries(searchQuery) {
//   const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ`;
//   return fetch(url)
//     .then(response => response.json())
//     .then(d => renderCountries(d))
//     .catch(notifications.onError);
// }

export default {
  q: 'kitten',
  page: 1,
  perPage: 12,
  baseUrl: 'https://pixabay.com/api/',

  getFetch() {
    let key = '19973249-c52aafd5b7bc4f65352a2c6d7';
    let params = `?image_type=photo&orientation=horizontal?q=${this.q}&page=${this.page}&per_page=${this.perPage}&key=${key}`;
    let url = this.baseUrl + params;
    // let options = {
    //   method: 'GET',
    //   headers: {
    //     Authorization: key,
    //   },
    // };

    return fetch(url)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        return data.hits
      }).then((result)=>{console.log(result)})
  },
};
