import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import CardHome from "../components/CardHome";
import { getMovieList, searchMovie } from "../service/api";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";

// const drawerWidth = 280;
const Home = () => {
  const [popularMovies, setPopularmovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularmovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, index) => {
      return (
        <CardHome
          key={index}
          gambar={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          title={movie.original_title}
          overview={movie.overview}
        />
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularmovies(query.results);
    }
  };
  return (
    <Box>
      <Container sx={{ backgroundColor: "aqua" }}>
        {/* <Box> */}
        <Box pt={2}>
          <Navbar onChange={({ target }) => search(target.value)} />
        </Box>
        {/* <Grid
        my={4}
        sm={12}
        md={6}
        lg={4}
        // display="flex"
        justifyContent="center"
        // p={2}
        gap={2}
      > */}
        <Grid container>
          <PopularMovieList />
        </Grid>
        {/* </Grid> */}
        {/* </Box> */}
      </Container>
    </Box>
  );
};

export default Home;
