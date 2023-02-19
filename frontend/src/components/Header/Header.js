

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar bg="primary" expand="lg" variant='dark'>
            <Container >
                <Navbar.Brand href="/">Note Notion</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className='m-auto'>
                        <Form inline>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />

                        </Form>
                    </Nav>
                    <Nav
                        // className="me-auto my-2 my-lg-0"
                        // style={{ maxHeight: '100px', width: '100%' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">My Notes</Nav.Link>

                        <NavDropdown title="Sayak Ghosh" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Logout
                            </NavDropdown.Item>
                            <NavDropdown.Divider />

                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;