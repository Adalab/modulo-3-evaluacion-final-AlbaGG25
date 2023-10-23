import { Link } from "react-router-dom";
import "../styles/App.scss";

const MovieSceneDetail = ({scenes}) => {
  return (
    <>
     <div className="sceneDetail">
      <img 
      className="sceneDetail_img"
      src={scenes.poster}
      alt={scenes.movie}
      title={scenes.movie}
      />
      <h4 className="sceneDetail_movie">{scenes.movie}</h4>
      <h5 className="sceneDetail_director"><i className="fa-solid fa-clapperboard"></i> {scenes.director}</h5>
      <h6 className="sceneDetail_sentence">&quot;{scenes.sentence}&quot;</h6>
      <a href={scenes.audio} target="_blank" rel="noreferrer" className="sceneDetail_audio"><i className="fa-solid fa-volume-high"></i>Listen to the wow</a>
      <Link to="/" className="sceneDetail_goback"><i className="fa-solid fa-circle-chevron-left "></i>Volver
      </Link>
    </div>
    </>
  )
}

export default MovieSceneDetail;
