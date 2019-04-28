import React, { Component } from 'react'
import { Container, Row, Col, Button, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";

import { setResult } from "../../actions/qrActions";

import './styles.scss';

class Index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000)
    }


    render() {

        const { loading } = this.state;

        return (
            <React.Fragment>
                <Row className="pt-5 justify-content-center">

                    {!loading && <Col xs="auto" className="justify-content-center text-center d-flex flex-column">

                        <FontAwesomeIcon icon={faLink} size="2x" color="#81cfe0" className="mb-3 align-self-center" />
                        <p>{this.props.qr.result}</p>
                        <a className="mt-3 qr-button btn btn-light btn-lg" size="lg" href={this.props.qr.result}>Link</a>
                        <Button onClick={() => this.props.history.push('/')} color="light" className="mt-3" size="lg">Home Page</Button>
                    </Col>}

                    {loading && <Spinner style={{ width: '5rem', height: '5rem', color: '#81cfe0' }} type="grow" className="mt-4 align-self-center" />}

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

export default connect(mapStateToProps)(Index)