import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>
            Since 2011, Fondation AXIS has worked in solidarity with its not-for-profit partners tocreate conditions for women and girls to be free to shape their own destiny.
            Through multi-year, specialised support, Fondation AXIS adapts global strategies to local realities, offering tailored resources, connecting critical channels and amplifying community-led solutions.
          </span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>
            AXIS Customer Care is available Monday to Sunday, 7 AM to 12 AM ET. to answer all your questions.
          </span>
          <span>Please email us, call 1800-550-0005 or live chat with a AXIS Advisor.</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>AXIS STORE</span>
          <span className='copyright'>
            © Copyright 2023. ALl Rights Reserved
          </span>
        </div>
        <div className='right'>
          <img src='/img/payment.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
