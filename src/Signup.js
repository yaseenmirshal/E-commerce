import React, { useContext, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { Data } from './App';


function Signup() {
  const {register } = useContext(Data);
  const [name,setname]= useState('')
  const  [email,setemail]= useState("")
  const [pass,setpass]=  useState('' )
  const [confirmpass,setconfirmpass]= useState('')
  

    const nav = useNavigate()
  return  (
    <form onSubmit={(e)=>{
      e.preventDefault();
      register(name,email,pass,confirmpass)
    }}>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://images6.alphacoders.com/914/914545.jpg)',height:'818px'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput required onChange={(e)=>setname(e.target.value)} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput required onChange={(e)=>setemail(e.target.value)} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput required onChange={(e)=>setpass(e.target.value)} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          <MDBInput required onChange={(e)=>setconfirmpass(e.target.value)} wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='check' label='I agree all statements in Terms of service' /> */}
          </div>
          <MDBBtn type='submit' className='mb-3 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          <a  >Already have an Account ?</a><a  onClick={()=>nav('/login')} style={{color:'#6879d0',marginLeft:'5px',fontWeight:'bold',cursor:'pointer'}} ><u> Log in</u></a>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer> 
    </form> 
  );
}

export default Signup;