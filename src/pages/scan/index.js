import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

export default class Index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            resudlt: 'NO Result'
        }
    }

    handleScan = data => {
        if (data) {
            window.location.href = data;
        }
    }
    handleError = err => {
        console.error(err)
    }

    render() {
        return (
            <div>
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                />
                {/* <p>{this.state.result}</p> */}
            </div>
        )
    }
}
