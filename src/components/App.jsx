import React from 'react';
import { useState, useEffect} from 'react';
import Header from "./Header";
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
        <section className="contacts">
          <h2 className="contacts__title title--medium">Here you can find your wow</h2>
        </section>
      </main> 
    </div>
  );
};

export default App;