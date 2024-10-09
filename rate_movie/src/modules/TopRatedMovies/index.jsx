import { React, useEffect, useState } from 'react';
import inter from '../../images/interstellar.jpg';
import './style.css';
import { Card } from 'react-bootstrap';
import axios from 'axios';



function Index() {

  const [movies, setMovie] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieIds = [3, 4, 5, 6, 7];
        const fetchedMovies = await Promise.all(
          movieIds.map(async (id) => {
            const response = await axios.get(`http://127.0.0.1:8000/api/movies/${id}`);
            return response.data; // Return the movie data for each id
          })
        );
        setMovie(fetchedMovies)
      }
      catch (err) {
        console.log("error......" + err.message)
      }
    }
    movies.map((movie) => {
      console.log("movies..." + movie.title);

    })
    fetchMovies()
  }, [])
  return (
    <div>
      <div className="top">
        <img src={inter} alt="Interstellar" className="background-image" />
        <p className="overlay-text">
          Discover the finest cinematic experiences with our curated list of top-rated movies </p>
      </div>

      {/* <div className="title" style={{color:'white'}}>
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <p key={index}>Movie Title: {movie.title}</p> // Replace with your JSX
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div> */}

      <div className="cards ">

        {movies.length > 0 ? (
          movies.map((movie) => (
            <Card key={movie.id} style={{ height:'43rem' }} className='movie-cards'>
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Img src={movie.poster_image} />
                <Card.Subtitle className="mb-2 text-muted">{movie.subtitle || 'No subtitle'}</Card.Subtitle>
                <Card.Text>{movie.info || 'No info available'}</Card.Text>
                <Card.Link className='card-link' href={`https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title)}`}
                  target="_blank"
                  rel="noopener noreferrer">Watch Trailer</Card.Link>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Loading...</p>
        )}


      </div>
    </div>
  );
}

export default Index;
