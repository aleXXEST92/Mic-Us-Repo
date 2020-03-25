import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'



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
                        <li className="nav-list-item">
                        <Link to="/sign-up">Sign Up</Link>
                        </li>
                    </Navbar.Collapse>
        </Navbar>
        </div>
       </> 
    )
}

export default Navigation;