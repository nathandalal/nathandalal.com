import React from 'react'
import Header from './header'

const BlogPost = (props) =>  {
    return (
        <div>{props.markup.text}</div>
    )
}

export default BlogPost