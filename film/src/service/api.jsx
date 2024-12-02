import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=56ed25d805870789e4f3f6e22b30fd29"
  );
  return movie.data.results;
  //   console.log({ getMovieList: movie });
};

export const searchMovie = async (q) => {
  const search1 = await axios.get(
    `${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`
  );
  return search1.data;
};
