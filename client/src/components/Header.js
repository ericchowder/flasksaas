import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

// Vanilla JS object using CSS properties
const navBarStyle = {
  backgroundColor: "lightblue",
};

// Props allows variables to be passed in from where the component is being used
// Here, the title variable was passed in and used
const Header = ({ title }) => {
  return (
    <Navbar style={navBarStyle} variant="light">
      {/* Previous title bar
      <Navbar.Brand href="/">{title}</Navbar.Brand>
      */}
      <Logo alt={title} style={{ maxWidth: "20rem", maxHeight: "2rem" }} />
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">Counter</Nav.Link>
    </Navbar>
  );
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

export default Header;
