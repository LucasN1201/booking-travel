import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import MainConrainer from './usage/components/MainContainer'
import RadiusDiv from './usage/components/RadiusDiv'
import RadiusLabel from './usage/components/RadiusLabel'
import { Icon, IconButton, Rating } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Block } from '@mui/icons-material'
import { Paper, Typography, Button } from '@mui/material';
import ImgDiv from './usage/components/ImgDiv';
import MainButton from '../components/RadiusButton'

const handleClick = () => {
  console.log('Button clicked!');
  // You can add any logic or state changes here
};

const Dashboard = () => {
  return (
    <div>
      <MainConrainer>
        <RadiusDiv>
          <div style={{color: 'white', width: '80vw'}}>
            <label style={{marginTop: 100, fontSize: 70, fontWeight: 'bold'}}>
              Use Crypto to <br></br> Pay for Your Dream Getaway
            </label>
            <label style={{fontSize: 30, display: 'block'}}>
              POWERED BY AI & BLOCKCHAIN
            </label>
            <div style={{display: Block}}>
              <RadiusLabel>
                <p>Create your <br></br> litinerary with AI</p>
                <IconButton size="large">
                  <ArrowOutwardIcon />
                </IconButton>
              </RadiusLabel>
              </div>
              <div>
                <RadiusLabel >
                  <p style={{marginTop: 15, marginBottom: 25}}>Book Flight/Stay/Activities</p>
                  <IconButton size="large">
                    <ArrowOutwardIcon />
                  </IconButton>
                </RadiusLabel>
              </div>
          </div>
          <ImgDiv>
            {/* <img src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_1_.png" style={{ width: '100%', height: '100%', borderRadius: 20 }} alt="" /> */}
            <div>
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_1_.png" alt="First slide" style={{ width: '100%s', height: '100%', borderRadius: 20 }} />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_1_.png" alt="Second slide" style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_1_.png" alt="Third slide" style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>   
            </div>
            <div style={{position: 'relative', bottom: 70, left: 20, fontSize: '1vw', color: 'white'}}>
              <label style={{display: 'inline-flex'}}> <Rating name="size-large" defaultValue={0} size="large" max={1} marginTop={5}/> <p>Ride the Dunes with your favourite dog in dubai</p></label>
            </div>
          </ImgDiv>
        </RadiusDiv>
        <div className="div-inline" >
          <div className="radius-div">
            <div>
              <label style={{display: 'block'}}>Accepting Payments via Credit <br></br> Card, Debit Card, and <br></br> Cryptocurrency.</label>
            </div>
            <div>
              <img className='img-pay' src="./img/pay/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f_revision_0 (1).png" /> 
              <img className='img-pay' src="./img/pay/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f_revision_0 (1).png" /> 
              <img className='img-pay' src="./img/pay/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f_revision_0 (1).png" /> 
              <img className='img-pay' src="./img/pay/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f_revision_0 (1).png" /> 
              <img className='img-pay' src="./img/pay/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f_revision_0 (1).png" /> 
              <img className='img-pay' src="./img/pay/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f_revision_0 (1).png" /> 
            </div>
          </div>
          <div className="radius-div">
            <div>
              <label style={{display: 'block'}}>List of Accepted <br></br> Cryptocurrencies </label>
            </div>
            <div style={{display: 'inline-flex', width: '100%'}}>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
            </div>
            <div style={{display: 'inline-flex', width: '100%'}}>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
              <div style={{width: '15%'}}>
                <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
              </div>
            </div>
            <div>
              <label className='white-label' style={{marginTop: 20}}>More Partnerships Incoming Soon</label>
            </div>
          </div>
        </div>
        <div className='div-setting'>
          <span style={{width: '25%', display: 'inline-flex'}}>
            <img className='icon-setting' src="./img/cryptocurrencies/avax.png"/>
            <p className='p-setting'>24/7 Customer Support</p>          
          </span>
          <span style={{width: '25%', display: 'inline-flex'}}>
            <img className='icon-setting' src="./img/cryptocurrencies/avax.png"/>
            <p className='p-setting'>100+ Payment Options</p>          
          </span>
          <span style={{width: '25%', display: 'inline-flex'}}>
            <img className='icon-setting' src="./img/cryptocurrencies/avax.png"/>
            <p className='p-setting'>Rewards and Discounts</p>          
          </span>
          <span style={{width: '25%', display: 'inline-flex'}}>
            <img className='icon-setting' src="./img/cryptocurrencies/avax.png"/>
            <p className='p-setting'>Best Price Guaranteed</p>          
          </span>
        </div>
        <div className='intro-div'>
          <label style={{fontSize: 60}}>Experience the freedom and convenience of using crypto for all your travel needs.</label>
          <label style={{fontSize: 36, marginTop: 30}}>Worldwide Destinations</label>
          <div style={{marginTop: 20}}>
            <MainButton children="Dubai" className="hoverButton"> 
            </MainButton>
            <MainButton children="Sweden" className="hoverButton"> 
            </MainButton>
            <MainButton children="Australia" className="hoverButton"> 
            </MainButton>
            <MainButton children="Turkey" className="hoverButton"> 
            </MainButton>
            <MainButton children="Dubai" className="hoverButton"> 
            </MainButton>
            <MainButton children="Sweden" className="hoverButton"> 
            </MainButton>
            <MainButton children="Australia" className="hoverButton"> 
            </MainButton>
            <MainButton children="Turkey" className="hoverButton"> 
            </MainButton>
          </div>
          <div>
            <label style={{fontSize: 36, marginTop: 30}}>Most Visited Countries</label>
            <div style={{marginTop: 30, display: 'inline-flex'}}>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
            </div>
          </div>
          <div>
            <label style={{fontSize: 36, marginTop: 30}}>Top Cities</label>
            <div style={{marginTop: 30, display: 'inline-flex'}}>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
            </div>
          </div>
          <div>
            <label style={{fontSize: 36, marginTop: 30}}>Top Activities</label>
            <div style={{marginTop: 30, display: 'inline-flex'}}>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
            </div>
          </div>
          <button className='ad-btn' onClick={handleClick}>Adspace</button>
        </div>
      </MainConrainer>
      
      <div style={{backgroundColor: 'rgb(2, 148, 233)', width: '100vw'}}>
        <RadiusDiv>
          <div style={{color: 'white', width: '100%', backgroundColor: 'rgb(2, 148, 233'}}>
              <label style={{marginTop: 250, fontSize: 70, fontWeight: 'bold'}}>
                Live with Crypto,<br></br> Travel with Crypto
              </label>
              <label style={{fontSize: 30, display: 'block'}}>
                Seamlessly integrate cryptocurrency into your lifestyle, from daily transactions to unforgettable journeys.
              </label>
            </div>
            <ImgDiv>
            <img src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_1_.png" style={{ width: '100%', height: '100%', borderRadius: 20 }} alt="" />
            </ImgDiv>
          </RadiusDiv>
      </div>
      <div className='bottom-crytp'>
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bchBlue.png" /> 
      </div>
    </div>
  )
}
export default Dashboard
