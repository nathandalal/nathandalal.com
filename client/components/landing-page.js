import React from 'react'
import './landing-page.scss'

const FactList = ({header, items}) => (
	<ul className="factlist col-md-4">
		<h3>{header}</h3>
		{items.map(event => (
			<li key={JSON.stringify(event)} className="row">
				<div className="col-xs-5">{event.what}</div> 
				{event.where ? <div className="col-xs-1">@</div> : ""}
				{event.where ? <div className="col-xs-5" style={{textAlign: 'left'}}><a href={event.link}>{event.where}</a></div> : ""}
			</li>
		))}
	</ul>
)

let renderLinks = () => {
	let links = [
		{type: 'linkedin', url: "https://linkedin.com/in/nathandalal"},
		{type: 'github', url: "https://github.com/nathandalal"},
		{type: 'resume', url: "/assets/resume.pdf"},
		{type: 'medium', url: "https://medium.com/@nathanhdalal"},
		{type: 'twitter', url: "https://twitter.com/nathanhdalal"}
	]
	return (
		<div className="links row">
			<div className="spacer hidden-sm-down col-md-3 col-lg-3" />
			{links.map(link => (
			<div key={link.type} className={link.type == "resume" ? "col-xs-4 col-sm-4 col-md-2 col-lg-2" : "col-xs-2 col-sm-2 col-md-1 col-lg-1"}>
				<h6 className="link-header">{link.type}</h6>
				<a href={link.url}>
					<img 
						width={link.type == "resume" ? "60px" : "40px"}
						height={link.type == "resume" ? "60px" : "40px"}
						src={`/images/links/${link.type}.png`} />
				</a>
			</div>
			))}
			<div className="spacer hidden-sm-down col-md-3 col-lg-3" />
		</div>
	)
}

const LandingPage = (props) => (
    <div className="landing-page-wrapper row">
        <div className="col-sm-1"></div>
        <div className="centered-box col-sm-10">
        	<h1>Nathan Dalal</h1>
        	Learning how to teach, and teaching myself how to learn.
        	<hr />
        	<div className="vert-spacer" />
        	<h6>currrently automation @ gigster and stanford '19</h6>
        	<div className="row">
        		<FactList
        			header="<code />" 
        			items={[
        				{what: "automation", where: "Gigster", link: "https://gigster.com"},
        				{what: "software", where: "Stanford Canary Center", link: "http://canarycenter.stanford.edu"},
        				{what:"gene research", where: "SIMR", link: "http://simr.stanford.edu"}
        			]}
        			leftJustified />
        		<FactList 
        			header="education"
        			items={[
        				{what: "observer", where: "Education Technology", link: "https://medium.com/the-silicon-classroom"},
        				{what: "student", where: "Stanford '19", link: "http://stanford.edu"},
        				{what: "student", where: "The Harker School '15", link: "http://harker.org"}
        			]} />
        		<FactList 
        			header="fun"
        			items={[
        				{what: "singer, arranger", where: "Stanford Raagapella", link: "http://raagapella.com"},
        				{what: "organizer", where: "Stanford Sanskriti", link: "http://sanskriti.stanford.edu"},
        				{what: "mega-fan", where: "Golden State Warriors", link: "http://bit.do/warriors_theme"}
        			]} />
        	</div>
        	<hr />
        	{renderLinks()}
        	<hr />
        	<div><a href="mailto:nathanhdalal@gmail.com">nathanhdalal@gmail.com</a></div>
        </div>
        <div className="col-sm-1"></div>
    </div>
)

export default LandingPage