import React, { Component } from 'react'
import { Container, Row, Col, Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom';

import './styles.scss';

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      
    }
  }


  render() {
    return (
      <Container>
        <Row className="pt-5 justify-content-center">
          <Col xs="auto" className="justify-content-center text-center d-flex flex-column">
            <FontAwesomeIcon icon={faQrcode} size="8x" color="#81cfe0" className="align-self-center" />
            <Button onClick={() => this.props.history.push("/scan") } color="light" className="mt-3 qr-button" size="lg">Click Scan QR</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}
