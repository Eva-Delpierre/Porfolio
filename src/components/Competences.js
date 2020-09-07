import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faServer, faDatabase, faCodeBranch, faCheck} from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col, Card, CardText, CardBody, CardTitle, CardHeader} from 'reactstrap';


function Competences() {
  return ( 
    <div id="competences" className="d-flex align-items-center justify-content-center">
        <Container>
            <h3> Mes compétences</h3> 
            <Row className="d-flex justify-content-center">
                <Col xs={9} sm={7} lg={3}>
                    <Card className="border-primary mb-3">
                        <CardHeader> <FontAwesomeIcon icon={faCode} style={{fontSize: 20, color: 'red'}}/> </CardHeader>
                        <CardBody>
                            <CardTitle className="card-title"> Front-end </CardTitle>
                            <CardText>
                            <ul>
                                <li> <FontAwesomeIcon icon={faCheck} className="iconeCheck"/> HTML / CSS</li>
                                <li> <FontAwesomeIcon icon={faCheck} className="iconeCheck"/> JavaScript / jQuery </li>
                                <li> <FontAwesomeIcon icon={faCheck} className="iconeCheck"/> React / React Native </li>
                                <li> <FontAwesomeIcon icon={faCheck} className="iconeCheck"/> Bootstrap </li>
                            </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs={9} sm={7} lg={3}>
                    <Card className="border-primary mb-3">
                        <CardHeader> <FontAwesomeIcon icon={faServer} style={{fontSize: 20, color: 'red'}}/> </CardHeader>
                        <CardBody>
                            <CardTitle className="card-title"> Back-end </CardTitle>
                            <CardText>
                            <ul> 
                                <li> <FontAwesomeIcon icon={faCheck} className="iconeCheck"/> Node.js </li>
                                <li> <FontAwesomeIcon icon={faCheck} className="iconeCheck"/> Express.js </li>
                            </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs={9} sm={7} lg={3}>
                    <Card className="border-primary mb-3">
                        <CardHeader> <FontAwesomeIcon icon={faDatabase} style={{fontSize: 20, color: 'red'}}/> </CardHeader>
                        <CardBody>
                            <CardTitle className="card-title"> Base de données </CardTitle>
                            <CardText>
                            <ul>
                                <li> <FontAwesomeIcon icon={faCheck} className="iconeCheck"/> Mongo DB </li>
                            </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs={9} sm={7} lg={3}>
                    <Card className="border-primary mb-3">
                        <CardHeader> <FontAwesomeIcon icon={faCodeBranch} style={{fontSize: 20, color: 'red'}}/> </CardHeader>
                        <CardBody>
                            <CardTitle className="card-title"> Workflow </CardTitle>
                            <CardText>
                            <ul>
                                <li> <FontAwesomeIcon icon={faCheck} className="iconeCheck"/> Git / GitHub </li>
                            </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </Container>
    </div>
  );
}

export default Competences;
