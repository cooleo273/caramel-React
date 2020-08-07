import React from 'react'
import hero from "../../assets/images/cutie.jpg";
import "./styles.css"

export default function Authors() {
    return (
        <div className='authors-header'>
        <h1>
            About the 
            <span>
                author
            </span>
        </h1>
        
        <div className="authors-container">
            <div className="authors-text">
                <h3> 
                    Joseph Williams 
                </h3>
                <p className="author-bio">
                     
                    You made it so simple. My new website is 
                    so much faster and easier to work with 
                    than my old site. I just choose the page, 
                    make the change and click save."
                
                </p>
            </div>
            <div className="radial-background-2">
                <img src={hero} alt="blank"/>
            </div>
        </div>  
        </div>
       
    )
}
