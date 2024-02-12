import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";
  import React, { useContext } from "react";
  import { useNavigate } from "react-router-dom";
  import './Addto.css'

import { Data } from "../App";
  
  export default function Basic() {
const {use,setRender,render} = useContext(Data)
   const nav = useNavigate()

    const increment =(id)=>{
      const add = use.cart.find((x)=>x.id==id)
      add.qty += 1
      setRender(!render);  

    }
    const decrement =(id)=>{
      const add = use.cart.find((x)=>x.id==id)
      if(add.qty>1) {add.qty -= 1
      setRender(!render)}

    }
const deleteHandler =(id)=>{
  const filterdata = use.cart.filter((item)=>item.id !== parseInt(id))
  use.cart = filterdata
  setRender(!render)
}

console.log(use)


  return (
    <>
     <div style={{width:'100%',height:'65px',backgroundColor:'white'}}></div>
      

  <section id="payment" className="h-100 h-custom" style={{ backgroundColor: "#eee",overflow:'auto' }}>
  
    <MDBContainer style={{overflow:'auto'}} className="py-5 h-100">
      <MDBRow  className="justify-content-center align-items-center h-100">
       
      
        <MDBCol>
          <MDBCard >
            <MDBCardBody  className="p-4">
              <MDBRow>
                <MDBCol lg="7">
                  <MDBTypography tag="h5">
                    <a onClick={()=>nav('/store')} style={{cursor:'pointer'}} className="text-body">
                      <MDBIcon  fas icon="long-arrow-alt-left me-2" /> Continue
                      shopping
                    </a>
                  </MDBTypography>
  
                  <hr />
  
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p className="mb-1">Shopping cart</p>
                      <p className="mb-0">You have 1 items in your cart</p>
                    </div>
                    <div>
                      <p>
                        <span className="text-muted">Sort by:</span>
                        <a href="#!" className="text-body">
                          price
                          <MDBIcon fas icon="angle-down mt-1" />
                        </a>
                      </p>
                    </div>
                  </div>
                  {use?.cart?.map((single)=>(
                  <MDBCard className="mb-3">
                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <MDBCardImage
                              src={single.image}
                              fluid className="rounded-3" style={{ width: "65px" }}
                              alt="Shopping item" />
                          </div>
                          <div className="ms-3">
                            <MDBTypography tag="h5">
                            {single.title}
                            </MDBTypography>
                            <p className="small mb-0"></p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <MDBTypography tag="h5" className="fw-normal mb-0">
                             
                
                            </MDBTypography>
                          </div>
                          <div style={{ width: "80px" }}>
                            <MDBTypography tag="h5" className="mb-0">
                            ₹{single.qty*single.price}
                            
                            </MDBTypography>
                            <button style={{borderStyle:'none',}} onClick={()=>increment(single.id)}>+</button>
                            {single.qty}
                            <button style={{borderStyle:'none',}} onClick={()=>decrement(single.id)}>-</button>
                          </div>
                          <a onClick={()=>deleteHandler(single.id)} href="#!" style={{ color: "#cecece" }}>
                            <MDBIcon  fas icon="trash-alt" />
                          </a>
                        </div>
                      </div>
                     
                    </MDBCardBody>
                  </MDBCard>
                  ))}
                </MDBCol>
               
               
                <MDBCol lg="5">
                  <MDBCard className="bg-primary text-white rounded-3">
                    <MDBCardBody>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBTypography tag="h5" className="mb-0">
                          Card details
                        </MDBTypography>
                        <MDBCardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QfrH65da2Qce_9O0PjYsrBsUrhBmoX0yXzYisxHc3YXYRy-OXkxE6xPGUda9t3ct_8E&usqp=CAU"
                          fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                      </div>
  
                      <p className="small">Card type</p>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-visa fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-amex fa-2x me-2" />
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                      </a>
  
                      <form className="mt-4">
                        <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                          placeholder="Cardholder's Name" contrast />
  
                        <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                          minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
  
                        <MDBRow className="mb-4">
                          <MDBCol md="6">
                            <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                              minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                          </MDBCol>
                          <MDBCol md="6">
                            <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                              maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                          </MDBCol>
                        </MDBRow>
                      </form>
  
                      <hr />
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2"> ₹ {use&&<>{use.cart.reduce((acc,curr)=>acc+=curr.price*curr.qty,0)}</>}</p>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2">0.00</p>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Total(Incl. taxes)</p>
                        <p className="mb-2"> ₹ {use&&<>{use.cart.reduce((acc,curr)=>acc+=curr.price*curr.qty,0)}</>}</p>
                      </div>
  
                      <MDBBtn href="#delivery" color="info" block size="lg">
                        <div className="d-flex justify-content-between">
                        <span>{use&&<>total price: ₹ {use.cart.reduce((acc,curr)=>acc+=curr.price*curr.qty,0)}</>}</span>
                          <span >
                            Checkout{" "}
                            <i   className="fas fa-long-arrow-alt-right ms-2"></i>
                          </span>
                        </div>
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
      </MDBRow>
    </MDBContainer>
    
  </section>


<div id="delivery" className="delidiv" style={{paddingTop:'40px',marginTop:'30px'}}>
  <div  className="mx-auto gradient-custom mt-5" style={{ maxWidth: '800px', height: '400px' ,borderRadius:'15px'}}>
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">Welcome</MDBTypography>
              <p className="white-text">You are 30 seconds away from compleating your order!</p>
            </div>
            <div className="text-center">
              <MDBBtn href="#payment" color="white" rounded className="back-button">Go back</MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: '#495057' }} >Delivery Details</MDBTypography>
                </div>

                <form className="mb-0">
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='First name' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Last name' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='City' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Zip' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Address' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Email' type='text' />
                    </MDBCol>
                  </MDBRow>

                  <div className="float-end">
                    <MDBBtn rounded style={{backgroundColor: '#0062CC'}}>Place order</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <img style={{height:'400px',width:'500px',zIndex:'-1',marginLeft:'80px'}} src="https://cdn.dribbble.com/users/1017716/screenshots/14404808/media/e731fb54b71c807a67e031e8bd9cd48e.gif"/>
        </MDBRow>
      </div>
</div>

  
  </>
  );
  }