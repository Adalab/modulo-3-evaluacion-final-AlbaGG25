import MovieSceneItem from "./MovieSceneItem";
import "../styles/App.scss";

const MovieSceneList = ({scenes}) => {
  const renderScenes =scenes.map((scene) => { 
  return (
    <li className="sceneCard" key={scene.id}>
        <MovieSceneItem scene={scene}/>
    </li>
  );
  });


  return (
    <>
     <ul className="sceneList">{renderScenes}</ul>
    </>
  )
}

export default MovieSceneList;
