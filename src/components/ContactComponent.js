import React, {Component} from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import { IconContext } from 'react-icons';
import {Checkbox} from 'react-input-checkbox';
import { FaGithub, FaFacebook, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import styled from 'styled-components';
import {Control, LocalForm, Errors} from 'react-redux-form';


const Styles = styled.div`
.a{
    color: black;
    font-weight:500;
}

`



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);





// for numbers
//const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            agree:false,
           
            
        }
        
    }
    
   handleAgree=()=>{
    this.setState({agree: !this.state.agree});
   }
   
    handlerSubmit(values){
        if(this.state.agree){
        console.log(JSON.stringify(values));
        alert(JSON.stringify(values));
    }
    else{
        
          console.log("Please agree our terms and condition")
        
    }
    }
    
    
    
    render(){
        
       
    return(
        <Styles>
        <Container >
            
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

                    <LocalForm onSubmit={(values) => this.handlerSubmit(values)}>
                    <Row className="form-group">
                        <Col>
                        <Control.text model=".name"
                          name="name"
                          className="form-control"
                        placeholder="Enter your Name" 
                        validators={{
                            required, minLength: minLength(3), maxLength: maxLength(15)
                        }}
                       />
                       <Errors
                            className="text-danger"
                            model=".name"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                            
                       />
                        </Col>
                    </Row><br></br>
                    <Row className="form-group">
                    <Col>
                        <Control.text model=".email" 
                        name="email"
                        className="form-control"
                        placeholder="Enter a valid email address" 
                        validators={{
                            required, validEmail
                        }}
                       />
                       <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            messages={{
                                required: 'Required',
                                validEmail: 'Invalid Email Address'
                            }}
                       />
                    </Col>
                    </Row><br></br>
                    <Row className="form-group">
                        <Col>
                        <Control.textarea model=".message" 
                         rows={3} 
                        placeholder="Enter your message"
                        className="form-control"
                        validators={{
                            required, minLength: minLength(3), maxLength: maxLength(100)
                        }}
                       />
                       <Errors
                            className="text-danger"
                            model=".message"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 100 characters or less'
                            }}
                            
                       />
                        </Col>
                    </Row><br></br>
                    <Row className="form-group">
                        <Col>
                        <Control type="password" model=".password" 
                        name="password"
                        className="form-control"
                        placeholder="Enter your password" 
                        validators={{
                            required, 
                                passwordsMatch: (value) => vals.password === vals.conPassword,
                              
                        }}
                        
                       />
                       <Errors
                            className="text-danger"
                            model=".password"
                            show="touched"
                            messages={{
                                required: 'Required',
                                
                                passwordsMatch: 'Password doesnot match'
                            }}
                            
                    
                       />
                       
                        </Col>
                    </Row><br></br>
                    <Row className="form-group">
                        <Col>
                        <Control type="password" model=".conpassword" 
                        name="conpassword"
                        className="form-control"
                        placeholder="Please confirm your password" 
                        validators={{
                            required
                        }}
                       />
                       <Errors
                            className="text-danger"
                            model=".conpassword"
                            show="touched"
                            messages={{
                                required: 'Required',
                                
                                passwordsMatch: 'Password doesnot match'
                            }}
                            
                    
                       />
                        </Col>
                    </Row><br></br>
                    <Row className="form-group">
                        <Col>
                            <Checkbox name="agree" value={this.state.agree} onChange={this.handleAgree}
                            
                            > <strong>I accepts the terms and condition.</strong></Checkbox>
                            
                        </Col>
                        
                    </Row>
                    <Alert variant="info" >Note: Please agree our terms and condition to proceed forward.<br></br>
                            Thank you!</Alert>
                    <br></br>
                    <Button type="submit" className="rounded-pill bg-secondary" disabled={!(this.state.agree)}>Submit</Button>
                    </LocalForm>
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