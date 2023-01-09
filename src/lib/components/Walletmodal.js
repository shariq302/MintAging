import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Container, Spinner } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faClose, faCross, faSpinner } from "@fortawesome/free-solid-svg-icons";
import metaMask_img from "../Assests/wallet_logo/metamask.svg";
import coinbase_img from "../Assests/wallet_logo/coinbase.svg"
import wallet_connect_img from "../Assests/wallet_logo/walletconnect.svg"
import connetWallet_img from "../Assests/wallet_logo/connectWallet.png"
import image_first from "../Assests/img_1.svg"
import image_second from "../Assests/img_2.svg"
import wallet_connect_qr from "../Assests/wallet_qr.png"
import coinbase_qr from "../Assests/coinbase_qr.png"
import '../components/Wallet.scss'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import {providerOptions} from '../components/providerOptions.js'
import { useWeb3React } from "@web3-react/core";


function Walletmodal(props) {

    const { active,chainId, account, library, connector,provider, activate, deactivate ,error } =useWeb3React();
   
    const [account1, setAccount] = useState();
    const [chainId1, setChainId] = useState();
    const [wallet_type,set_wallet_type]=useState('');
    const [status, setStatus] = useState("");
    const [balance,setBalance]= useState(null)
    const [wallet_account,set_wallet_account]=useState(null)
    const [wallet_install,set_wallet_install]=useState(false)
    const [wallet_msg,set_wallet_msg]=useState(null);
    // const contractAbi = require("../Json/ContractAbi.json");
    const[load,setLoad]=useState(false);
 
    useEffect(()=>{
        setLoad(true)
        console.table('active',active,chainId, account, library, connector,provider,localStorage.getItem('eth_bal'))
        get_current_account_details(props)
        setLoad(false)

      },[active])

      useEffect(()=>{
        set_wallet_msg(null)
        if(error){
          set_wallet_msg(null)
          const err=error
          set_wallet_msg(err.message)  
        }
      },[error])
    
    const get_current_account_details=async(props)=>{
      console.table('props props ',props)
      if(window.ethereum){
        if(active){
          setLoad(true)
          const acc= await connector.getAccount()
          const balance=await library.getBalance(acc)
          setBalance(balance/1e18)
          set_wallet_account(acc)
          props.func(acc)

          localStorage.setItem('eth_bal',balance/1e18)
       
          setLoad(false)
        console.table('acc',acc)
        console.table('balance',balance/1e18)
        }
      }
        
        else{
          console.table('false')
          set_wallet_install(false)
        }
    }
    const injected = new InjectedConnector({  
        supportedChainIds: [1,3,4,5, 42,61,137, 1337,80001] 
      });
      
      
      const CoinbaseWallet = new WalletLinkConnector({
        url: `https://polygon-mumbai.g.alchemy.com/v2/7r5JXbmB3DQ8Xj0fKXX58DBna9EJNX4p`,
        appName: "Web3-react Demo",
        qrcode: true,
        supportedChainIds: [1, 3, 4, 5, 42],
       });
      
      const WalletConnect1 = new WalletConnectConnector({
        rpcUrl: `https://polygon-mumbai.g.alchemy.com/v2/7r5JXbmB3DQ8Xj0fKXX58DBna9EJNX4p`,
        bridge: "https://bridge.walletconnect.org",
        appName: "Web3-react Demo",
        qrcode: true,
        supportedChainIds: [1,3,4,5, 42,61,137, 1337,80001],
      });
      const connectMetamask=async()=>{
        set_wallet_msg(null)

          try{
            if(window.ethereum ){
              set_wallet_install(true)
              if(window.ethereum.isMetaMask){
                localStorage.setItem('check_disconnect',false)
                setLoad(true)
                console.table('connecting to metamask',window.ethereum);
                
                try{
                  await activate(injected)
                  set_wallet_install(true)

                }
                catch(err){
                  set_wallet_install(false)
                  console.table('😥', err.message);
                }
                setLoad(false)
              }
              if(!window.ethereum.isMetaMask){
              
                set_wallet_install(false)
                console.table('😥 Metamask Not install');
              }

          
            }
            else{
           
              
                set_wallet_install(false)
            } 
          }
          catch(err){
          
         
           
              console.table('😥', err.message);
           
          }
     
    }
    const connectCoinbase=async()=>{
      set_wallet_msg(null)

      setLoad(true)
          try{
            localStorage.setItem('check_disconnect',false)
            await activate(CoinbaseWallet)
          }
          catch(err){
            console.table('not connected to coinbase ',err);
          }
          console.table('wallet_install',wallet_install) 
      }

    const connectWalletconnect=async()=>{
      set_wallet_msg(null)

      setLoad(true)
      console.table('connecting to Walletconnect');
      try{
        localStorage.setItem('check_disconnect',false)
        await activate(WalletConnect1)
      }
      catch(err){
        console.table('not connected to WalletConnect ',err);
      }
      console.table('wallet_install',wallet_install) 
      setLoad(false)
    }
      const connectWallet = async () => {
        props.onHide(true)
      
        try {

          const web3_modal = new Web3Modal({
            cacheProvider: true, // optional
            providerOptions // required
          });
          web3_modal.clearCachedProvider();


          const provider = await web3_modal.connect();
          const library = new ethers.providers.Web3Provider(provider);
          const accounts = await library.listAccounts();
          const network = await library.getNetwork();
          console.table('provider',provider);
          console.table('accounts',accounts);
          console.table('network',network);
          console.table('library',library);
    
          console.table('library.url',library.connection.url);
          console.table('network.chainId',network.chainId);
         
          let networkName="";
          switch (network.chainId) {
            case 1:
              networkName = "Mainnet";
              break;
            case 2:
             networkName = "Morden";
             break;
            case 3:
              networkName = "Ropsten";
              break;
            case 4:
              networkName = "Rinkeby";
              break;
            case 42:
              networkName = "Kovan";
              break;
            default:
              networkName = "Unknown";
          }
          localStorage.setItem('networkName',networkName);
          if (accounts) {
          setAccount(accounts[0]);
          props.func(accounts[0]);
          localStorage.setItem('check_disconnect',false)
          
          }
          setChainId(network.chainId);
          console.table(chainId)
          console.table(accounts);
        } 
        catch (err) {
       
           if (err.code === -32002) {
            window.ethereum.request({
              method: 'wallet_requestPermissions',
              params: [{ eth_accounts: {} }],
            })
           
            console.table("user cancel the request,click to retry");
           
          }
            
        }
      };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
     
      <Modal.Body className="p-1" >
      
     
        <Tab.Container id="left-tabs-example "  defaultActiveKey="profile">
          <Row className="p-1 h-100" >
        
            <Col sm={4} className="border_grey">
              <div className="wallet_heading_container" >
                  <span className="wallet_heading">Connect a Wallet  </span>
              </div>
              <Nav variant="pills" className="flex-column">
                <span className="wallet_popular">Popular</span>
                <Nav.Item>
                  <Nav.Link eventKey="connectWallet" onClick={() => { connectWallet() }}><img  src={connetWallet_img} style={{width: '28px', backgroundColor: 'black', filter: 'hue-rotate(104deg)'}} className="margin_right"/> Connect Wallet</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="MetaMask" onClick={() => { connectMetamask() }}><img src={metaMask_img} className="margin_right"/> MetaMask</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Coinbase" onClick={() => { connectCoinbase() }}><img src={coinbase_img} className="margin_right"/> Coinbase Wallet</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="WalletConnect" onClick={() => { connectWalletconnect() }}><img src={wallet_connect_img} className="margin_right"/> WalletConnect</Nav.Link>
                </Nav.Item>
               
              </Nav>
            </Col>
            <Col sm={8}>
            <div className="wallet_heading_container">
                  <span className="wallet_heading"> <FontAwesomeIcon icon={faClose} onClick={props.onHide} className="wallet_close_icon"  /></span>
                </div>
            <Tab.Content >
            <Tab.Pane eventKey="profile">
                  <Container className="modal_inner_container">
                    <Row>
                        <Col className="modal_inner_main_heading"><span >What is a Wallet?</span></Col>
                    </Row>
                    <Row>
                        <Col md={2}><img className="modal_inner_img" src={image_first}/></Col>
                        <Col md={10}>
                            <Row>
                            <Col md={12} className="modal_inner_sub_heading"><span>A Home for your Digital Assets</span></Col>
                            <Col md={12} className="modal_inner_sub_text"><span>Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</span></Col>
                            </Row>
                          
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <Col md={2}><img className="modal_inner_img" src={image_second}/></Col>
                        <Col md={10}>
                            <Row>
                            <Col md={12} className="modal_inner_sub_heading"><span>A New Way to Log In</span></Col>
                            <Col md={12} className="modal_inner_sub_text"><span>Instead of creating new accounts and passwords on every website, just connect your wallet.</span></Col>
                            </Row>
                          
                        </Col>
                    </Row>
                  </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="MetaMask">
            <Container className="modal_inner_container">
                {wallet_install?
                <>
                  <Row className="pt-4 text-center">
                    <Col md={12} className="metamask_modal_text"><img className="metamask_modal_img" src={metaMask_img}/></Col>
                    <Col md={12}>
                        <Row className="pt-4">
                        <Col md={12} ><span className="metamask_modal_inner_text">Opening MetaMask</span></Col>
                        <Col md={12} className="pt-2" >
                          {wallet_msg !== null ?
                          <> <span className="metamask_modal_subtext"><FontAwesomeIcon icon={faClose} style={{color:'red',fontSize:'25px'}} /> {wallet_msg}</span></>:
                          <> <span className="metamask_modal_subtext"><FontAwesomeIcon icon={faSpinner} onClick={props.onHide} className="fa-spin"  /> Waiting for connection</span></>}
                         
                          </Col>
                        </Row>
                    </Col>
                </Row>
                </>:<>
                <Row className="pt-4 text-center">
                    <Col md={12} className="metamask_modal_text"><img className="metamask_modal_img" src={metaMask_img}/></Col>
                    <Col md={12}>
                        <Row className="pt-4">
                        <Col md={12} ><span className="metamask_modal_inner_text">MetaMask is not installed</span></Col>
                        <Col md={12} className="pt-2" ><span className="metamask_modal_subtext">The MetaMask extension is not installed in your browser</span></Col>
                        <Col md={12} className="pt-2" ><button className="metamask_modal_inner_button" onClick={()=>window.open("https://metamask.io/download/")}>INSTALL</button></Col>
                        </Row>
                    </Col>
                </Row></>}
              
            </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="Coinbase">
            <Container className="modal_inner_container pt-0">
           
                
                    <Row className="pt-1 text-center">
                      
                    <Col md={12} ><span className="metamask_modal_inner_text pb-1">Scan with Coinbase Wallet</span></Col>
                    <Col md={12} >
                    {wallet_msg !== null ?<>
                      <> 
                      <span className="metamask_modal_subtext" style={{fontSize:'20px'}} ><FontAwesomeIcon icon={faClose} style={{color:'red',fontSize:'20px'}} /> {wallet_msg}</span>
                      </>
                    </>:<> <img style={{width:'75%'}} src={coinbase_qr} alt='qr code' /></>}
                   
                    </Col>
                </Row>
              
            
            </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="WalletConnect">
            <Container className="modal_inner_container pt-0">
                <Row className="pt-1 text-center">
                <Col md={12} ><span className="metamask_modal_inner_text pb-1">Scan with your phone</span></Col>
                    <Col md={12}>
                    <img style={{width:'75%'}} src={wallet_connect_qr} alt='qr code' />
                    </Col>

                </Row>
            </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="connectWallet">
         
            </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Modal.Body>
    
    </Modal>
  );
}

export default Walletmodal;
