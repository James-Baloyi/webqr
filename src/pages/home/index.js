import React, { Component } from 'react'
import { Container, Row, Col, Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';

export default class Index extends Component {
  render() {
    return (
      <Container fluid className=",">
        <Row className="pt-5 justify-content-center">
          <Col xs="auto" className="justify-content-center text-center d-flex flex-column">
            <FontAwesomeIcon icon={faQrcode} size="8x" color="#81cfe0" />
            <Button color="light" className="mt-3" size="lg">Scan QR</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}
