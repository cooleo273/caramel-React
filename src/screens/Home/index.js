import React, { Component } from 'react'
import Header from "../../components/Header";
import "./styles.css"
import Laptopcontainer from '../../components/Laptopcontainer';
import Inbox from '../../components/Inbox';
import Authors from "../../components/Authors";
import Footer from '../../components/Footer';

export default class Home extends Component {
    
    render() {
       
        
        return (
            <div>
                <Header />
                <Laptopcontainer />
                <Inbox />
                <Authors />
                <Footer />
            </div>
        )
    }
}
