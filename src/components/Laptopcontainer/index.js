import React from 'react'
import "./styles.css";
import  hero  from "../../assets/images/laptop.jpg";
export default function Laptopcontainer() {
    return (
        <div>
            <div className="letter">
                <h2>
                    <span>
                        Why Caramel
                    </span>
                    <br />
                    would be your best fit?
                </h2>
            </div>
            <div className="laptop-container">
            <div className="laptop">
                <img src={hero} alt='laptop' />
            </div>
                
            </div>
        </div>
    )
}
