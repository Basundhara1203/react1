import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css' ;
//import '../style.css';
import Wrapper from './Wrapper';
import StyledDate from './StyledDate';
import dateS from './dateStyles'




const today=new Date().toISOString().slice(0,10)

function DateInput(props)
{ let date =
    (
        <Container>
            <Row>
                <Col>
                    {props.name}
                </Col>
                
                <Col>
                
                    <StyledDate className="input col-11" 
                            type="date" name={props.name}
                            id={props.id}
                            max={today}
                            
                            onChange={props.onChange}></StyledDate>

               
                </Col>
                
            </Row>
            <Row>
             <Col></Col>
             <Col className="text-danger">
                    {props.ErrorSet[props.name]}
                </Col>
               
               
            </Row>
            </Container>
    );
    return <Wrapper>{date}</Wrapper>
}
export default DateInput;