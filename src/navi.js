import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from './App'; 
import myImage from './vogunew.png';
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";
function Navi() {
  const { use, setUse, setsearch, product } = useContext(Data);
  const nav = useNavigate();

  const logout = () => {
    setUse(null);
    nav('/');
  };
  const clicked = () => {
    if (!use) {
      nav("/login");
    } else {
      nav("/addto");
    }
  };
  const searchedinput = (e) => {
    e.preventDefault();
    let searching = e.target[0].value;

    console.log(searching);
    let searched = product.filter((x) => x.type.includes(searching));
    console.log(searched);
    if (searched[0] !== undefined) {
      nav('/store');
      setsearch(searched);
    } else {
      alert("item not found");
    }
  };

  return (
    <>
      <div className='navi'>
        <img className='logo' onClick={() => nav('/')} style={{ width: '150px', height: '50px', marginTop: '8px', marginRight: '140px', cursor: 'pointer' }} src={myImage} alt="Description" />
        <h6  style={{ color: 'white' }} onClick={() => nav('/')}>HOME  </h6>
        <h6 className='homtexts' style={{ color: 'white' }} onClick={() => nav('/store')}> STORE</h6>
        <h6 className='homtexts' style={{ marginRight: '170px', color: 'white' }} onClick={() => nav('/contact')}> CONTACT US</h6>

        <form onSubmit={searchedinput} >
          <input style={{ color: '#c3c3c3', height: '27px', width: '230px', padding: '10px', borderRadius: '15px', border: 'solid white .5px', marginTop: '18px', backdropFilter: 'blur 10px', backgroundColor: 'rgba(0, 0, 0, 0.765)' }} placeholder='Search' />
        </form>
        <h6 className='signup' style={{ marginTop: '20px', marginLeft: '130px' }}>{!use ? <p className='signa' onClick={() => nav('/signup')}>Sign up</p> : <h5 style={{ marginRight: '32cpx', marginTop: '-2px', fontSize: '15px' }} >{use.username}</h5>}</h6>
        <a >{!use ? <FaUser onClick={() => nav('/signup')} style={{ marginLeft: '25px' }} className='icon' /> : <><RiLogoutBoxRFill className='icon' onClick={logout} /></>}</a>
        <FaCartShopping onClick={clicked} className='icon' />

      </div>
    </>
  );
}

export default Navi;
