import { FaUserCheck } from "react-icons/fa";
import { FaList } from "react-icons/fa";

import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

import { useContext,  useRef } from "react";
import { Data } from "./App";
import './Admin.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TbTruckDelivery } from "react-icons/tb";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";
export default function Admin() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);

  const { user, product, setProduct } = useContext(Data);
  console.log(product);

  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };



  const deleteHandler = (id) => {
    const filterdata = product.filter((item) => item.id !== id);
    setProduct([...filterdata]);
    console.log(filterdata);
    
  };

  const addinput = useRef(null);
  const addsubmit = (e) => {
    e.preventDefault();
    let adtitle = addinput.current.adtitle.value;
    let adimage = addinput.current.adimage.value;
    let addescrip = addinput.current.addescrip.value;
    let adprice = addinput.current.adprice.value;
    let adtype = addinput.current.adtype.value;
    let adqty = addinput.current.adqty.value;
    let adid = addinput.current.adid.value;
    const newadd = {
      title: adtitle,
      image: adimage,
      description: addescrip,
      price: adprice,
      type: adtype,
      qty: adqty,
      id: adid,
    };
    setProduct([...product, newadd]);
    setBasicModal(!basicModal);
  };
const [ItemUpdate,setItemUpdate]=useState({})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imgref = useRef(null)
  const nameref = useRef(null)
  const descref = useRef(null)
  const priceref = useRef(null)
  const edit = (e)=>{
    e.preventDefault();
    const temporary = product.map((x)=>
      x.id == ItemUpdate.id?{
        ...x,
        image:imgref.current.value,
        title:nameref.current.value,
        description:descref.current.value,
        price:priceref.current.value,
    }:x
    )
    setProduct(temporary);
    handleClose();
  }

  return (
    <>
    <div style={{width:'100%',height:'45px',backgroundColor:'grey',textAlign:'center',paddingTop:'9px'}}>
      <h4 style={{color:'white'}}>Admin Dashboard</h4>

    </div>
  
      <MDBRow >
        <MDBCol size="3">
          <MDBTabs className="flex-column text-center">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab1")}
                active={verticalActive === "tab1"}
              >
                <FaUserCheck /> Users
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab2")}
                active={verticalActive === "tab2"}
              >
                <FaList /> Products
              </MDBTabsLink>
            </MDBTabsItem>

            {/* <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab3")}
                active={verticalActive === "tab3"}
              >
                <TbTruckDelivery /> Track Order
              </MDBTabsLink>
            </MDBTabsItem> */}

            <MDBTabsItem></MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size="9">
          <MDBTabsContent>
            <MDBTabsPane open={verticalActive === "tab1"}>
              <div
                style={{
                  width: "100%",
                  height: "820px",
                  backgroundColor: "#333333",
                  textAlign: "center",
                  float: "right",
                }}
              >
                <MDBTable>
                  <MDBTableHead color="primary-color" textWhite>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>E-mail</th>
                      <th>Password</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {user.map((Data) => (
                      <tr style={{ color: "white" }}>
                        <td>1</td>
                        <td>{Data.username}</td>
                        <td>{Data.useremail}</td>
                        <td>{Data.userpass}</td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </div>
            </MDBTabsPane>
            <MDBTabsPane open={verticalActive === "tab2"}>
              <div
                style={{
                  width: "100%",
                  height: "820px",
                  backgroundColor: "#282c34",
                  textAlign: "center",
                  float: "right",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                  paddingTop: "10px",
                  overflow: "auto",
                }}
              >
                <div style={{ width: "100%", height: "30px" ,marginBottom:'100px'}}>
                  <MDBBtn className="buttitem" onClick={toggleOpen}>
                    Add Products +
                  </MDBBtn>

                  <MDBModal
                    open={basicModal}
                    setOpen={setBasicModal}
                    tabIndex="-1"
                  >
                    <form ref={addinput} onSubmit={addsubmit}>
                      <MDBModalDialog>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Product Details</MDBModalTitle>
                            <MDBBtn
                              className="btn-close"
                              color="none"
                              onClick={toggleOpen}
                            ></MDBBtn>
                          </MDBModalHeader>
                          <MDBModalBody>
                            <MDBInput
                            required
                              name="adtype"
                              label="Enter Type"
                              id="typeText"
                              type="text"
                            />
                            <MDBInput
                            required
                              style={{ marginTop: "15px" }}
                              name="adtitle"
                              label="Enter Title"
                              id="typeText"
                              type="text"
                            />
                            <MDBInput
                            required
                              style={{ marginTop: "15px" }}
                              name="adprice"
                              label="Enter Price"
                              id="typeText"
                              type="text"
                            />
                            <MDBInput
                            required
                              style={{ marginTop: "15px" }}
                              name="addescrip"
                              label="Enter Description"
                              id="typeText"
                              type="text"
                            />
                            <MDBInput
                            required
                              style={{ marginTop: "15px" }}
                              name="adimage"
                              label="Enter Image URL"
                              id="typeText"
                              type="text"
                            />
                            <MDBInput
                            required
                              style={{ marginTop: "15px" }}
                              name="adqty"
                              label="Enter Quantity"
                              id="typeText"
                              type="text"
                            />
                            <MDBInput
                            required
                              style={{ marginTop: "15px" }}
                              name="adid"
                              label="Enter Product id"
                              id="typeText"
                              type="text"
                            />
                          </MDBModalBody>

                          <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={toggleOpen}>
                              Close
                            </MDBBtn>
                            <MDBBtn type="submit">Upload item</MDBBtn>
                          </MDBModalFooter>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </form>
                  </MDBModal>
                </div>

                {product.map((x) => (
                  
                  <MDBCard
                    style={{
                      width: "300px",
                      height: "550px",
                      marginBottom: "70px",
                    }}
                  >
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image hover-overlay"
                    >
                      <MDBCardImage style={{height:'300px',width:'300px'}} src={x.image} fluid alt="..." />
                      <a>
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <MDBCardTitle>{x.title}</MDBCardTitle>
                      <h4>₹ {x.price}</h4>

                      <div style={{ maxHeight: "100px", overflowY: "auto" }}>
                     <MDBCardText>
                        {x.description}
                      </MDBCardText>
                       </div>

                      <MDBBtn
                        onClick={() => deleteHandler(x.id)}
                        style={{
                          backgroundColor: "#8B0000",
                          marginRight: "10px",
                          marginTop:'20px'
                        }}
                      >
                        Remove
                      </MDBBtn>
                      <Button variant="primary" onClick={()=>{handleShow();setItemUpdate(x)}}>
                        Edit
                      </Button>
                    </MDBCardBody>
                  </MDBCard>
              
                ))}
                

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                  </Modal.Header>
                  <form onSubmit={edit}>
                  <Modal.Body>
                  <img style={{width:'200px',height:'200px',marginLeft:'135px',borderRadius:'5px',marginBottom:'20px'}} src={ItemUpdate.image}/>
                  <MDBInput
                              style={{ marginTop: "15px" }}
                              defaultValue={ItemUpdate.image}
                              required
                              ref={imgref}
                              label="Enter image URL"
                            />
                            <MDBInput
                              style={{ marginTop: "15px" }}
                              defaultValue={ItemUpdate.title}
                              required
                              ref={nameref}
                              label="Enter Title"
                              
                            />
                            <MDBInput
                              style={{ marginTop: "15px" }}
                              defaultValue={ItemUpdate.price}
                              required
                              ref={priceref}
                              label="Enter Price"
                              
                            />
                            <MDBInput
                              style={{ marginTop: "15px" }}
                              defaultValue={ItemUpdate.description}
                              required
                              ref={descref}
                              label="Enter Description"
                             
                            />
  
                  </Modal.Body>
                 
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleClose} >
                      Update
                    </Button>
                  </Modal.Footer>
                  </form>
                </Modal>

              </div>
            </MDBTabsPane>
            <MDBTabsPane open={verticalActive === "tab3"}>
              <div
                style={{
                  width: "100%",
                  height: "820px",
                  backgroundColor: "grey",
                  textAlign: "center",
                  float: "right",
                }}
              >
                revenue content
              </div>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </>
  );
}
