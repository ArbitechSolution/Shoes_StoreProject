import React from 'react';
import './App.css';
import Header from './header/header';
import BestSellers from './best-sellers/bestSellers';
import NewCollection from './newCollections/newCollection';
import ShoeSize from './shoeSize/shoeSize';

function App() {
  return (
    <>
     <Header /> 
     <BestSellers />
     <NewCollection />
     <ShoeSize />
    </>
  );
}

export default App;
