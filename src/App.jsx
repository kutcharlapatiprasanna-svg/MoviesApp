


import React from "react";
import DashBoard from "./Components/DashBoard";
import NavBar from "./Components/NavBar";

const App = () => {
const moviesData = [
  {
    id: 1,
    movieName: "RRR",
    rating: 4.8,
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    movieName: "KGF",
    rating: 4.6,
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    movieName: "Bahubali",
    rating: 4.7,
    image: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    movieName: "Avatar",
    rating: 4.5,
    image: "https://picsum.photos/300/200?random=4",
  },
  {
    id: 5,
    movieName: "Pushpa",
    rating: 4.4,
    image: "https://picsum.photos/300/200?random=5",
  },
  {
    id: 6,
    movieName: "Salaar",
    rating: 4.6,
    image: "https://picsum.photos/300/200?random=6",
  },
  {
    id: 7,
    movieName: "Devara",
    rating: 4.3,
    image: "https://picsum.photos/300/200?random=7",
  },
  {
    id: 8,
    movieName: "Jailer",
    rating: 4.5,
    image: "https://picsum.photos/300/200?random=8",
  },
  {
    id: 9,
    movieName: "Leo",
    rating: 4.4,
    image: "https://picsum.photos/300/200?random=9",
  },
  {
    id: 10,
    movieName: "Vikram",
    rating: 4.7,
    image: "https://picsum.photos/300/200?random=10",
  },
  {
    id: 11,
    movieName: "Master",
    rating: 4.3,
    image: "https://picsum.photos/300/200?random=11",
  },
  {
    id: 12,
    movieName: "Kantara",
    rating: 4.8,
    image: "https://picsum.photos/300/200?random=12",
  },
  {
    id: 13,
    movieName: "Animal",
    rating: 4.4,
    image: "https://picsum.photos/300/200?random=13",
  },
  {
    id: 14,
    movieName: "Dangal",
    rating: 4.9,
    image: "https://picsum.photos/300/200?random=14",
  },
  {
    id: 15,
    movieName: "Pathaan",
    rating: 4.2,
    image: "https://picsum.photos/300/200?random=15",
  },
  {
    id: 16,
    movieName: "Jawan",
    rating: 4.6,
    image: "https://picsum.photos/300/200?random=16",
  },
  {
    id: 17,
    movieName: "War",
    rating: 4.3,
    image: "https://picsum.photos/300/200?random=17",
  },
  {
    id: 18,
    movieName: "Drishyam",
    rating: 4.8,
    image: "https://picsum.photos/300/200?random=18",
  },
  {
    id: 19,
    movieName: "Interstellar",
    rating: 4.9,
    image: "https://picsum.photos/300/200?random=19",
  },
  {
    id: 20,
    movieName: "Inception",
    rating: 4.8,
    image: "https://picsum.photos/300/200?random=20",
  },
];

  return(
 <>

 <NavBar/>

   <DashBoard moviesData={moviesData} />);

 
 </>
  
  )
};

export default App;