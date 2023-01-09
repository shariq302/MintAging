import React, { useEffect, useState ,useLayoutEffect} from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { InjectedConnector } from "@web3-react/injected-connector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faCheck, faClose, faCopy, faCross, faLock, faMartiniGlassCitrus, faRightFromBracket, faSpinner, faUser, faUserCircle, faWallet } from "@fortawesome/free-solid-svg-icons";
import metaMask_img from "../Assests/wallet_logo/metamask.svg";
import coinbase_img from "../Assests/wallet_logo/coinbase.svg"
import wallet_connect_img from "../Assests/wallet_logo/walletconnect.svg"
import image_first from "../Assests/img_1.svg"
import image_second from "../Assests/img_2.svg"
import wallet_connect_qr from "../Assests/wallet_qr.png"
import coinbase_qr from "../Assests/coinbase_qr.png"
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "./providerOptions";



import './Disconnect.scss'
import { useWeb3React } from "@web3-react/core";
const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions // required
});
function DisconnectModal(props) {
    const { active,chainId, account, library, connector,provider, activate, deactivate } =useWeb3React();

 const [copyText,setCopyText]=useState(false)
 const copyFunc=()=>{
    console.log('here i am')
    navigator.clipboard.writeText(props.walletAddress)
    setCopyText(true)
 }
 const injected = new InjectedConnector({  
    supportedChainIds: [1,3,4,5, 42,61,137, 1337,80001] 
  });
 const disconnect_wallet= async()=>{
  console.log('disconnected to wallet')
  try{
    await deactivate(injected)
    await web3Modal.clearCachedProvider();
   
    window.localStorage.clear()
    localStorage.setItem('check_disconnect',true)
    sessionStorage.setItem('walletAddress',false)
    window.location.reload()
  }
  catch(err){
    console.log('not disconnected to wallet ',err)
  }

  }
    
  return (
    <div>
   <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter "
    centered
    id="innerDisconnect"
    
  >
   
    <Modal.Body className="p-1 " >
    <div className="wallet_heading_container">
   <span className="wallet_heading"> <FontAwesomeIcon icon={faClose} onClick={props.onHide} className="wallet_close_icon"  /></span>
              </div>
    
      
        <Row className="p-1 h-100" >
      
         
          <Col sm={12} className="text-center">
          <span className="disconnect_modal_img"><FontAwesomeIcon icon={faUserCircle} className="fa light"  /></span>
          <div className="disconnect_modal_address mt-4"> {props.walletAddress}</div>

          </Col>
          <Col sm={12} className="text-center">
            <Row>
            <Col sm={6} className="text-center">
            {copyText?
            <>
            <button className="disconnect_btn_style" onClick={() => copyFunc()}>
                     <FontAwesomeIcon icon={faCheck} onClick={props.onHide} className="fa light"  /> Copied
            </button>
            </>:
            <>
              <button className="disconnect_btn_style" onClick={() => copyFunc()}>
                     <FontAwesomeIcon icon={faCopy} onClick={props.onHide} className="fa light"  /> Copy
            </button>
            </>}
            </Col>
            <Col sm={6} className="text-center">
            <button className="disconnect_btn_style" onClick={()=>{disconnect_wallet()}}> <FontAwesomeIcon icon={faRightFromBracket} onClick={props.onHide} className="fa regular"  /> Disconnect</button>

            </Col>
            </Row>
        

          </Col>
          
          
        </Row>
  
    </Modal.Body>
  
  </Modal>
    </div>
 
  )
}

export default DisconnectModal