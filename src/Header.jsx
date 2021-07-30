import React from 'react'
import './Header.css'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <svg width="223" height="227" viewBox="0 0 223 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M55.5648 130.5L98 57L140.435 130.5H55.5648Z" stroke="black" />
                    <path d="M76 16.5362L99 57.0363L46.5 145.905L5.27031e-07 145.905L76 16.5362Z" fill="black" />
                    <path d="M32.2867 170.478L55.3777 130.03L158.595 129.825L182.326 169.813L32.2867 170.478Z" fill="black" />
                    <path d="M186.729 130.214L140.154 130.063L89.0927 40.36L112.186 -1.36387e-05L186.729 130.214Z" fill="black" />
                    <line x1="89.4287" y1="39.2572" x2="35.4287" y2="129.257" stroke="white" />
                    <line x1="35" y1="129.5" x2="57" y2="129.5" stroke="white" />
                    <line x1="45.0048" y1="146.5" x2="150" y2="147.5" stroke="white" />
                    <line x1="138.427" y1="128.739" x2="149.899" y2="147.511" stroke="white" />
                    <line x1="160.567" y1="132.251" x2="107.918" y2="41.4045" stroke="white" />
                    <line x1="108.437" y1="41.2428" x2="97.7522" y2="60.4739" stroke="white" />
                </svg>
                <div id="nav-ul">
                    <ul id="header-nav-ul">
                        <li><Button><NavLink style={{ textTransform: "none", fontWeight: "bold" }} exact className="nav-link" activeClassName="" to="intergations" >Integrations</NavLink></Button></li>
                        <li><Button><NavLink style={{ textTransform: "none", fontWeight: "bold" }} exact className="nav-link" activeClassName="" to="pricing" >Pricing</NavLink></Button></li>
                        <li><Button><NavLink style={{ textTransform: "none", fontWeight: "bold" }} exact className="nav-link" activeClassName="" to="blog" >Blog</NavLink></Button></li>
                        <li><Button><NavLink style={{ textTransform: "none", fontWeight: "bold" }} exact className="nav-link" activeClassName="" to="about" >About Us</NavLink></Button></li>
                    </ul>
                </div>
            </nav>
            <div id="hamburger">
                <div id="line-0" ></div>
                <div id="line-1" ></div>
                <div id="line-2" ></div>
            </div>
            <Button id="get-started-btn"><NavLink style={{ padding: "5px", color: "#2039ce" }} exact to="getstarted"> Get Early Access</NavLink></Button>
        </header>
    )
}

export default Header
