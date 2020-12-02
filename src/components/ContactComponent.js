import React, {Component} from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaGithub, FaFacebook, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import styled from 'styled-components';



const Styles = styled.div`
.a{
    color: black;
    font-weight:500;
}

`

class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            message:''
        }
    }
    
    handlerName = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    handlerEmailChange = (e) => {
        this.setState({
            email:e.target.value
        })
    }
    handlerMessage = (e) => {
        this.setState({
            message:e.target.value
        })
    }
    handlerSubmit = (e) =>{
        alert(JSON.stringify(this.state))
        console.log(this.state)
        e.preventDefault()
    }
    
    render(){
    return(
        <Styles>
        <Container className="m-auto">
            <Row className=" mt-5">
                <Col sm={6}>
                    <div className="mt-5">
                    <h1 className="m-2 p-2"><b>GET IN TOUCH</b></h1>
                    <h3 className="m-2 p-2"><b>Hey! We are looking forward
                        to start a project with you!</b>
                    </h3>
                    <p className="m-2 p-2 a" >
                        Etiam sit amet convallis erat - class aptent taciti
                        sociosqu ad litora torquent per conubia! Maecenas 
                        gravida lacus, Lorem etiam sit amet convallis erat.
                    </p>
                    <p className="m-2 p-2">
                           <IconContext.Provider value={{ color:'black', size:'2rem' }} >
                                <Row className="justify-content-md-right">
                                    <Col xs lg="1"><a href="https://github.com/UnknownBeginner3222"><FaGithub/></a></Col>
                                    <Col xs lg="1"><a href="https://www.linkedin.com/in/rakesh-shrestha-180171186/"><FaLinkedin /></a></Col>
                                    <Col xs lg="1"><a href="https://stackoverflow.com/users/13968903/rakesh-shrestha"><FaStackOverflow /></a></Col> 
                                    <Col xs lg="1"><a href="https://www.facebook.com/beginner.unknown"><FaFacebook/></a></Col>
                                </Row>     
                           </IconContext.Provider>
                        </p>
                        </div>
                </Col>
                <Col sm={6} className="p-3">
                    <div className="m-5">
                    <Card.Body className="p-2">
                    <Form onSubmit={this.handlerSubmit}>
                    <Form.Row>
                        <Col>
                        <Form.Control
                        type="text"  
                        placeholder="Enter your Name" 
                        value={this.state.name} 
                        onChange={this.handlerName}
                        />
                        </Col>
                    </Form.Row><br></br>
                    <Form.Row>
                    <Col>
                        <Form.Control 
                        type="email"
                        placeholder="Enter a valid email address" 
                        value={this.state.email}
                        onChange={this.handlerEmailChange}/>
                    </Col>
                    </Form.Row><br></br>
                    <Form.Row>
                        <Col>
                        <Form.Control 
                        as="textarea" rows={3} 
                        placeholder="Enter your message"
                        value={this.state.message} 
                        onChange={this.handlerMessage}/>
                        </Col>
                    </Form.Row><br></br>
                    <Form.Row>
                        <Col>
                        <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2 a"
                                label="I accept the Terms of Service"
                                
                            />
                        </Col>
                    </Form.Row><br></br>
                    <Button type="submit" className="rounded-pill bg-secondary">Submit</Button>
                    </Form>
                    </Card.Body>
                    </div>
                </Col>
            </Row>
            <br></br>
        </Container>
        </Styles>
    )
}
}

export default Contact;