import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import styled from 'styled-components';


const Styles = styled.div`
margin:auto;
`
function Home(){
    return(
        <Styles>
            <Container>
                <div className="text-center p-4">
                        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5WdXGof9-myjMjjvhv4wO-caGJ217YKYTQ&usqp=CAU" height='200px'
                        width='200px' className="mt-5"/></p>
                        
                        <p><h2><b>Rakesh Shrestha</b></h2></p>
                        <p><h3>Full Stack Web Developer</h3></p>
                        
                        <p><hr></hr></p>
                        <p>
                        HTML | CSS | CSS | JavaScript | jQuery | React | ReactNative | Ruby on Rails
                        </p>
                       <p >
                           <IconContext.Provider value={{ color:'black', size:'3rem' }} >
                                <Row className="justify-content-md-center">
                                    <Col xs lg="1"><a href="https://github.com/UnknownBeginner3222"><FaGithubSquare /></a></Col>
                                    <Col xs lg="1"><a href="https://www.linkedin.com/in/rakesh-shrestha-180171186/"><FaLinkedin /></a></Col>
                                    <Col xs lg="1"><a href="https://stackoverflow.com/users/13968903/rakesh-shrestha"><FaStackOverflow /></a></Col> 
                                    <Col xs lg="1"><a href="https://www.facebook.com/beginner.unknown"><FaFacebookSquare/></a></Col>
                                </Row>     
                           </IconContext.Provider>
                        </p>
                </div>
            </Container>
            
        </Styles>
    )
}

export default Home;