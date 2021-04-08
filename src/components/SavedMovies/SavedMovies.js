import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import movies from '../../utils/movies'

function SavedMovies() {


  return (
    <>
      <Header/>
      <section className='saved-movies'>
        <SearchForm/>
        <MoviesCardList movies={movies} generalClass='saved-movies'/>
      </section>
      <Footer/>
    </>
  );
}

export default SavedMovies;
