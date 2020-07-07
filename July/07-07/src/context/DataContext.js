import React, { useState, createContext } from "react";
// BooksContext or whatever I want to call, first part Data is optional 
// MusicProvider, ShopProvider whatever I am building,
const DataContext = createContext();

const DataProvider = () => {
  const { data, setState } = useState([
    { name: 'Anna', age: 22 },
    { name: 'Zara', age: 24 },
    { name: 'Tim', age: 25 },

  ]);
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );

};

export { DataContext, DataProvider };