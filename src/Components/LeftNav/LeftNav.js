import { faClock, faCoffee, faFile, faGear, faHouse, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './LeftNav.css';

function LeftNav() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <input type="text" className='me-auto input-styling' placeholder='Search'/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
               
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                <div className="icon-container">
                    <FontAwesomeIcon  className='icon-stying'  icon={ faHouse } />
                    <FontAwesomeIcon  className='icon-stying'  icon={ faUser } />
                    <FontAwesomeIcon  className='icon-stying'  icon={ faMessage } />
                    <FontAwesomeIcon  className='icon-stying'  icon={ faMessage } />
                    <FontAwesomeIcon  className='icon-stying'  icon={ faClock } />
                    <FontAwesomeIcon  className='icon-stying'  icon={ faFile } />
                    <FontAwesomeIcon  className='icon-stying'  icon={ faGear } />
                </div>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default LeftNav;