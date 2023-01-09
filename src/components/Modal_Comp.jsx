import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../sass/Login.scss';
import React, { useEffect, useState } from 'react'
// import {  useNavigate } from 'react-router-dom';
import Image from '../assets/images/profile.png';

function Modal_Comp(props) {

  const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let user_REF=`${urlParams.get('ref')}`
    const[firstname,set_firstname]=useState('');
    const[lastname,set_lastname]=useState('');
    const[email,set_email]=useState('');
    const [walletAddress,sendWalletAddress]=useState(localStorage.getItem('walletAddress'))
    const [status, setStatus] = useState("");
    let [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

  return (
    <Modal
      {...props}
      id='model-id'
      // size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      // centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      {/* <Modal.Body> */}
      <div className="limiter">
            <div className="sign-login100" style={{}} >
                <div className="wrap-signup100">
                    <form className="login100-form validate-form" 
                    // onSubmit={submit} 
                    >
                        <span className="login100-form-logo">
                            {/* <img src={Image} className="login100-form-logo"/> */}
                            <i className="zmdi zmdi-account"></i>
                        </span>

                        <span className="login100-form-title p-b-34 p-t-27">
                            Signup
                        </span>

                        <div className="wrap-input100 validate-input" data-validate = "Enter First Name">
                            <input className="input100" type="text" name="username" placeholder="First Name" required autoComplete='off' onChange={(e) => set_firstname(e.target.value)} />
                            <span className="focus-input100 pl-2" data-placeholder="📝 "></span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate = "Enter Last Name">
                            <input className="input100" type="text" name="username" placeholder="Last Name" required autoComplete='off' onChange={(e) => set_lastname(e.target.value)} />
                            <span className="focus-input100 pl-2" data-placeholder="📝 "></span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate = "Enter Email Address">
                            <input className="input100" type="email" name="username" placeholder="Email Address" required autoComplete='off' onChange={(e) => set_email(e.target.value)} />
                            <span className="focus-input100" data-placeholder="@"></span>
                        </div>
                        
                        {/* <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <button className="input100" type='button' onClick={walletAddress?my_disconnect:connectWalletPressed}  style={{justifyContent: 'left', textAlign: 'left', position: 'inherit'}}>   {' '}{walletAddress ? walletAddress.substring(0,30)+'....' : "  Connect Wallet"}</button>
                            <span className="focus-input100" data-placeholder="&#xf244;"></span>
                        </div> */}
                        <span className="login100-form-title p-b-25" style={{fontSize:'12px',textTransform:'none'}}>
                           {/* {mint_ref_code} */}
                        </span>
                        <div className="container-login100-form-btn">
                            <button 
                            className="login100-form-btn" 
                            type='submit' 
                            style={walletAddress ? {backgroundColor: 'white',color:'white'}:{backgroundColor: '#696969',color:'white',cursor:'not-allowed'}}  
                            // disabled={walletAddress ? false : true}
                            >
                                Sign Up
                            </button> 
                            </div>
                    </form>
                    <br></br>
                    <div className="error text-light">
                        <span className="text-light" style={{color: 'white'}}> {status}</span>
                    </div>
                    
                </div>
            </div>
        </div>
      {/* </Modal.Body> */}
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

// function Modal_Comp() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

export default Modal_Comp