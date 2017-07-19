import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          Designed by <strong>Nathan</strong> with the help of <a href="https://facebook.github.io/react/">React</a> and <a href="http://bulma.io/">Bulma</a>.</p>
        <p>If you're bored, check out the <a href="/api">API for this website</a>.</p>
        <div className="columns is-mobile">
          <div className="is-offset-4 is-1 column">
            <a className="icon" href="https://github.com/nathandalal">
              <i className="fa fa-github"/>
            </a>
          </div>
          <div className="is-2 column">
            <a className="icon" href="/assets/resume.pdf">
              <i className="fa fa-id-card"/>
            </a>
          </div>
          <div className="is-1 column">
            <a className="icon" href="https://linkedin.com/in/nathandalal">
              <i className="fa fa-linkedin"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer