import React from 'react'
import hero from "../../assets/images/Capture.JPG";
import "./styles.css"
export default function Inbox() {
    return (
        <div>
            <div className="inbox-container">
                <div className="inbox-image">
                    <img src={hero} alt="blank"/>
                </div>
                <div className="inbox-text">
                    <h2>
                        <span className="phrase-1">Fits everything on</span><br />
                        <span className="phrase-2">all your devices.</span>
                    </h2>
                    <h4>
                        Faster development ui kits 
                    </h4>
                    <p>
                        " With lots of unique blocks,
                        you can easily build a page with out coding."
                    </p>
                    <h4>
                         Premade pages easy set up
                    </h4>
                    <p>
                        With lots of unit blocks, you can easily build a
                        page with out coding. Build your next landing page Quickly.                        
                    </p>
                </div>
            </div>
        </div>
    )
}
