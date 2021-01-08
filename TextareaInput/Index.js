import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import '../style.css';
import Wrapper from './Wrapper'
import StyledTextarea from './StyledTextarea'



function TextareaInput(props)
{
    let textareat=(
        <Container>
            <Row>
                <Col>
                    {props.name}
                </Col>

                <Col>
                    <StyledTextarea  className="textarea col-11"
                        name={props.name}
                        id={props.id}
                        
                        onChange={props.onChange}>
                    </StyledTextarea>

                   
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
    return <Wrapper>{textareat}</Wrapper>
}
export default TextareaInput;