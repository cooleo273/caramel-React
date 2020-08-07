import React, { Component } from 'react'
import Header from "../../components/Header";
import "./styles.css"
import Laptopcontainer from '../../components/Laptopcontainer';



export default class Home extends Component {
    
    render() {
       
        
        return (
            <div>
                <Header />
                <Laptopcontainer />
                
            </div>
        )
    }
}
