import React from 'react'
import Button from '../Button'
import "./styles.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-text">
            <div className="text">
                <p>
                   Save tons of time.
                <br/>
                Get new landing pages.
                </p>
            <div>
                 <Button/>
            </div>
            </div>
            
            
            <div className="footer-lists">
            <div className="logo-text">
                <h4>
                    Caramel
                </h4>
            </div>
            <div className="table-container">
                <div className="table">
                    <ul className="table-nav-container">
                        <li className="first item">About</li> 
                        <li>About</li> 
                        <li>About</li> 
                        <li>About</li> 
                    </ul>
                    <ul className="table-nav-container">
                        <li className="first item">About</li> 
                        <li>About</li> 
                        <li>About</li> 
                        <li>About</li> 
                    </ul>
                    <ul className="table-nav-container">
                        <li className="first item">About</li> 
                        <li>About</li> 
                        <li>About</li> 
                        <li>About</li> 
                    </ul>
                </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}
