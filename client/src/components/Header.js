import React from 'react';
import { Navbar } from 'react-bootstrap';


// Props allows variables to be passed in from where the component is being used
// Here, the title variable was passed in and used
const Header = ({ title }) => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Navbar>
    )
};

/* Long way
const Header = (props) => {
    // const { title } = props
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        </Navbar>
    )
};
*/

export default Header