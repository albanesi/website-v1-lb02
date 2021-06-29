import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Websites who helped me learn Java and C#</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/stackoverflow.png'
              text='Stackoverflow'
              label='Every IT-Topic'
              path='https://stackoverflow.com/'
            />
            <CardItem
              src='images/gd0NW.png'
              text='Baelung'
              label='Just Java'
              path='https://baeldung.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='GeeksForGeeks'
              label='Everything with IT'
              path='https://www.geeksforgeeks.org/'
            />
            <CardItem
              src='images/w3.jpg'
              text='W3Schools'
              label='HTML-Projects'
              path='https://www.w3schools.com/'
            />
            <CardItem
              src='images/FreeCodeCamp.png'
              text='freeCodeCamp'
              label='Every IT-Topic'
              path='https://www.freecodecamp.org
              '
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
