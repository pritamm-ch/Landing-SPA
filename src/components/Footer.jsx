import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import './Footer.css';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Row className="show-grid text-center" className="footer-row">
                
                <Col sm={3} lg={3}>
                <ul>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li><h1 style={{color: 'blue' }}>LOGO</h1></li>
                <li><i class="fa fa-phone" aria-hidden="true"></i> 9531536909</li>
                <li><i class="fa fa-envelope" aria-hidden="true"></i> pritamchowdhury71@gmail.com</li>
                <li><i class="fa fa-globe" aria-hidden="true"></i> websiteurl</li>
                </ul>
                </Col>
                <Col sm={2} lg={2}>
                <ul>
                <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>Company</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Join Us</li>
                    <li>Become our Content Partner</li>
                </ul>
                </Col>
                <Col sm={3} lg={3}>
                <ul>
                <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>Links</li>
                    <li>Courses</li>
                    <li>Blogs &amp; News</li>
                </ul>
                </Col>
                <Col sm={2} lg={2}>
                <ul>
                <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>Others</li>
                    <li>Terms &amp; Conditions</li>
                    <li>Sitemap</li>
                </ul>
                </Col>
                <Col sm={2} lg={2}>
                <ul>
                <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>Connect with us</li>
                    <li><i class="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;<i class="fa fa-twitter-square" aria-hidden="true"></i>&nbsp;<i class="fa fa-pinterest-square" aria-hidden="true"></i>&nbsp;<i class="fa fa-youtube-square" aria-hidden="true"></i>&nbsp;<i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
                </ul>
                </Col>
                
                </Row>
            </div>
         );
    }
}
 
export default Footer;