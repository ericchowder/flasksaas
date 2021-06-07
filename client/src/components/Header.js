import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Flask Saas</Navbar.Brand>
        </Navbar>
    )
};

export default Header