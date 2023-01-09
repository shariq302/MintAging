import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../sass/Footer.scss';
import { RxArrowRight } from "react-icons/rx";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BsSnapchat } from 'react-icons/bs';

function Footer() {
  return (
   <Container fluid >
    <Row className='footer-container'>
        <Col lg={4}>
            

            <div className='footer-svg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.256 29.955">
                <path id="Path_1" data-name="Path 1" d="M27.588,17.322a25.291,25.291,0,0,0-12.627.633c-3.718.978-2.305-1.176-4.772-.947-.262-.682-.969-1.478,1.86-1.678,3.7-.262,7.454-.469,11.212-.6,1.826-.065,3.885.247,1.081-.725-.7-.241,2.447-.156,3.224-.723-2.814-.713-6.213.174-9.183-.393l2.552-1.09c-3.985-1.737-9.855-.752-14.954-1.36C23.831,9.59,40.5,6.851,59.355,6.742a79.6,79.6,0,0,0-18.009-.637c-9.785.567-19.44,1.417-29.4,1.581l.13.05c.044-.5-1.714-.906,1.607-1.314C30.053,4.411,47.164,4.4,64.052,3.863,70,3.674,75.684,2.857,81.773,3.119c-4.362-.241-8.717-.11-13.007-.145-5.558-.046-11.044-.253-16.692-.082-10,.3-19.925.664-29.8,1.332-3.866.262-8.042-.159-11.661.782-.89.231-1.048-.186-1.15-.527-.241-.808,1.358-.665,2.654-.776,8.661-.74,17.593-.561,26.367-.942C44.08,2.519,49,1.249,54.9,1.436l-9.132-.164.016-.156L74.04.558c-2.181.731-4.177.272-5.635.768,21.549-.151,43.086-.054,65.162-.077C130.5.814,127.837.582,125.122.223c6.021.107,12.04.235,18.064.318,12.357.17,24.666-.228,36.965-.534,2.74-.068,4.662.469,7.132.566,8.669.342,17.3-.1,25.976.008,14.678.191,29.221.682,43.81,1.217,10.034.368,20.119.646,30.18.944,4.158.123,7.227.862,10.86,1.243.888.093.836.154-1.346,1.323,6.092.64,12.42-1.222,19,.361-6.892.8-13.487.387-19.77.911,5.4.534,10.6,1.312,18.041.77-4.734,1.482-5.427,2.32.526,2.289,1.121-.006,3.32.342,2.5.554-1.607.413.518,1.307-2.538,1.506a153.7,153.7,0,0,1-15.721.578c4.031.445,5.751,1.583,9.913,1.756-2.635.88-5.331.759-7.7.989-1.547.15-4.1-.049-4.27.8-.192.957,2.9.29,3.926.823-.935.051-1.84.064-2.675.154-1.351.147-3.241-.364-4.062.479-.786.808,3.437.546,2.2,1.382,2.94-.155,3.144,1.242,5.876,1.253-3.125.282-6.368-.029-9.785.472a13.04,13.04,0,0,0,5,.3c3.339-.343,4.956.538,5.368,1.268.592,1.047-2.39.77-4.186.856a12.319,12.319,0,0,0-2.493.18c-4.153,1.671-9.128,2.624-15.9,2.332,5.1.947,10.484.328,16.879.634-7.528,1.838-14.95,1.871-22.168,1.934-11.734.1-23.488-.012-35.149.6a11.865,11.865,0,0,0-3.345.421c-.135.619,2.04.414,2.569,1.037-11.545-.986-23.009-.054-34.359-.457-9.931-.352-19.957-.246-29.785-.114-12.766.172-25.561.384-38.129-.164-16.856-.735-33.817-.047-50.6-.871-1.246-.061-2.612.27-3.954.325-1.162.047-3,.416-2.889-.518.128-1.076-2.553-1.143-4.38-1.211-8.6-.318-17.107-.809-26.6-1.414,10.1-.449,19.178.469,28.222.092-9.593-2.111-20.7-1.536-31.224-2.241H68.176c-3.306-.455-6.59-.018-10.3-.3,1.776-.85,3.243-1.734-1.1-2.115-2.866-.252-5.856.328-8.985-.163,2.6-.657,5.818-.115,9.133-1-12.182.643-23.213-.82-34.361.16-.661-1.379,3.436-.744,4.487-1.355l-.153.048c7.016-.656,13.746.173,20.538.529,7.308.383,14.815-.194,22.035.6l-4.817-1.14H77.3c0-.077.005-.153.009-.23l-21.194-.531c0-.092,0-.185,0-.277l5.361-.309c-4.391-.3-7.512-.838-10.107-.618-6.517.553-14.191-1.354-19.781,1.129a15.291,15.291,0,0,1-2.475-.154l-1.523-.337m65.253,2.266a162.713,162.713,0,0,0-22.008-.13c7.247.631,14.647.308,22.008.13M38.813,9.8a69.739,69.739,0,0,0-14.146.827A109.755,109.755,0,0,0,38.813,9.8" transform="translate(-5.983 0)" fill="#f992b5"/>
              </svg>
                </div>
                <h1 className='footer-h1'>
                    Deaging
                </h1>
                
            
            <div className='footer-div'>
            <p className='footer-div-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className='footer-div-p1'>Phone: <span className='footer-span'>1-2324-233-543</span></p>
            <p className='footer-div-p1'>Email: <span className='footer-span'>info@gmail.com</span></p>
            </div>
        </Col>
        <Col  className='footer-col2'>
        <p className='footer-col2-p' > CORPORATE </p>
        <p className='footer-col2-p1'> About Us </p>
        <p className='footer-col2-p1'> Green </p>
        <p className='footer-col2-p1'> Afiliate </p>
        <p className='footer-col2-p1'> Non-Profits & Government </p>
        <p className='footer-col2-p1'>Terms Of Services </p>
        <p className='footer-col2-p1'>Privacy Policy </p>
        </Col>
        <Col  className='footer-col2'>
        <p className='footer-col2-p' > SUPPORT </p>
        <p className='footer-col2-p1'> My Account </p>
        <p className='footer-col2-p1'> Design Guide </p>
        <p className='footer-col2-p1'> FAQ </p>
        <p className='footer-col2-p1'> Design Services </p>
        <p className='footer-col2-p1'> Contact Us </p>
        </Col>
        <Col  className='footer-col2'>
        <p className='footer-col2-p' > FOLLOW US </p>
        <p className='footer-col3-p1'>Stay up to date with all the actions that wo are saved for all our customers</p>
        <div className='footer-col2-input'>
        <input 
        placeholder='YOUR EMAIL ADDRESS' 
        className='footer-col2-input1'
        />
        <button>
        <RxArrowRight 
        className='footer-col2-icon'
        />
        </button>
        </div>
        <div className='footer-col2-div'>
        <AiFillYoutube 
        className='footer-col2-icon1'
        />
        <AiFillFacebook 
        className='footer-col2-icon1'
        />
        <BsSnapchat 
        className='footer-col2-icon1'
        />
        </div>
        </Col>
    </Row>
   </Container>
  )
}

export default Footer
