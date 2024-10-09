
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import kalki2898ad from '../../images/kalki2898ad.webp';
import action from '../../images/action.jpg'
import './style.css';
import axios from 'axios'


function Home() {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const movieIds = [3, 4, 5, 6, 7];
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const fetchedMovies = await Promise.all(
          movieIds.map(async (id) => {
            const response = await axios.get(`http://127.0.0.1:8000/api/movies/${id}`);
            return response.data;
          })
        );
        setMovies(fetchedMovies);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch movie data');
        setLoading(false);
      }
    };

    fetchAllMovies();
  }, [movieIds]);



  return (
    <div style={{ backgroundColor: "rgba(50,50,50,0.5)", width: '100%', height: 'auto' }}>
      <div className="carousel">
        <Carousel
          fade
          style={{ backgroundColor: "blue", height: '50vh', marginBottom: '3rem' }}

          indicators={false}
          interval={5000}
        >


          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={kalki2898ad}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={kalki2898ad}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={kalki2898ad}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="cards">
        {loading ? (
          <p>Loading movies...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          movies.map((movie) => (
            <Card key={movie.id} className="custom-card">
              <Card.Img variant="top" src={movie.poster_image || kalki2898ad} /> {/* Use the movie's poster image or a default */}
              <Card.Body style={{ display: 'grid', placeItems: 'center' }}>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description || 'No description available.'}</Card.Text>
                <Button variant="danger">Watch</Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>




      <div className="category">
        <div className="category-inner">
          <Card className='category-card' style={{
            width: '15rem',
            backgroundImage: `url(${action})`,
            backgroundSize: 'cover', // Ensures the image covers the entire card
            backgroundPosition: 'center', // Centers the background image
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}>
            <Card.Body>
              <Card.Title>Action</Card.Title>
              <Card.Subtitle className="mb-2 text-light ">2020 - 2024</Card.Subtitle>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className='category-card' style={{
            width: '15rem',
            backgroundImage: `url(${action})`,
            backgroundSize: 'cover', // Ensures the image covers the entire card
            backgroundPosition: 'center', // Centers the background image
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}>
            <Card.Body>
              <Card.Title>Adventure</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020 - 2024</Card.Subtitle>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className='category-card' style={{
            width: '15rem',
            backgroundImage: `url(${action})`,
            backgroundSize: 'cover', // Ensures the image covers the entire card
            backgroundPosition: 'center', // Centers the background image
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}>
            <Card.Body>
              <Card.Title>Comedy</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020 - 2024</Card.Subtitle>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className='category-card' style={{
            width: '15rem',
            backgroundImage: `url(${action})`,
            backgroundSize: 'cover', // Ensures the image covers the entire card
            backgroundPosition: 'center', // Centers the background image
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}>
            <Card.Body>
              <Card.Title>Drama</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020 - 2024</Card.Subtitle>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className='category-card' style={{
            width: '15rem',
            backgroundImage: `url(${action})`,
            backgroundSize: 'cover', // Ensures the image covers the entire card
            backgroundPosition: 'center', // Centers the background image
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}>
            <Card.Body>
              <Card.Title>Fantasy</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020 - 2024</Card.Subtitle>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className='category-card' style={{
            width: '15rem',
            backgroundImage: `url(${action})`,
            backgroundSize: 'cover', // Ensures the image covers the entire card
            backgroundPosition: 'center', // Centers the background image
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}>
            <Card.Body>
              <Card.Title>Horror</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020 - 2024</Card.Subtitle>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className='category-card' style={{
            width: '15rem',
            backgroundImage: `url(${action})`,
            backgroundSize: 'cover', // Ensures the image covers the entire card
            backgroundPosition: 'center', // Centers the background image
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}>
            <Card.Body>
              <Card.Title>Mystery</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020 - 2024</Card.Subtitle>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className='category-card' style={{
            width: '15rem',
            backgroundImage: `url(${action})`,
            backgroundSize: 'cover', // Ensures the image covers the entire card
            backgroundPosition: 'center', // Centers the background image
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}>
            <Card.Body>
              <Card.Title>Romance</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020 - 2024</Card.Subtitle>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className='category-card' style={{
            width: '15rem',
            backgroundImage: `url(${action})`,
            backgroundSize: 'cover', // Ensures the image covers the entire card
            backgroundPosition: 'center', // Centers the background image
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}>
            <Card.Body>
              <Card.Title>Sci-Fi</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020 - 2024</Card.Subtitle>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className='category-card' style={{
            width: '15rem',
            backgroundImage: `url(${action})`,
            backgroundSize: 'cover', // Ensures the image covers the entire card
            backgroundPosition: 'center', // Centers the background image
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white'
          }}>
            <Card.Body>
              <Card.Title>Thriller</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2020 - 2024</Card.Subtitle>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card></div>
      </div>

    </div>
  );
}

export default Home;
