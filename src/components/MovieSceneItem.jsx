import { Link } from "react-router-dom";
import "../styles/App.scss";

const MovieSceneItem = ({scene}) => {
  return (
    <>
    <Link to={"/film/" + scene.id} className="sceneDetail_goback">
      <img 
      className="sceneCard_img"
      src={scene.poster}
      alt={scene.movie}
      title={scene.movie}
      />
      <h4 className="sceneCard_movie">{scene.movie}</h4>
      <h4 className="sceneCard_year">{scene.year}</h4>
      <h5 className="sceneCard_sentence">&quot;{scene.sentence}&quot;</h5>
    </Link>
    </>
  )
}

export default MovieSceneItem;
