import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';


const Styles = styled.div`
.at{
    color:#800080;
    font-weight: 700;
}
.pp{
    color:black;
    font-weight: 600;
}

`

function About(){
    return(
        <Styles>
        <Container >
            <Row className="mt-5">
                <Col sm={6} className="p-5">
                <Row className="justify-content-md-center">
                    <Col>
                    <h1 className="at p-3">ABOUT US</h1>
                    <p className="pp p-3">
                        Sed ut perspiciatis underamanis iste natus error sit 
                        voluptatem accosantium doloremque laudantiuim totem rem aperiam.
                    </p>
                    <p className="p-3"><Button variant="warning" onClick={() => window.open('mailto:email@example.com?subject=Subject&body=Body%20goes%20here')} >Send Mail</Button></p>
                    </Col>    
                </Row>
                    
                </Col>
                <Col sm={6} >
                    <Row className="p-1">
                    <img src="../images/about.png" height="500px" width="100%" fluid/>
                    </Row>
                </Col>
            </Row>
        </Container>
        </Styles>
    )
}

export default About;