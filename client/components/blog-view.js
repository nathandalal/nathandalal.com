import React, { Component } from 'react'

import Spinner from 'react-spinkit'

export default class BlogView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
    	let list = this.props.list
        return (
            <div>
                {list ? 
                <BlogPost markup={this.props.BlogPostList} /> :
                <Spinner spinnerName='double-bounce' />}
            </div>
        );
    }
}