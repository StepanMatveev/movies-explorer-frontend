import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { Route } from 'react-router-dom';

function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-form__container'>
        <Route path={'/movies'}>
          <div className='searc-form__input_container'>
            <input required className='search-form__input' placeholder='Фильм'/>
            <button className='search-form__submit-button'>Поиск</button>
          </div>
        </Route>
        <Route path={'/saved-movies'}>
          <div className='searc-form__input_container searc-form__input_container_light'>
            <input required className='search-form__input search-form__input_ligt' placeholder='Фильм'/>
            <button className='search-form__submit-button'>Поиск</button>
          </div>
        </Route>
      </div>
        <FilterCheckbox/>
    </form>
  );
}

export default SearchForm;
