/*
 *
 * Registration actions
 *
 */

import { DEFAULT_ACTION,SET_FORMVALUES,SUBMIT_FORM,onReset } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
};
export const actionset =(e,ErrorSet)=>{
  return{
      type:SET_FORMVALUES,
      value:e.target.value,
      name:e.target.name,
      ErrorSet:ErrorSet,
     

      event:e
 
  }
};
export const actionsub =(e,ErrorSet,isValid)=>{
  return{
      type:SUBMIT_FORM,
      value:e.target.value,
      name:e.target.name,
      event:e,
      ErrorSet:ErrorSet,
      isValid:isValid,
 
  }
 };
 export const actionreset =(e)=>{
  return{
      type:onReset,
      value:e.target.value,
      name:e.target.name,
      event:e
 
  }
};