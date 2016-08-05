import React from 'react'
import { Link } from 'react-router'

const Header = (props) => {
    const homeClass = props.current == "Home" ? "btn btn-primary" : "btn btn-default"
    const blogClass = props.current == "Blog" ? "btn btn-primary" : "btn btn-default"

    return (
        <div style={{"paddingBottom" : "10px"}}>
            <h2>Nathan Dalal</h2>
            <div className="btn-group" role="group">
                <Link to='/' className={homeClass}>Home</Link>
                <Link to='/blog' className={blogClass}>Blog</Link>
            </div>
        </div>
    )
}

export default Header