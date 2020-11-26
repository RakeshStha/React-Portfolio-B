import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaGithubSquare, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import styled from 'styled-components';


const Styles = styled.div`
margin:auto;
`
function Home(){
    return(
        <Styles>
            <Container>
                <div className="text-center">
                        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5WdXGof9-myjMjjvhv4wO-caGJ217YKYTQ&usqp=CAU" height='200px'
                        width='200px' className="mt-5"/></p>
                        <h2><b>Rakesh Shrestha</b></h2>
                        <h3>Full Stack Web Developer</h3>
                        
                        <hr></hr>
                        <p>
                        HTML | CSS | CSS | JavaScript | jQuery | React | ReactNative | Ruby on Rails
                        </p>
                       <p >
                           <IconContext.Provider value={{ color:'grey', size:'3rem' }} >
                                <Row className="justify-content-md-center">
                                    <Col xs lg="1"><FaGithubSquare /></Col>
                                    <Col xs lg="1"><FaLinkedin /></Col>
                                    <Col xs lg="1"><FaStackOverflow /></Col> 
                                </Row>     
                           </IconContext.Provider>
                        </p>
                </div>
            </Container>
            
        </Styles>
    )
}

export default Home;