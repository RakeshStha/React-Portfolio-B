import React from 'react';
import { Container,Card, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import Data from './data/data.json';

const Styles = styled.div`
.par{
    color: silver;
    font-weight:600;
}
.service{
    justify-content:center;
}
`


function Service() {
    return (
        <Styles>
        <Container className="text-center">
            <div className="m-5">
                <h1>Our Services</h1>
                <p className="par">Consectetur adipiscing nullam munc justo sagittls ultrices</p>
            </div>

            <div className="row service">
                {Data.map(file => {
                    return(
                        <div key= {file.id} className="col-sm-3 m-1">
                            <Card.Img width="100%" height="200px" src={file.img} alt={file.name} />
                            <Card.Body>
                                <Card.Title> {file.name} </Card.Title>
                                <Card.Text> {file.preview} </Card.Text>
                            </Card.Body>
                        </div>
                        )
                    })
                }
            </div>

        </Container>
        </Styles>
    )
}

export default Service;
