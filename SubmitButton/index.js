

import React from 'react';
//import  './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table} from 'react-bootstrap'
import StyledSubmit from './StyledSubmit';



export const SubmitButton=()=>{

return(

<StyledSubmit type="submit" className="btn btn-success mr-3">Submit</StyledSubmit>
)
}