import React from "react"
import "./Navbar.css"

function Navbar() {
	return (
		<nav className="navbar sticky-top navbar-dark bg-dark bg-light justify-content-between d-flex">
			<a className="navbar-brand px-5" href="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
					width="120"
					height="30"
					alt=""
				/>
			</a>
			<a className="navbar-brand px-5" href="/">
				<img
					src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
					width="40"
					height="40"
					alt=""
				/>
			</a>
		</nav>
	)
}

export default Navbar