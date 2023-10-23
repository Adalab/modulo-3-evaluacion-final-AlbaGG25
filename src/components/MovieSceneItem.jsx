import { Link } from "react-router-dom";
import "../styles/App.scss";

const MovieSceneItem = ({scene}) => {
  return (
    <>
    <Link to={"/user/" + scene.id} >
      <img 
      className="sceneCard_img"
      src={scene.poster}
      alt={scene.movie}
      title={scene.movie}
      />
      <h4 className="sceneCard_movie">{scene.movie}</h4>
      <h4 className="sceneCard_year">{scene.year}</h4>
      <h5 className="sceneCard_sentence">&quot;{scene.sentence}&quot;</h5>
      <h6 target="_blank"className="sceneCard_audio">Listen to the wow</h6>
    </Link>
    </>
  )
}

export default MovieSceneItem;
