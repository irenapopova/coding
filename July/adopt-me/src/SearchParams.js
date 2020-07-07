
import React, { useState, useEffect, useContext } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Berlin, DE");
  const [animal, setBreed] = useState("dog");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
        <input id="location" value={location}
            placeholder="location"
            onChange={e => setLocation(e.target.value)} />
        </label>

        <label htmlFor="breed">
          Breed
        <select
            id="breed"
            value=[breed]
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled = {!breed.length === 0}
        >

        <option>All</option>
          {breed.map(breeString => (
            <option key={breedString} value={breedString}>
              {breedString}
            </option>
          ))}
        </select>

        </label>
      <button >Submit</button>
      </form>

    </div >

  );

};
export default SearchParams;

/*!

im */