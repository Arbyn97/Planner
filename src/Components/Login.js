import '../App.css';
import React,{useState}from 'react'
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Home from './Home'
import { Routes,Route,Link,Outlet ,Navigate } from "react-router-dom";
function Login() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
       
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        
      };

      const [userData, setUserData] = useState({username:"",password:""});
      const [errorMessage, setErrorMessage] = useState({value:""});

      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

const [opens, setOpens] = React.useState(false);
const handleOpens = () => setOpens(true);
const handleCloses = () => setOpens(false);

const handleSubmit = (e) => {
    e.preventDefault()
   let username=document.getElementById('user').value;
   let password=document.getElementById('pass').value;
    //if username or password field is empty, return error message
    
     if (
      username== "zahra" &&
     password== "99100"
    ) {
      //Signin Success
     console.log(username+password)
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/Home";
     
    } 
  };


  return (
 <React.Fragment>
  <div id="mainconent">

  <h3 id="enter-btn"onClick={handleOpen} > ورود</h3>
<Modal

        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" >
        <Box sx={{ ...style, width: 400 }}>
        <form id="enter-frm" className="frmsweb" method="get"  >
           
        <h1 className="baners">ورود</h1>
        <input type="text"id="user" className="frmstyl" placeholder="نام کاربری"required/>
        <br/>
        
        <input type="password"id="pass" className="frmstyl" placeholder="رمز عبور" required/>
        <br/>
        
  <button type="submit" className="frmstyl btns"onClick={(e)=>handleSubmit(e)} >ورود</button>  
  
        </form>
        
            </Box>
       
      </Modal>
      



 </div>
 </React.Fragment>
                
  
  );
}

export default Login;
