import React from 'react';
//import  './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table} from 'react-bootstrap'
import StyledReset from './StyledReset';



export const ResetButton=(props)=>{

return(






<StyledReset type="reset" className="btn btn-danger mr-5" onClick={props.onReset}>Reset</StyledReset>
)
}