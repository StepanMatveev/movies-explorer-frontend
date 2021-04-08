import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a className='portfolio__list-link'
             href='https://stepanmatveev.github.io/how-to-learn/index.html'
             target='_blank' rel='noreferrer'>
            Статичный сайт
          </a>
          <div className='portfolio__list-arrow'></div>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__list-link'
             href='https://stepanmatveev.github.io/russian-travel/index.html'
             target='_blank' rel='noreferrer'>
            Адаптивный сайт
          </a>
          <div className='portfolio__list-arrow'></div>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__list-link'
             href='https://github.com/StepanMatveev/react-mesto-api-full'
          target='_blank' rel='noreferrer'>
            Одностраничное приложение
          </a>
          <div className='portfolio__list-arrow'></div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
