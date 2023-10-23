
import "../styles/App.scss";

const MovieSceneDetail = ({scenes}) => {
  return (
    <>
     <>
      <img 
      className="sceneCard_img"
      src={scenes.poster}
      alt={scenes.movie}
      title={scenes.movie}
      />
      <h4 className="sceneCard_movie">{scenes.movie}</h4>
      <h4 className="sceneCard_year">{scenes.year}</h4>
      <h5 className="sceneCard_sentence">{scenes.sentence}</h5>
      <h6 target="_blank"className="sceneCard_audio"> {scenes.audio}Listen to the wow</h6>
    </>
    </>
  )
}

export default MovieSceneDetail;
