import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.style.css"

const Header = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-white sticky-top shadow pt-0">
            <Container className="pt-0 pb-0">
                <Navbar.Brand>
                    <a href="">
                        <img src="public/assets/logo.jpg" height="50px" width="50px" alt="" className="me-2" />
                        <img src="public/assets/rectLogo.jpg" height="50px" alt="" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="headerLink me-2">Home</Nav.Link>
                        <Nav.Link href="/about" className="headerLink me-2">About</Nav.Link>
                        <Nav.Link href="/services" className="headerLink me-2">Services</Nav.Link>
                        <Nav.Link href="/branches" className="headerLink me-2">Branches</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
};

export default Header;
