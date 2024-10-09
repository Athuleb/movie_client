import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import { FaFacebookF,FaInstagram,FaLinkedin,FaTwitter } from 'react-icons/fa';
function Footer() {
    return (
        <div> <footer className="bg-dark text-white mt-5">
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
        </footer></div>
    )
}

export default Footer