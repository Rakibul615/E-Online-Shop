import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
             <div className="footer-container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h5>company</h5>
  	 			<ul>
  	 				<li>about us</li>
  	 				<li>our services</li>
  	 				<li>privacy policy</li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h5>get help</h5>
  	 			<ul>
  	 				<li>FAQ</li>
  	 				<li>shipping</li>
  	 				<li>returns</li>
  	 				<li>order status</li>
  	 				<li>payment options</li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h5>online shop</h5>
  	 			<ul>
  	 				<li>watch</li>
  	 				<li>bag</li>
  	 				<li>phone</li>
  	 				<li>laptop</li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h5>follow us</h5>
  	 			<div className="social-links">
  	 				<i className="fab fa-facebook-f"></i>
  	 				<i className="fab fa-twitter"></i>
  	 				<i className="fab fa-instagram"></i>
  	 				<i className="fab fa-linkedin-in"></i>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
        </div>
       
    );
};

export default Footer;