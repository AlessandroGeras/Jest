const api = () => {

const api_key = "api_key=38c007f28d5b66f36b9c3cf8d8452a4b"; /* User ApiKey to make query */
const api_database = "https://api.themoviedb.org/3";
const api_top_rated = "/movie/top_rated?language=pt-BR&"; /* Take the top rated movies in PT-BR */
const query = api_database + api_top_rated + api_key;

const backdrop_path = "https://image.tmdb.org/t/p/original/"; /* Main image for Backdrop */

const getmovie = () => {
  fetch(query)
    .then((response) => response.json())
    .then((showjson) => {
      //Mostrar o nome do primeiro filme Top Rated
      //Garota da Século 20
      console.log(showjson.results[0].title);
})};

getmovie();

return {
  getmovie,
};

};

export default api;