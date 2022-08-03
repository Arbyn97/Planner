import '../App.css';
import React from 'react'
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
function Signin() {
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

 

  const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);



const [opens, setOpens] = React.useState(false);
const handleOpens = () => setOpens(true);
const handleCloses = () => setOpens(false);
  return (
     <React.Fragment>
     <div >


  <h3 id="login-btn" onClick={handleOpens}>ثبت نام</h3>

<Modal
        open={opens}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box sx={{ ...style, width: 400 }}>
         <form id="submit-frm" className="frmsweb" method="POST">
      <h1 className="baners">ثبت نام</h1>
        
    <input type="text" placeholder="نام "  className="frmstyl"required/>
    <br/>
   
    <input type="text" className="frmstyl" placeholder=" نام خانوادگی" required/>
   
    <br/>
    
    <input type="text" placeholder="@آدرس ایمیل" className="frmstyl" required />
    <br/>
    
  
    
    <input type="text"required className="frmstyl" placeholder="نام کاربری"/>
    <br/>
    
    <input type="password" placeholder="رمز عبور" className="frmstyl" required/>
    <br/>
    
    <input type="submit" value="ثبت نام" className="frmstyl btns" id="enterSign"/>
    <input type="submit" value="لغو" id="cncl" className="mrgn frmstyl " onClick={handleCloses}/>
    </form>
   
  </Box>
        
      </Modal>


 </div>
             </React.Fragment>
                
  
  );
}

export default Signin;
