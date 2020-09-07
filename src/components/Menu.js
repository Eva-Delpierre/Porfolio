import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';

import {Link} from "react-scroll";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark fixed="top" expand="md">
        <NavbarBrand href="#about">
          <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              EVA DELPIERRE
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <Link
                activeClass="active"
                to="competences"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Compétences
              </Link>
            </NavItem>

            <NavItem>
              <Link
              activeClass="active"
              to="projets"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projets
            </Link>
            </NavItem>

          </Nav>
          <NavbarText>
            <Nav>
              <NavLink href="mailto:eva.delpierre@gmail.com" rel="noopener noreferrer"> <FontAwesomeIcon icon={faEnvelope} className="reseaux" />  </NavLink>
              <NavLink href="https://www.linkedin.com/in/eva-delpierre" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} className="reseaux" /> </NavLink>
              <NavLink href="https://github.com/Eva-Delpierre" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} className="reseaux" /> </NavLink>
            </Nav>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
