import React from 'react';
import './TravellerSidebar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus, faListAlt, faComment} from '@fortawesome/free-solid-svg-icons'
const TravellerSidebar = () => {
    const { id } = useParams();
    return (
        <div className="col-md-4 traveller">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand className="brand"><Link to="/home">Let's Travel</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="traveller-items">
                        <Nav.Link><Link to={`/dashboard/book/${id}`}><FontAwesomeIcon className="icon" icon={faCartPlus} />Book</Link></Nav.Link>
                        <Nav.Link><Link to="/dashboard/bookingList"><FontAwesomeIcon className="icon" icon={faListAlt} /> Booking</Link></Nav.Link>
                        <Nav.Link><Link to="/dashboard/addReview"><FontAwesomeIcon className="icon" icon={faComment} />Add Review</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default TravellerSidebar;