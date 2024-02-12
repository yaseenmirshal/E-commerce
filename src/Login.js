import React, { useContext, useRef } from 'react';
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
import Swal from 'sweetalert2';

function Login() {
  const inputref = useRef();
  const {register,user,use,setUse} = useContext(Data)
  const nav = useNavigate()
  console.log(user);

  const clickHandle = (e)=>{
    e.preventDefault()
    let lemail = inputref.current.lemail.value
    let lpassword = inputref.current.lpassword.value
    let userData = user.find((item)=>item.useremail===lemail && item.userpass===lpassword)
    console.log(userData);
    if(userData){
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        showConfirmButton: false,
        timer: 1500,
      });
      setUse(userData)
      nav("/")
    }
  else{
    Swal.fire(  {
      icon: 'warning',
      title: 'Invalid Email or Password',
      text: 'Please try again!',
      confirmButtonColor: '#ffc107',
      confirmButtonText: 'OK',
    });
  }
    if(lemail=='admin@gmail.com'&&lpassword==1234){
      nav('/admin')
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  return (
    <form  onSubmit={clickHandle} ref={inputref}>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://images6.alphacoders.com/914/914545.jpg)',height:'818px'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-6' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-54'>
          <h2 className="text-uppercase text-center mb-5">Log in</h2>
          <MDBInput required wrapperClass='mb-4' name='lemail' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput required wrapperClass='mb-4' name='lpassword' label='Password' size='lg' id='form3' type='password'/>
          <MDBBtn type='submit' className='mb-4 w-100 gradient-custom-4' size='lg'>Login</MDBBtn>
          <a >Don't have an account?</a><a onClick={()=>nav('/signup')} style={{color:'#6879d0',marginLeft:'5px',fontWeight:'bold',cursor:'pointer'}} ><u> Sign up</u></a>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </form>
  );
}

export default Login;