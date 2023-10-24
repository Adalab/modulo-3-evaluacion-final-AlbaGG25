import MovieSceneItem from "./MovieSceneItem";
import PropTypes from "prop-types";
import "../styles/App.scss";


const MovieSceneList = ({scenes}) => {

  const renderScenes = scenes.map((scene) => { 
   return (
      <li className="sceneCard" key={scene.id}>
        <MovieSceneItem scene={scene}/>
      </li>)
  })

  return (
    <>
     <ul className="sceneList">{renderScenes}</ul>
    </>
  
  )
}

MovieSceneList.propTypes = {
  scenes: PropTypes.array,
};


export default MovieSceneList;
