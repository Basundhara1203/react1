import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import '../style.css';
import Wrapper from './Wrapper'
import StyledSelect from './StyledSelect'



function SelectInput(props)
{
   let select=(
        <Container>
            <Row>
                <Col>
                    {props.label}
                </Col>

                <Col>
                    <StyledSelect className="select col-11"
                        name={props.name}
                        id={props.id}
                        
                        onChange={props.onChange}>
                                <option value="Select">Select option</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="M.Tech">M.tech</option>
                    </StyledSelect>



                   
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
    return <Wrapper>{select}</Wrapper>
}
export default SelectInput;