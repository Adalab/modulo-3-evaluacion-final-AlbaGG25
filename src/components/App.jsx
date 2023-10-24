import React from 'react';
import { useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import { useLocation, matchPath } from "react-router";

import Header from "./Header";
import MovieSceneList from "./MovieSceneList";
import MovieSceneDetail from "./MovieSceneDetail";
import Filters from "./Filters";
import Footer from "./Footer";
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
      })
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
  .filter((scene)=>{
    return filmFilter === ''
    ? true 
    : scene.movie.toLowerCase().includes(filmFilter.toLowerCase())
  })
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

/////find id 
  const {pathname} = useLocation();
  const routeInfo = matchPath ("/film/:id", pathname);
  const sceneCardId = routeInfo !== null ? routeInfo.params.id : ""; 

////find scene card detail by id
  const sceneDetail = scenes.find(scene=>scene.id === sceneCardId); 
  
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Routes>
           <Route 
           path = "/"
           element = {
            <>
             <section className="sectionFilters">
               <h2 className="sectionFilters_title">Here you can find your wow</h2>
                 <Filters 
                  filmFilter={filmFilter} 
                  handleChange={handleChange}
                  yearFilter={yearFilter}
                  handleChangeYear={handleChangeYear}
                  years = {getYears()}
                  />
             </section>
             <section className="sectionList">
               {filteredScenes.length === 0 ? (<p className='sectionList_error'>The title you&apos;re looking for doesn&apos;t exist. Try again, please</p>):(<MovieSceneList scenes={filteredScenes} 
               />)}
             </section>
            </>
           } />
          <Route 
           path= "/film/:id"
           element={
            <MovieSceneDetail scenes={sceneDetail}/>
           }
           />
        </Routes>
       <Footer />
      </main> 
    
    </div>
  );
};

export default App;