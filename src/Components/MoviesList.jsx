import React from 'react';
import Card from './Card';

const MoviesList = ({ movieName }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        padding: '20px',
        color:'white',
        overflow:"hidden",
         fixed:"top",
        background: 'linear-gradient(135deg, #0f172a, #111827)',
      }}
    >
      {movieName.map((movie) => (
        <Card
          key={movie.id}
          movieName={movie.movieName}
          rating={movie.rating}
          image={movie.image}
        />
      ))}
    </div>
  );
};

export default MoviesList;
