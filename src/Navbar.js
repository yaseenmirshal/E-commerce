import React from 'react'
import myVideo from './furnivid.mp4'
import 'animate.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const nav = useNavigate()
  return (
    <>
    <div className='enjodiv' style={{marginLeft:'-90px'}}>
    <div className='div2'>
        <h1>ENJOY</h1>
    </div>
    <div className='div3'>
        <h1 >LIFE</h1>
    </div>
    <div className='div4'>
        <h1>WITH</h1>
    </div>
    <div className='div5'>
        <h1>MODERN</h1>
    </div>
    <a href='#home2'><button className='butt'  > SHOP NOW <i class="fas fa-arrow-down"></i></button></a>
    </div>
    <div className="video-background" id='home1'>
      <video autoPlay loop muted>
        <source src={myVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
    <svg className='svg' style={{marginTop:'240px',zIndex:'1'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3e3c32" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,250.7C640,256,800,224,960,197.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <div className='divhome' id='home2' >
    <MDBCard className='card1'>
      <MDBCardImage src='https://i.pinimg.com/736x/1e/e0/ca/1ee0cabed5509f868b14263718c12415.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Sofas & Seating</MDBCardTitle>
        <MDBCardText>
          Discover sleek, innovative seating with our Modern Marvel Sofas, redefining contemporary living.
        </MDBCardText>
        <MDBBtn className='explo' onClick={()=>nav('/sofa')}>
          Explore
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className='card1'>
      <MDBCardImage src='https://www.creatorhandicrafts.com/wp-content/uploads/2022/09/710mGvyc_bL._AC_SL1024_1024x1024.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Table</MDBCardTitle>
        <MDBCardText>
        Transform your workspace with our versatile tables, seamlessly merging style and utility.
        </MDBCardText>
        <MDBBtn className='explo' onClick={()=>nav('/table')}>Explore</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className='card1'>
      <MDBCardImage src='https://woodentwist.com/cdn/shop/products/WhatsAppImage2022-07-25at11.07.18PM.1280_695x695.jpg?v=1689871689' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Bed</MDBCardTitle>
        <MDBCardText>
        Discover unparalleled comfort with our curated selection of beds.Elevate with style and quality
        </MDBCardText>
        <MDBBtn className='explo' onClick={()=>nav('/bed')}>Explore</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className='card1'>
      <MDBCardImage src='https://www.decorchamp.com/wp-content/uploads/2022/03/modern-wardrobe-with-dressing-table.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Cupboard</MDBCardTitle>
        <MDBCardText>
        Enhance your space with our chic cupboards, providing practical storage and a modern touch.
        </MDBCardText>
        <MDBBtn className='explo' onClick={()=>nav('/cupboard')}>Explore</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className='card1'>
      <MDBCardImage src='https://cdn.luxe.digital/media/20230202104938/best-luxury-mattresses-saatva-classic-best-overall-luxe-digital-780x780.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Mattresses</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn className='explo' onClick={()=>nav('/matresses')}>Explore</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard className='card1'>
      <MDBCardImage src='https://www.whiteteak.com/media/catalog/product/h/l/hl59-10001_1q__1.jpg?width=560&height=560&canvas=560,560&optimize=high&fit=bounds' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Lambs & Lighting</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn className='explo' onClick={()=>nav('/lighting')}>Explore</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    
    <MDBCard className='card1'>
      <MDBCardImage src='https://decothrive.com/wp-content/uploads/2023/06/Royal-Ruby-Marble-Silver-Queenly-Tray.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Home Decors</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn className='explo' onClick={()=>nav('/decor')}>Explore</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard  className='card1' >
      <MDBCardImage style={{height:'350px'}} src='https://images.unsplash.com/photo-1586208958839-06c17cacdf08?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXxlbnwwfHwwfHx8MA%3D%3D' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Appliences</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn className='explo' onClick={()=>nav('/appliences')}>Explore</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      </div>
    </>
  )
}

export default Navbar