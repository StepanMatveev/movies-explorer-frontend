import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import movies from '../../utils/movies'

function Movies() {
  
  return (
    <>
      <Header/>
      <section className='movies'>
        <SearchForm/>
        <MoviesCardList movies={movies} generalClass='movies'/>
      </section>
      <Footer/>
    </>
  );
}

export default Movies;
