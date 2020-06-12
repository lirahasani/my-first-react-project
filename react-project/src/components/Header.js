import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header(){
    return (
        <nav className="nav-wrapper teal lighten-3">
            <div className="container">
                <a className="brand-logo">HABITS</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header