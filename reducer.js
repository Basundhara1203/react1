/*
 *
 * Registration reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  EmployeeId: "",
    EmployeeName: "",
    DOB:"",
    Gender:"",
    Qual:"",
    Mobile:"",
    Email:"",
    Address:"",
    ErrorSet:{}
};

/* eslint-disable default-case, no-param-reassign */
const registrationReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
        case "onReset":
       //console.log(initialState);
        return {
          // ...state,
          
           ...initialState,
           ErrorSet:{}
           //[action.name]:action.event.value
          // formValues: action.payload
          
         };
        case "SET_FORMVALUES":
         // state.ErrorSet={}
          //let Valid=true;
           
        return {
          // ...state,
           ...state,
           ErrorSet:{...state.ErrorSet,
           [action.name]:action.ErrorSet},
            [action.name]:action.value
    }
        
    case "SUBMIT_FORM":
     // action.event.preventDefault();
      //state.ErrorSet={}
       
          
        if(action.isValid){
      console.log(state);
      console.log("--- Triggered Form submission ---");
      alert( JSON.stringify(state,null
      
      ,2));}
      return {
        ...state,
        ErrorSet:{...action.ErrorSet},
        message: "Form submitted!!"
      }
      
   
    }

  })

export default registrationReducer;
