import React from 'react';
import { useState, useEffect} from 'react';
import Header from "./Header";
import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";
import getDataFromApi from '../services/Services'; 
import ls from '../services/ls'; 
import "../styles/App.scss";


const App = () => {
//// useState hooks
  const [scenes, setScenes] = useState(ls.get('scenes', [])); 
  const [filmFilter, setFilmFilter] = useState(''); 
  const [yearFilter, setYearFilter] = useState(''); 

//// useEffect hook
  useEffect(() => {
    if (scenes.length === 0){
      getDataFromApi().then ((cleanData) => {
        setScenes(cleanData);
        ls.set ('scenes', cleanData);
      });
    }
    }, []);

///handle function search by film
  const handleChange = (value) => {
    setFilmFilter(value); 
  };

///handle function search by year
  const handleChangeYear = (value) => {
    setYearFilter(value); 
  };

/////filter 
  const filteredScenes = scenes
  .filter(scene=>scene.movie.toLowerCase().includes(filmFilter))
  .filter (scene => {
    if (yearFilter === ''){
      return true
    }else{
      return parseInt(yearFilter) === scene.year;
    }
  });

////get unique years even though they are repeated in the list
  const getYears = () => {
  const years = scenes.map ((scene) => scene.year)
  const singleYears = new Set(years);
  const singlesArray = [...singleYears];
  return singlesArray; 
  }
  
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="sectionList">
          <h2 className="sectionList_title">Here you can find your wow</h2>
          <Filters 
          filmFilter={filmFilter} 
          handleChange={handleChange}
          yearFilter={yearFilter}
          handleChangeYear={handleChangeYear}
          years = {getYears()}
          />
          <MovieSceneList 
          scenes={filteredScenes} 
          />
        </section>
      </main> 
    </div>
  );
};

export default App;