import React, { useContext } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { Data } from './App';
import Swal from 'sweetalert2';

export default function Single() {
    const nav = useNavigate()
    const {product,use}=useContext(Data)
    const {id}= useParams()
    console.log(id);
    const showItems = product.find((x)=>x.id=== parseInt(id))
    

    const cartshow =()=>{
        let dataofcart =use.cart.find((x)=>x.id===showItems.id)
        console.log(dataofcart);
        if(!dataofcart){
            use.cart.push(showItems)

            Swal.fire({
                icon: 'success',
                title: 'Added to cart successfully!',
                showConfirmButton: false,
                timer: 1500,
              });
        }else{
            showItems.qty += 1
        }
        console.log(dataofcart)
    }
    
  return (
    <>






<div style={{width:'100%',height:'100%',backgroundColor:'#3e3c32',marginTop:'0px',display:'flex',justifyContent:'center'}}>
    <MDBCard style={{ maxWidth: '1340px' ,marginTop:'150px',marginBottom:'150px',textAlign:'center'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4' >
          <MDBCardImage src={showItems.image} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle><h2 style={{marginTop:'10%'}} >{showItems.title}</h2></MDBCardTitle>
            <MDBCardText>
               <h3>₹{showItems.price}</h3> 
             {showItems.description}
            </MDBCardText>
            <MDBBtn style={{width:'210px',marginRight:'20px'}} onClick={()=>nav('/store')} outline color="primary" size="lm" className="mt-2">← BACK TO STORE
</MDBBtn>
            <MDBBtn style={{width:'210px'}} onClick={use?cartshow:()=>nav('/login')} outline color="primary" size="lm" className="mt-2">Add to Cart 🛒
</MDBBtn>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
</div>
    </>
    
  );
}
