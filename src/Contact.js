import React from 'react';
import { MDBInput,  MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';


export default function Contact() {
  const divStyle = {
    backgroundImage: 'url("https://content.knightfrank.com/blog/2023/3/e934e1bb-7268-48b7-963a-3546d37b1ce0/office-q1-2023-main.jpg")',
    backgroundSize: 'cover', 
    backgroundPosition: 'center',    
    backgroundRepeat: 'no-repeat',
    padding: '20px',
    
  };

  return (
    <div style={divStyle} >
    <form
      id='form'
      className='text-center'
      style={{
        width: '100%',
        maxWidth: '500px',
        margin: '50px auto',
        backgroundColor:'lightgrey',
        backgroundSize: 'cover',
        padding: '50px',
        borderRadius: '10px',
        marginTop:'120px',
        marginBottom:'130px'
      }}
    >
      <h2 >Contact us</h2>

      <MDBInput style={{ marginTop: '50px' }} label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
    </div>
  );
}
