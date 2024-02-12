import React, { useContext } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,

    MDBRipple,
    MDBBtn,

    MDBIcon,

  } from "mdb-react-ui-kit";

import { useNavigate, useParams } from "react-router-dom";


import { Data } from "./App";

function    Store() {

  const {product} = useContext(Data)
  const nav = useNavigate()
  const {type} = useParams()
  const showItems = product.filter((x)=>x.type==type)

  return (
    <>
   
    <div className="nav2" >   
      <button className='navbutt' onClick={()=>nav('/sofa')} >Sofas & Seating</button>
      <button className='navbutt' onClick={()=>nav('/table')} >Table</button>
      <button className='navbutt' onClick={()=>nav('/bed')} >Bed</button>
      <button className='navbutt' onClick={()=>nav('/cupboard')}>Wardrobe</button>
      <button className='navbutt' onClick={()=>nav('/matresses')}>Mattresses</button>
      <button className='navbutt' onClick={()=>nav('/lighting')}>Lambs & Lighting</button>
      <button className='navbutt' onClick={()=>nav('/decor')}>Home Decors</button>
      <button className='navbutt' onClick={()=>nav('/appliences')}>Appliences</button>
       </div>
       
       <div  className='storediv'>
        <div  className="demmy"> </div>
       {(type!=="store"?showItems:product).map((x)=>(
        
        <MDBContainer fluid >

        <MDBRow className="justify-content-center mb-0 " style={{marginTop:'-50px'}}>
          <MDBCol  md="12" xl="10">
            <MDBCard  className="shadow-0 border rounded-3 mt-5 mb-3 cardsto">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <MDBCardImage
                        src={x.image}
                        fluid
                        className="w-100 imgsto"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        ></div>
                      </a>
                    </MDBRipple>
                  </MDBCol>
                  <MDBCol md="6">
                    <h5>{x.title}</h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                      </div>
                      <span>310</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <span className="text-primary"> • </span>
                      <span>Light weight</span>
                      <span className="text-primary"> • </span>
                      <span>
                        Best finish
                        <br />
                      </span>
                    </div>
                    <div className="mb-2 text-muted small">
                      <span>Unique design</span>
                     
                      <span className="text-primary"> • </span>
                      <span>
                        Casual
                        <br />
                      </span>
                    </div>
                    <p style={{ whiteSpace: 'pre-line' }} className="text-truncate mb-4 mb-md-0">
                    {x.description}
                    </p>
                  </MDBCol>
                  <MDBCol
                    md="6"
                    lg="3"
                    className="border-sm-start-none border-start"
                    style={{marginTop:'25px'}}
                  >
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">₹{x.price}</h4>
                      <span className="text-danger">
                        <s>{x.crossprice}</s>
                      </span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      <MDBBtn color="primary" size="sm" onClick={()=>nav(`/${x.type}/${x.id}`)}>
                        SHOW
                      </MDBBtn>
                      <MDBBtn outline color="primary" size="sm" className="mt-2">
                      ❤︎ Favourite
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
       ))}
       </div>
    </>
  );
}

export default Store;

