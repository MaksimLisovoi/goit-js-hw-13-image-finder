import css from './styles.css';
import fetchObject from './js/fetchObject';
import x from './js/refs';
// import './js/fetchCountries';
// import './js/render-countries';

const { form, searchBtn, gallery } = x;
console.log(form, searchBtn, gallery);

fetchObject.getFetch();
