import React from 'react'

const NathanCard = ({ isSmall = false, Status = "Stanford '19", Location = "Fremont, CA", Description = "Learning how to teach and teaching myself how to learn." }) => (
  <div className="columns">
    <div className={`column is-offset-4-desktop is-4-desktop is-offset-3-tablet is-6-tablet is-offset-1-mobile is-10-mobile`}>
      <div className="card container">
        <div className="card-image">
          <figure className="image is-128by128">
            <img src="/images/nathan.jpeg" alt="Nathan Dalal" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                Nathan Dalal
              </p>
              <p className="subtitle is-6">
                <span className="icon">
                  <i className="fa fa-briefcase"/>
                </span>
                <span style={{paddingLeft: "5px"}}>{Status}</span>
                <br />
                <span className="icon">
                  <i className="fa fa-map-marker"/>
                </span>
                <span style={{paddingLeft: "5px"}}>{Location}</span>
              </p>
            </div>
          </div>

          <div className="content">
            <h6>{Description}</h6>
            <h5 style={{marginBottom: 0}}>
              <small><a href="https://nathandalal.sarahah.com">Send me anonymous feedback!</a></small>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NathanCard