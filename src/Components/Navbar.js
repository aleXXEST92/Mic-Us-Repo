import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';


const Navigation = () => {
    return (
        <>
        <div className="nav">
        <Navbar fixed="top">
            <Navbar.Brand href="#home">
                <h1><b>mic</b><i>US</i></h1>
            </Navbar.Brand>
            <div class="slide">Promote Yourself, Or We Will!</div>
                <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#register">Sign Up Now</Nav.Link>
                        <Nav.Link href="#trending">Trending Now</Nav.Link>
                    </Navbar.Collapse>
        </Navbar>
        </div>
       </> 
    )
}

export default Navigation;