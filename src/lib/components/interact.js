import React from "react";

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "../components/providerOptions";
const API=localStorage.getItem('API');
let my_id=12;




require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contract_ABI = require("../../contract-abi.json");
const contract_Address = "0x5fe71fB614BFcEbB434e88345d847894b8AadE3F";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);


var nftPrice;
var arr_index;
var numberArray;
let arr_mint;

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions // required
});

//miniting function which contain metadate of img url name and description
export const MintNFT = async (address,input,minted_value,contractAddress,contractAbi,contract_type,arr_address,white_proof,myleaf) => {

  try {
  //if any form input field is empty return false
  console.log('wallet_address',address)
  console.log('contract_Address',contract_Address);
  console.log('white_proof',white_proof);
  console.log('myleaf',myleaf);
  
  
          

  // getProof(address);

  let new_minted_value=minted_value+1;

   arr_mint=[];
   arr_index=[];

  // let nfturi =  window.contract.methods.uri(1);
  for(let i=0;i<input;i++){
    
    arr_mint.push(new_minted_value+i);
    
    arr_index.push(1);
  }

  var ints = arr_mint;
  var hexstr = [];
   numberArray = [];
  for(var i=0; i < ints.length; i++) {
      hexstr.push("0x"+ints[i].toString(16));
      
  }


  for (var i = 0; i < hexstr.length; i++) {
    numberArray.push(hexstr[i].replace(/['"]+/g, ''));
    
}
    window.contract = await new web3.eth.Contract(contract_ABI, contract_Address);
    console.log(window.contract);


    
 
     // let nftPrice = await window.contract.methods.viewPrice().call();


    //  nftPrice = await  window.contract.methods.getPrice(white_proof,myleaf).call();
    nftPrice=90000000000000;
    console.log(nftPrice)

  let mint_quan=input;
  let gas_price=mint_quan * nftPrice;
  let hex_price = `0x${parseInt(gas_price, 10).toString(16).toUpperCase()}`;
  


    //passing ABI and contract address 
      //encodeABI() include: preparing a smart contract transaction for a multisignature wallet
      // const nftPrice = window.contract.methods.viewPrice()._ethAccounts.setProvider.length
      // const arrProto = Object.getPrototypeOf(nftPrice)

 


 
      // let Contract_Type="";
      // if(contract_type==="721"){
      //   Contract_Type=window.contract.methods.batchMintNFT(input,white_proof,myleaf).encodeABI()
      // }
      // if(contract_type==="1155"){
      //   Contract_Type=window.contract.methods.batchMintNFT(numberArray,arr_index,white_proof,myleaf).encodeABI()
      // }




  const transactionParameters = {
    to: contract_Address, // Required except during contract publications.
    // from: window.ethereum.selectedAddress, // must match user's active address.
    from: address, // must match user's active address.
    value: hex_price,
    data: window.contract.methods.batchMintNFT(numberArray,arr_index).encodeABI(),
    // data: Contract_Type,
  };
  
    //trasaction request with parameters(to,from and data)
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    })
  // const txHash = await web3.eth.sendTransaction({
  //       from:address
  //       params: [transactionParameters],
  //     })
    //if trasaction successfull return the trasaction link  
    return {
      success: true,
      status:
        `Your Transaction Hash :- ${txHash}`,
      hash:txHash,

    };
  } 
  catch (err) {
    if (err.code === 4001) {
      return {
        address: "",
        status: "😥 Wallet request Cancel by the user, Retry To Connect" 
      };
    }
    else if (err.code === 4100) {
      return {
        address: "",
        status: "😥 The Wallet request account has not been authorized by the user." 
      };
    }
    else if (err.code === 4200) {
      return {
        address: "",
        status: "😥 The requested method is not supported by this wallet." 
      };
    }
    else if (err.code === 4900) {
      return {
        address: "",
        status: "😥 wallet is disconnected from all chains." 
      };
    }
    else if (err.code === -32700) {
      return {
        address: "",
        status: "😥 Given Input Data is not valid, kindly retry" 
      };
    }
    else if (err.code === -32600) {
      return {
        address: "",
        status: "😥 Given Input Data is not valid, kindly retry" 
      };
    }
    else if (err.code === -32601) {
      return {
        address: "",
        status: "😥 The method does not exist / is not available, kindly retry" 
      };
    }
    else if (err.code === -32602) {
      return {
        address: "",
        status: "😥 The given method is not valid, kindly retry." 
      };
    }
    else if (err.code === -32603) {
      return {
        address: "",
        status: "😥 Selected wallet network is not valid, kindly change the network." 
      };
    }
    else if (err.code === -32003) {
      return {
        address: "",
        status: "😥 User Reject the transaction,click to retry." 
      };
    }
    else{
      console.log(err)
      return {
        success: false,
        status: "😥 Something went wrong: " + err.message,
        err:"Something went wrong: " + err.message,
      };
    }
    
  }
};





