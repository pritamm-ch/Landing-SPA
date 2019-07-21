import React, { Component } from 'react';
import {Row, Col, Button, Jumbotron, Image } from 'react-bootstrap';
import './Video.css';
class Video extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Row className="show-grid text-center" className="video-row">
                <Col sm={3} lg={3}>
                <h5>Latest Videos</h5>
                </Col>
                <Col sm={7} lg={7}>
                
                </Col>
                <Col sm={2} lg={2}>
                <Button variant="info">View More Videos</Button>
                </Col>
                </Row>
                <Row className="show-grid text-center" className="video-row">
                <Col sm={4} lg={4}>
                <Jumbotron>
                    
                <Image src="assets/player.png" className="player" />
                
                </Jumbotron>
                </Col>
                <Col sm={4} lg={4}>
                <Jumbotron>
                    
                <Image src="assets/player.png" className="player" />
                </Jumbotron>
                </Col>
                <Col sm={4} lg={4}>
                <Jumbotron>
                  
                <Image src="assets/player.png" className="player" />
                
                </Jumbotron>
                </Col>
                </Row>
            </div>
         );
    }
}
 
export default Video;