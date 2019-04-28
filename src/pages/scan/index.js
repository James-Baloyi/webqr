import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { connect } from "react-redux";
import { Row, Col, Button, Spinner } from 'reactstrap';

import { setResult } from "../../actions/qrActions";

class Index extends Component {

    handleScan = data => {
        if (data) {
            this.props.setResult(data);
            this.props.history.push("/result")
        }
    }

    handleError = err => {
       alert(err);
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '100%' }}
                        />
                    </Col>
                </Row>
                <Row className="pt-5 justify-content-center">
                    <Col xs="auto" className="justify-content-center text-center d-flex flex-column">
                        <Button onClick={() => this.props.history.push('/')} color="light" className="mt-3" size="lg">Cancel</Button>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ qr }) => {
    return {
        qr
    }
}

export default connect(mapStateToProps, { setResult })(Index)
