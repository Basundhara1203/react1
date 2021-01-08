import React, { Component } from "react";
//import './style.css'
import {Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import TextInput from 'components/TextInput/Index';
import { connect } from "react-redux";
//import { formValues } from "redux-form";
//import TextInput from './component/TextInput';
import Form from '../../components/Form/Index';
import DateInput from '../../components/DateInput/Index';
import SelectInput from '../../components/SelectInput/Index';
import RadioInput from '../../components/RadioInput/Index';
import TextareaInput from '../../components/TextareaInput/Index';
import {SubmitButton } from '../../components/SubmitButton/index';
import {ResetButton } from '../../components/ResetButton/index';
import {FormHead } from '../../components/FormHeader/index';




export default function SignInFormDesign(props) { 
  console.log()
    return(
      <div>
      <FormHead/>
    
        <Form>
        
        <form onSubmit={props.submitForm}>
        <fieldset className="set">
         <legend>Enter Details</legend>
            <div className="input-group">
             
              <TextInput
               
                name="EmployeeId"
                id="EmployeeId"
                //={props.state.EmployeeId}
                ErrorSet={props.ErrorSet}
                onChange={props.handleInputChange}
               
              />
            </div>
            <Row>
            <Col></Col>
            
                </Row>
                
            <div>
            <div className="input-group">
              
              <TextInput
                name="EmployeeName"
                id="EmployeeName"
                ErrorSet={props.ErrorSet}
                //value={props.state.EmployeeName}
                onChange={props.handleInputChange}
               
              />
    
            </div>
            <Row>
            <Col></Col>
            
                </Row>
            
            </div>

            <div>
            <div className="input-group">
              
              <DateInput
                name="DOB"
                id="DOB"
                ErrorSet={props.ErrorSet}
                //value={props.state.DOB}
                onChange={props.handleInputChange}
                
              />
    
            </div>
            <Row>
            <Col></Col>
           
            
            </Row>
            </div>
            <div>
            <div className="input-group">
              
              <RadioInput
              label="Gender"
                name="Gender"
                ErrorSet={props.ErrorSet}
                id="Gender"
                //value={props.state.Gender}
                onChange={props.handleInputChange}
                
              />
    
            </div>
            <Row>
            <Col></Col>
           
            </Row>
            
            </div>

            <div>
            <div className="input-group">
              
              <SelectInput
               /* name="Qualification"
                id="Qual"
                value={props.vals.values.Qual}
                onChange={props.handleInputChange}*/
                label="Qualification"
                name="Qual"
                id="Qual"
                ErrorSet={props.ErrorSet}
                 //value={props.state.Qual}
                onChange={props.handleInputChange}
                
              />
    
            </div>
            <Row>
            <Col></Col>
           
            </Row>
            
            </div>

            
            <div>
            <div className="input-group">
              
            <TextInput
                name="Mobile"
                id="Mobile"
                //value={props.state.Mobile}
                ErrorSet={props.ErrorSet}
                onChange={props.handleInputChange}
                
                
              />
    
            </div>
            <Row>
            <Col></Col>
          
            </Row>
            </div>
            
            <div>
            <div className="input-group">
             
              <TextInput
                name="Email"
                ErrorSet={props.ErrorSet}
                id="Email"
                  //value={props.state.Email}
                onChange={props.handleInputChange}
                
              />
    
            </div>
            <Row>
            <Col></Col>
          
            </Row>
            
            
            </div>

    
            <div className="input-group">
             
              <TextareaInput
               
                name="Address"
                id="Address"
                ErrorSet={props.ErrorSet}
                //value={props.state.Address}
                
                onChange={props.handleInputChange}
                
                
              />
            </div>
            <div>
            
                
            </div>
           
           <SubmitButton/>
           <ResetButton onReset={props.onReset}/>
          

         
           
            
            </fieldset>
          </form>
          <div className="message">
            
          </div>
        </Form>
        </div>

    );
}
//export default SignInFormDesign;



//export default connect(mapStateToProps)(SignInForm);
//<button type="submit" className="btn btn-success mr-3">Submit</button>
//<button type="reset" className="btn btn-danger mr-5" onClick={props.onReset}>Reset</button>
