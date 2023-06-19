import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="logo.svg"
              width="60"
              height="60"
              className="d-inline-block align-center m-1"
            />{' '}
            Harold's Dispensary
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;