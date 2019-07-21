import React, { Component } from 'react';
import {Image, Row, Col, Button, Card } from 'react-bootstrap';
import './Card.css';
class Carder extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Row className="show-grid text-center" className="banner-row">
                <Col sm={12} lg={12}>
                <Image src="assets/Banner.jpg" className="header-image" />
                </Col>
                </Row>
                <Row className="show-grid text-center" className="popular-row">
                <Col sm={3} lg={3}>
                <h5>Popular Items</h5>
                </Col>
                <Col sm={7} lg={7}>
                
                </Col>
                <Col sm={2} lg={2}>
                <Button variant="info">View all Items</Button>
                </Col>
                </Row>
                <Row className="show-grid text-center" className="card-row">
                <Col sm={3} lg={3}>
    <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src="assets/n1.jpeg" />
  <Card.Body>
    <Card.Text>
      <p>Some quick example text to build on the card title and make up the bulk of
      the card's content.</p>
      <p><b>Lorem Ipsum</b></p>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm={3} lg={3}>
<Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src="assets/n1.jpeg" />
  <Card.Body>
    <Card.Text>
    <p>Some quick example text to build on the card title and make up the bulk of
      the card's content.</p>
      <p><b>Lorem Ipsum</b></p>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm={3} lg={3}>
<Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src="assets/n1.jpeg" />
  <Card.Body>
    <Card.Text>
    <p>Some quick example text to build on the card title and make up the bulk of
      the card's content.</p>
      <p><b>Lorem Ipsum</b></p>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm={3} lg={3}>
<Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src="assets/n1.jpeg" />
  <Card.Body>
    <Card.Text>
    <p>Some quick example text to build on the card title and make up the bulk of
      the card's content.</p>
      <p><b>Lorem Ipsum</b></p>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
</Row>

            </div>
         );
    }
}
 
export default Carder;