import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import {Image, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileDownload} from '@fortawesome/free-solid-svg-icons';


function About() {
  return (
  <div id="about" className="d-flex align-items-center justify-content-center">   
    <Container>
        <Row>
            <Col xs={12} xl={4} className="d-flex align-items-center justify-content-center test">
                <Image src="../images/Eva2.jpg" style={{width: 300, height: 300}} roundedCircle className="img-fluid"/>
            </Col>

            <Col xs={12} xl={8} className="presentation">
                <h1 class="fonction"> Développeuse Web &amp; Mobile Junior</h1> <br/>
                
                <p className="description">
                  Je viens de terminer ma formation de Développeuse Web et Mobile à <a href="https://www.lacapsule.academy"> La Capsule </a> de Lyon ! <br/>
                  Pendant trois mois j’ai appris à développer des sites et applications mobiles avec Javascript, React	&amp; React Native, à gérer le backend avec Express et exploiter une base de données telle que Mongo DB. <br/>
                  Grâce aux projets réalisés j’ai également eu l’occasion de travailler en équipe avec Git hub. <br/> <br/>
                  Afin de consolider toutes ces nouvelles compétences, je suis à la recherche d’un stage de Développeuse Web &amp; Mobile à Lyon, d’une durée de 3 à 6 mois. <br/> 
                </p>

                <div className="cv">
                  <Button color="info">
                    <a href="../../CV_Eva_Delpierre.pdf" download>
                      <FontAwesomeIcon icon={faFileDownload} style={{fontSize: 20, color: 'dark', marginRight: "6px"}}/> Télécharger mon CV
                    </a>
                  </Button>
                </div>
            </Col>      
        </Row>
    </Container>
  </div>
  );
}

export default About;