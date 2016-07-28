import React from 'react'
import { Link } from 'react-router'

const Header = (props) => {
    const homeClass = props.current == "Home" ? "btn btn-primary" : "btn btn-default"
    const aboutClass = props.current == "About" ? "btn btn-primary" : "btn btn-default"

    return (
        <div style={{"paddingBottom" : "10px"}}>
            <h2>Site Header</h2>
            <div className="btn-group" role="group">
                <Link to='/' className={homeClass}>Home</Link>
                <Link to='/about' className={aboutClass}>About</Link>
            </div>
        </div>
    )
}

export default Header