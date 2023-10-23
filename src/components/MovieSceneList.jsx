import MovieSceneItem from "./MovieSceneItem";
import "../styles/App.scss";

const MovieSceneList = ({scenes}) => {

  const renderScenes = scenes.map((scene, id) => { 
   return (
    <li className="sceneCard" key={id}>
        <MovieSceneItem scene={scene}/>
    </li>)
  })

  return (
    <>
     <ul className="sceneList">{renderScenes}</ul>
    </>
  
  )
}

export default MovieSceneList;
