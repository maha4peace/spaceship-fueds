
import React, { useState, useEffect } from 'react';
import StarshipCard from './components/StarshipCard';
import { getAllStarships } from './services/sw-api';
import "./App.css"



function App() {
   
   const [starships, setStarShips] = useState([]);

   useEffect(() => {
      async function fetchStarShips() {
         try {
            const starShipsData = await getAllStarships(); 
            setStarShips(starShipsData) ; 
         } catch(error) {
            console.log("Error while fetching starships", error)
         }
      }
      
      fetchStarShips() ;

   }, []);

return (
   <div>
      <h1> Star Wars Starships</h1>
      <div>
         {starships.map((starship) => (
            <StarshipCard
               key = {starship.name}
               starship = {starship}
            
            /> 
         ))}
      </div>
   </div>
  );
};

export default App ; 

