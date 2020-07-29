import React, { Component } from 'react'
import Button from '../../components/Button'
import Image from '../../components/Image'
import "./styles.css"


export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>I am home</h1>
                <Button />
                <Image />
            </div>
        )
    }
}
