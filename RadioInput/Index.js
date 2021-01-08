import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import StyledRadio from './StyledRadio';
//import '../style.css';
import Wrapper from './Wrapper'




function RadioInput(props)
{
    let radio=(
        <Container>
            <Row>
                <Col>
                    {props.name}
                </Col>
                <Col></Col>

                <Col>
                    
               
                    <StyledRadio className="input y mr-3"
                        type="radio" name={props.name}
                        id="Male"
                        value="Male"
                        onChange={props.onChange}/>Male
                        </Col>
                        <Col>
                <StyledRadio classname="input  x mr-" type="radio" name={props.name}
                    id="Female"
                    value="Female"
                    onChange={props.onChange}/>Female
                   
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
    return <Wrapper>{radio}</Wrapper>
}
export default RadioInput;
//input type="radio" id="Male" value="Male"/>Male
                    //input type="radio" id="Female" value="Female"/>Female