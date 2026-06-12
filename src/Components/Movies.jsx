import React from 'react';
import MoviesList from './MoviesList';

const Movies = ({ moviesData }) => {
  return (
    <div>
      <MoviesList movieName={moviesData} />
    </div>
  );
};

export default Movies;
