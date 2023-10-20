import React from 'react';
import { useState, useEffect} from 'react';
import Header from "./Header";
import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";
import getDataFromApi from './Services'; 
import "../styles/App.scss";


const App = () => {
  const [scenes, setScenes] = useState([]); 
  const [filmFilter, setFilmFilter] = useState(''); 

  useEffect(() => {
      getDataFromApi().then ((cleanData) => {
        setScenes(cleanData);
      });
    }, []);

  const handleChange = (value) => {
    setFilmFilter(value); 
  }
  
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="sectionList">
          <h2 className="sectionList_title">Here you can find your wow</h2>
          <Filters filmFilter={filmFilter} handleChange={handleChange}/>
          <MovieSceneList scenes={scenes}/>
        </section>
      </main> 
    </div>
  );
};

export default App;