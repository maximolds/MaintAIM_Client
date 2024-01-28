import React from 'react'
import { cardsData } from '../data/dummy'
import Card from './Card'


const Cards = () => {
    return (
      <div className="flex gap-10">
        {cardsData.map((card, id) => {
          return (
            <div className="w-full" key={id}>
              <Card
                title={card.title}
              />
            </div>
          );
        })}
      </div>
    );
  };

export default Cards