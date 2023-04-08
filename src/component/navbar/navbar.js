import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavbarDarkTop() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/pngegg.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    뉴스리스트
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarDarkTop;