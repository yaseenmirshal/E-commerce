import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";
import Signup from "./Signup";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import Footer from "./Footer";
import Store from "./Store";
import Contact from "./Contact";
import Addto from "./DummyProducts/Addto";
import Admin from "./Admin";
import {
  validateEmail,
  validatePassword,
  validateCon_pass,
} from "../src/Valid";
import { createContext, useState } from "react";
import Swal from 'sweetalert2';
import Single from "./Single";
import { DummyProducts } from "./DummyProducts/DummyProducts";
import Navi from "./navi";
export const Data = createContext();
function App() {
  const [product,setProduct] = useState(DummyProducts)
  const [use,setUse] = useState(null) ;
  const [user, setUsers] = useState([]);
  const navigate = useNavigate();
  const [render,setRender]=useState(false);
  const [searched,setsearch]= useState('');
  const [locationauth,setlocationauth]=useState(false)
  const [show, setShow] = useState(false);
  const location = useLocation()
  useEffect(()=>{
    if(location.pathname.includes(('/admin'))){setlocationauth(true)
    }else{
      setlocationauth(false)
    }
    window.scroll(0, 0);
  },[location])
  const register = (name, email, pass, confirmpass) => {
    if (
      validateEmail(email) &&
      validatePassword(pass) &&
      validateCon_pass(pass, confirmpass)
    ) {
      const inExist = user.find((x) => x.email === email);
      if (!inExist) {
        setUsers((prevUsers) => [
          ...prevUsers,
          {
            username: name,
            useremail: email,
            userpass: pass,
            cart:[]
          },
        ]);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Registration Successful!',
          text: 'Thank you for registering.',
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'custom-popup',
          },
        });
        navigate("/login");
      } else {
        alert("This Email is already Exist");
      }
    } else {
      alert("Please check your input and try again");
    }
  };
  return (
    <Data.Provider value={{ register ,user,setUsers,use,setUse,product,setProduct,render,setRender,searched,setsearch,show,setShow}}>
        <div className="App">
         {!locationauth&& <Navi/>}
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/addto" element={<Addto />} /> 
            <Route path="/:type" element={<Store />} />
            <Route path="/:type/:id" element={<Single />} />
            <Route path="/admin" element={<Admin />} />
          </Routes> 
          <Footer />
        </div>
</Data.Provider>
  );
}
export default App;
