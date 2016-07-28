import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from './../components/header'
import { getText } from './../actions/index'

class HomeView extends React.Component {
    renderText() {
        if(!(this.props.text)) this.props.getText()
        return <div>{this.props.text}</div>
    }

    render() {
        return (
            <div>
                <Header current="Home"/>
                {this.renderText()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { text: state.TextReducer }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { getText: getText }
        , dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeView)