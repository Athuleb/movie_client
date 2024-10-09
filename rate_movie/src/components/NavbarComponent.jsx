import React from "react";
import '../css/Navbar.css';
import { Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import routerList from "../router/routerlist";
function NavbarComponent() {
    return (
        <div className="main" >
            <Nav variant="tabs" className="w-100 Nav sticky-top pt-1 mb-1">
                <Nav.Item className="ml-auto">
                    <Nav.Link disabled className="navbar-title p-1 ms-5 me-4 " ><h2>RateMovie</h2></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={routerList.home}>Home</Nav.Link> {/* Use Link for navigation */}
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={routerList.topRatedMovies}>Top Rating Movies</Nav.Link> {/* Use Link for navigation */}
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={routerList.lasterRelease}>Latest Releases</Nav.Link> {/* Use Link for navigation */}
                </Nav.Item>
                <Form className="ml-auto d-flex">
                    <FormControl type="text" placeholder="Search Movies" className="mr-sm-2" />
                    <Button variant="outline-light" id="btn">
                        <FaSearch /> {/* Add the search icon here */}
                    </Button>
                </Form>
            </Nav>
        </div>
    );
}

export default NavbarComponent;
