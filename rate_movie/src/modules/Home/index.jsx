
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Carousel, Card, Button,Container,Row,Col } from 'react-bootstrap';
import kalki2898ad from '../../images/kalki2898ad.webp';
import Kalki_2898_AD from '../../images/Kalki_2898_AD.jpg'
import comedy from '../../images/comedy.jpeg'
import action from '../../images/action.jpg'
import './style.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


function Home() {

  return (
    <div style={{ backgroundColor: "rgba(50,50,50,0.5)", width: '100%', height: 'auto' }}>
      <div className="carousel">
        <Carousel
          fade
          style={{ backgroundColor: "blue", height: '50vh', marginBottom: '3rem' }}

          indicators={false}
          interval={5000}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={kalki2898ad}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ fontFamily: 'fantasy' }}>Kalki 2898 AD</h3>
              <p style={{ fontFamily: 'fantasy', fontWeight: 'bolder' }}>A modern avatar of the Hindu god Vishnu, is said to have descended on Earth to protect the world from evil forces.</p>
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
        <Card className="custom-card" >
          <Card.Img variant="top" src={Kalki_2898_AD} />
          <Card.Body style={{ display: 'grid', placeItems: 'center' }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Watch</Button>
          </Card.Body>
        </Card>
        <Card className="custom-card" >
          <Card.Img variant="top" src={Kalki_2898_AD} />
          <Card.Body style={{ display: 'grid', placeItems: 'center' }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Watch</Button>
          </Card.Body>
        </Card>
        <Card className="custom-card" >
          <Card.Img variant="top" src={Kalki_2898_AD} />
          <Card.Body style={{ display: 'grid', placeItems: 'center' }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Watch</Button>
          </Card.Body>
        </Card>
        <Card className="custom-card" >
          <Card.Img variant="top" src={Kalki_2898_AD} />
          <Card.Body style={{ display: 'grid', placeItems: 'center' }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Watch</Button>
          </Card.Body>
        </Card>
        <Card className="custom-card" >
          <Card.Img variant="top" src={Kalki_2898_AD} />
          <Card.Body style={{ display: 'grid', placeItems: 'center' }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Watch</Button>
          </Card.Body>
        </Card>
        <Card className="custom-card" >
          <Card.Img variant="top" src={Kalki_2898_AD} />
          <Card.Body style={{ display: 'grid', placeItems: 'center' }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Watch</Button>
          </Card.Body>
        </Card>
        <Card className="custom-card" >
          <Card.Img variant="top" src={Kalki_2898_AD} />
          <Card.Body style={{ display: 'grid', placeItems: 'center' }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Watch</Button>
          </Card.Body>
        </Card>
        <Card className="custom-card" >
          <Card.Img variant="top" src={Kalki_2898_AD} />
          <Card.Body style={{ display: 'grid', placeItems: 'center' }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Watch</Button>
          </Card.Body>
        </Card>
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
      <footer className="bg-dark text-white mt-5">
        <Container>
          <Row className="py-4">
            <Col md={4} className="text-center text-md-left">
              <h5>About Us</h5>
              <p>We are dedicated to providing the best service to our customers.</p>
            </Col>
            <Col md={4} className="text-center">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">Services</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
              </ul>
            </Col>
            <Col md={4} className="text-center text-md-right">
              <h5>Follow Us</h5>
              <a href="#" className="text-white mx-2"><FaFacebookF /></a>
              <a href="#" className="text-white mx-2"><FaTwitter /></a>
              <a href="#" className="text-white mx-2"><FaInstagram /></a>
              <a href="#" className="text-white mx-2"><FaLinkedin /></a>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p className="mb-0">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
