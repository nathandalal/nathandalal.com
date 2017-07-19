import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import Tabs from './content/tabs.jsx'
import NathanCard from './content/nathan_card.jsx'
import Card from './content/card.jsx'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { routes, location, misc } = this.props
    console.log(this.props)
    return (
      <div>
        <NathanCard {...misc} />
        <hr />
        <Tabs routes={routes} location={location} />
        {routes.map(route => route.path).includes(location.pathname) ? this.renderListViewer() : this.renderNotFound()}
        <Tabs routes={routes} location={location} />
      </div>
    )
  }

  renderListViewer() {
    let { list, location } = this.props

    let topic = location.pathname.substr(1)
    let sublist = list.filter(card => topic ? card.Type == topic : card.Current)

    return <div style={{paddingBottom: "20px"}}>{sublist.map(element => <Card key={element.Affiliation} {...element}/>)}</div>
  }

  renderNotFound() {
    return (
      <div className="content">
        <h6>Hey, that page you're looking for doesn't really exist.</h6>
        <h6>You should be redirected shortly!</h6>
        <Link className="button is-info is-outlined" to="/">Return to Nathan's Website</Link>
        <Redirect to="/"/>
      </div>
    )
  }
}