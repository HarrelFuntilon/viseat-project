import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Navbar expand="lg" variant="tabs" className="sticky-nav fixed w-full">
          <Container>
            <Navbar.Brand href="#home">VisEat</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav className="mx-5">
                <Link to="/" className="m-3 custom-nav-link">
                  Home
                </Link>

                <Link className="m-3 custom-nav-link" to="/pages/promote">
                  Promote
                </Link>

                <Link to="/pages/explore" className="m-3 custom-nav-link">
                  Explore
                </Link>

                <Link to="/pages/about" className="m-3 custom-nav-link">
                  About
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default Header;
