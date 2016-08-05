import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBlogPostList } from '../actions/index'

import Header from '../components/header'
import BlogPost from '../components/blog-post'

import Spinner from 'react-spinkit'

export default class BlogView extends React.Component {
    constructor(props) {
        super(props)
        this.props.getBlogPostList()
    }

    render() {
        const list = this.props.BlogPostList
        return (
            <div>
                <Header current="Blog"/>
                {list ? 
                <BlogPost markup={this.props.BlogPostList} /> :
                <Spinner spinnerName='double-bounce' />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { BlogPostList: state.BlogPostListReducer }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { getBlogPostList: getBlogPostList }
        , dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogView)