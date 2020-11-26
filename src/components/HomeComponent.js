import React from 'react'
import { Container, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';


const Styles = styled.div`
background-color:blue;
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
                        HTML | CSS | CSS | JavaScript | jQuery | React | ReactNative | Ruby on Rails<br>
                        </br>
                        <FontAwesomeIcon icon="user" />
                        <FontAwesomeIcon icon="user" />
                        <FontAwesomeIcon icon="user"/>
                        </p>
                        
                </div>
            </Container>
        </Styles>
    )
}

export default Home;