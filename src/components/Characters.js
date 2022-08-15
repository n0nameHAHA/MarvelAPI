import React from 'react';
import Card from './Card';

const Characters = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <section className="contents">
      {items.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </section>
  );
};

export default Characters;
