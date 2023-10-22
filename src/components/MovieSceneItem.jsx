
import "../styles/App.scss";

const MovieSceneItem = ({scene}) => {
  return (
    <>
      <img 
      className="sceneCard_img"
      src={scene.poster}
      alt={scene.movie}
      title={scene.movie}
      />
      <h4 className="sceneCard_movie">{scene.movie}</h4>
      <h4 className="sceneCard_year">{scene.year}</h4>
      <h5 className="sceneCard_sentence">{scene.sentence}</h5>
      <h6 target="_blank"className="sceneCard_audio">Listen to the wow</h6>
    </>
  )
}

export default MovieSceneItem;
