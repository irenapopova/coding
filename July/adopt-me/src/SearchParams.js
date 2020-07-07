
import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown';


const SearchParams = () => {
  const [location, setLocation] = useState("Berlin, DE");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
  // "" empty string is as a default state

  useEffect(() => {
    updateBreeds([]);
    updateBreed("");
    //pet.breeds("dog").then(console.log, console.error);
    // i do this because I do not want to slow down the render
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  });

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
        <input
            id="location"
            value={location}
            placeholder="location"
            onChange={e => setLocation(e.target.value)}
          // using a shared generic class or a HOOK 
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button >Submit</button>
      </form>

    </div >

  );

};

export default SearchParams;