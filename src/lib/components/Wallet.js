import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Walletmodal from './Walletmodal';
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import DisconnectModal from './DisconnectModal';
import '../bootstrap.min.css';
import { useMemo } from 'react';
import { MdLogin } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';

function Wallet(props) {

      const [modalShow, setModalShow] = useState(false);
      const [disconnectmodalShow, setDisconnectmodalShow] = useState(false);
      const [connect_wallet_address,set_connect_wallet_address]=useState(false)
      const [wallet_address,get_connect_wallet_address]=useState(false)
      const { active,chainId, account, library, connector,provider, activate, deactivate } =useWeb3React();
      console.log('props',props )
     
     //wallet
     const wallet_info = useMemo(() =>props.func_wallet(wallet_address) , [wallet_address]);
     function abd(){
      return wallet_info
     }

	 if(props){
        if(props.func_wallet){
          abd()
        }
      }


      useEffect(()=>{
        
        getCurrentWallet()
      
        

      },[])
     

  
   
      const injected = new InjectedConnector({  
        supportedChainIds: [1,3,4,5, 42,61,137, 1337,80001] 
      });
      const CoinbaseWallet = new WalletLinkConnector({
        url: `https://polygon-mumbai.g.alchemy.com/v2/7r5JXbmB3DQ8Xj0fKXX58DBna9EJNX4p`,
        appName: "Web3-react Demo",
        qrcode: true,
        supportedChainIds: [1, 3, 4, 5, 42],
      });
      
      async function getCurrentWallet(){
        const check_disconnect=localStorage.getItem('check_disconnect')
        if(check_disconnect === 'false'){

          console.log('window.ethereum',window.ethereum)
          if (window.ethereum) {
            try {
              const addressArray = await window.ethereum.request({
                method: "eth_accounts",
              });
              if (addressArray.length > 0) {
                
                if(window.ethereum.isMetaMask){
                  activate(injected)
                }
                else if(window.ethereum.isCoinbaseWallet){
                  activate(CoinbaseWallet)
                }      
                
              }
            } catch (err) {
              if (err.code === 4001) {
                console.log('😥 User Reject Connection Request Retry To Connect');
              }
              else{
                console.log('😥', err.message);
              }
              
            }
          } 
          else {
            console.log('😥 install wallet');
          }
        }
        else{

        }
  
      }
      function getwalletaddress(props){
        if(props !== null){
          get_connect_wallet_address(props)
          set_connect_wallet_address(true)
          setModalShow(false)
        console.table('walletAddress true');
        sessionStorage.setItem('walletAddress',true)
        


        }
        else{
          set_connect_wallet_address(false)
          console.table('walletAddress false');
          sessionStorage.setItem('walletAddress',false)

        }

      }
      
  
    
  return (
    <div>
      {connect_wallet_address?<>
       <Button className='white' variant="primary" style={{backgroundColor:props?.btn_color?props.btn_color:'',color:props?.btn_text_color?props.btn_text_color:'',width: '156px'}} onClick={() => setDisconnectmodalShow(true)}>
        {/* {wallet_address.slice(0, 11)} .... {wallet_address.slice(wallet_address.length-5)} */}
        <BiLogOut style={{fontSize:'25px'}} className='header-icons white'/>&nbsp; Logout
      </Button></>:
      <Button className='white' variant="primary" style={{backgroundColor:props?.btn_color?props.btn_color:'',color:props?.btn_text_color?props.btn_text_color:'',width: '156px'}}  onClick={() => setModalShow(true)}>
      <MdLogin style={{fontSize:'25px'}} className='header-icons white'/> &nbsp; {props?.btn_name?  props.btn_name  : 'Signup'}
    </Button>
    
      }
    

      <Walletmodal
        func={getwalletaddress}
        show={modalShow}
        onHide={() =>setModalShow(false)}
        
      />
      <DisconnectModal
        show={disconnectmodalShow}
        onHide={() => setDisconnectmodalShow(false)}
        walletAddress={wallet_address}
        
      />


    </div>
  )
}


export default Wallet