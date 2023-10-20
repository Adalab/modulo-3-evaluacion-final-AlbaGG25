import React from 'react';
import { useState, useEffect} from 'react';
import Header from "./Header";
import MovieSceneList from "./MovieSceneList";
import getDataFromApi from './Services'; 
import "../styles/App.scss";


const App = () => {
  const [scenes, setScenes] = useState([]); 

  useEffect(() => {
      getDataFromApi().then ((cleanData) => {
        setScenes(cleanData);
      });
    }, []);
  
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="sectionList">
          <h2 className="sectionList_title">Here you can find your wow</h2>
          <MovieSceneList scenes={scenes}/>
        </section>
      </main> 
    </div>
  );
};

export default App;