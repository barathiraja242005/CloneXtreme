import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-white sticky-top shadow">
            <Container>
                <Navbar.Brand>
                    <a href="">
                        <img src="public/assets/logo.jpg" height="50px" width="50px" alt="" className="me-2" />
                        <img src="public/assets/rectLogo.jpg" height="50px" alt="" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/branches">Branches</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
};

export default Header;
