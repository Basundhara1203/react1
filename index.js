/**
 *
 * Registration
 *
 */

import React, { memo } from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {actionsub,actionset,actionreset} from './actions'
//import TextInput from './component/TextInput';
import DateInput from '../../components/DateInput/Index';
import SelectInput from '../../components/SelectInput/Index';
import RadioInput from '../../components/RadioInput/Index';
import TextareaInput from '../../components/TextareaInput/Index';
import {FormHead } from '../../components/FormHeader/index';

//import './style.css';


import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRegistration from './selectors';
import reducer from './reducer';
import messages from './messages';
import SignInFormDesign from './SignInFormDesign';
//import { onchangeValidator } from './ErrorValidator';

export function Registration({dispatch,
submitForm,registration,
handleInputChange,onReset,props,
state}) {
  useInjectReducer({ key: 'registration', reducer });



//const registration1=registration;
//console.log("okkkkkkkkkkkkkkkk",registration1)


 
  const inputChange=(e)=>{
    e.persist();

    //const ErrorsSet= this.onchangeValidator(e)
    setTimeout(() => {
      let ErrorSet=""
      const name=e.target.name;
      const value=e.target.value;
  
      if(value.trim()==="")
      {
          ErrorSet=`${name} is Required!!`
  
      }
      if(name==="Mobile" && !value.match("[7-9]{1}[0-9]{9}")){
           ErrorSet="Mobile number is Invalid.!!!";
        
      }
      if(name==="Email" && !value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
        ErrorSet="Email Address is Invalid..!!!";
     
   }

      //const ErrorSet= onchangeValidator(e);
      handleInputChange(e,ErrorSet); // Works
    }, 100);
   
  }

  const formSubmit=(e)=>{
    console.log("okkk",registration)
    e.preventDefault();
        var isValid=true;
          const ErrorSet={};
          if (!registration.EmployeeId.trim()){
              ErrorSet["EmployeeId"]="Id is required!";
              // console.log(this.state.ErrorId);
                isValid=false;
            }
            if(!registration.Mobile.match("[7-9]{1}[0-9]{9}")){
              ErrorSet["Mobile"]="Mobile number is Invalid!";
              isValid=false;
            }
            if (!registration.EmployeeName.trim()){
            ErrorSet["EmployeeName"]="Name is required!";
                isValid=false;
            }
            if (!registration.DOB.trim()){
              ErrorSet["DOB"]="Date of Birth is required!";
                isValid=false;
            }
            if (!registration.Qual){
              ErrorSet["Qual"]="Qualification required!";
                isValid=false;
            }
            
            if (!registration.Gender){
              ErrorSet["Gender"]="Gender is required!";
                isValid=false;
            }
            if (!registration.Mobile.trim()){
              ErrorSet["Mobile"]="Mobile number required!";
                isValid=false;
            }
            if (!registration.Email.trim()){
              ErrorSet["Email"]="Email is required!";
                isValid=false;
            }
            if(!registration.Email.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
              ErrorSet["Email"]="Invalid Email Address!";
              isValid=false;
            }


            
            submitForm(e,ErrorSet,isValid);
          
  }


  return (
    
    console.log(registration),
    <SignInFormDesign submitForm={formSubmit}  ErrorSet={registration.ErrorSet} onReset={onReset}  handleInputChange={inputChange }  />
  

  );
}

Registration.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func,
  submitForm:PropTypes.func,
  onReset:PropTypes.func,
  ErrorSet:PropTypes.any
};

const mapStateToProps = createStructuredSelector({
  registration: makeSelectRegistration(),
  //state:state,
});

function mapDispatchToProps(dispatch) {
 
  return {
    dispatch,
    onReset:(e)=>{dispatch(actionreset(e,"onReset"))},
    handleInputChange:(e,ErrorSet)=>{dispatch(actionset(e,ErrorSet))},
    submitForm:(e,ErrorSet,isValid)=>{dispatch(actionsub(e,ErrorSet,isValid))},
  };
}

//const withConnect = connect(
  export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration)
/*
export default compose(
  withConnect,
  memo,
)(Registration);
*/