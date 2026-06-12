/* import React from 'react';

const Card = (movieName) => {


  return (

    <div>
      

    <h2>{movieName.title}</h2>
    <p>Rating:{movieName.rating}</p>
    </div>
  );
}

export default Card;
 */


import React from "react";

const Card = ({ movieName, rating, image }) => {
  return (
    <div
      style={{
        // width: "250px",
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
                 fixed:"top",

      }}
    >
      <img
        src={image}
        alt={movieName}
        style={{ width: "100%", height: "200px" }}

      />

      <h3>{movieName}</h3>
<h1>prasanna</h1>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Card;