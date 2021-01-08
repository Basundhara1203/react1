import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import '../style.css';
import Wrapper from './Wrapper'
import StyledText from './StyledText';




function TextInput(props)
{
    console.log(props);
    let text=(
        <Container>
            <Row>
                <Col>
                   {props.name}
                </Col>

                <Col>
                <StyledText className="input col-11" type="type" name={props.name}
                            id={props.id}
                            
                            onChange={props.onChange}/>
                           
                            

                        
            

                   
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
    return <Wrapper>{text}</Wrapper>
}

TextInput.propTypes = {
   // onChange: PropTypes.func
  // props:Proptypes.any
   
  }
  
export default TextInput;