
const getDataFromApi = () => {
   return fetch ('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then (response => response.json())
    .then (data => {
      const cleanData = data.map (scenes => {
        return {
        id: scenes.character,
        poster: scenes.poster,
        movie: scenes.movie,
        sentence: scenes.full_line,
        year: scenes.year,
        audio: scenes.audio
      }
      });
      return cleanData;
});
}

export default getDataFromApi;
