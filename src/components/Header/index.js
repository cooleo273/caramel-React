import React from 'react'
import "./styles.css"; 
import hero from "../../assets/images/cutie.jpg"
import { withRouter } from 'react-router-dom'

function Header({ history }) {
    return (
        <div className='header'>
           <div className="header-letter">
                <div className="radial-background"></div>
                <h3 className="logo-text">Caramel</h3>
                    
                <p>
                    Bring more leads for your
                    <br/>
                    <span>
                        business fast
                    </span>
                </p>
           </div>
           <div className='header-nav-container'>
                <ul className="menu">
                    <li>Connect</li>
                    <li>Help</li>
                    <li>Blog</li>
                    <li>Support</li>
                    <li onClick={()=>history.push('/login')}>Login</li>
                    <li>SignUp</li>
                </ul>
                <div>
                    <img src={hero} alt="hero" />
                </div>
           </div>

        </div>
    )
}

export default withRouter(Header)