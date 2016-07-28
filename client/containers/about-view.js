import React from 'react'
import Header from './../components/header'

export default class AboutView extends React.Component {
    render() {

        return (
            <div>
                <Header current="About"/>
                <div>
                    This is where information about the website would go.
                </div>
            </div>
        );
    }
}