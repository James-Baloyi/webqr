import React, { Component } from 'react'
import { Container, Row, Col, Button, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';

export default class Index extends Component {

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
            <Container>
                <Row className="pt-5 justify-content-center">

                    {!loading && <Col xs="auto" className="justify-content-center text-center d-flex flex-column">
                        <p>http://google.com</p>
                        <Button color="light" className="mt-3 qr-button" size="lg">Redirect</Button>
                    </Col>}

                    {loading && <Spinner style={{ width: '5rem', height: '5rem', color: '#81cfe0' }} type="grow" className="mt-4 align-self-center" />}

                </Row>
            </Container>
        )
    }
}
