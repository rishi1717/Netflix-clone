import React, { useEffect, useState } from "react"
import "./Rowpost.css"
import { imageUrl } from "../../constants/constants"
import axios from "../../Axios"
function Rowpost(props) {
	const [movies,setMovies]=useState([])
	useEffect(async () => {
		try {
			let originals = await axios.get(
				props.url
			)
			setMovies(originals.data.results)
			// console.log(originals)
		} catch (e) {
			console.log(e.message)
		}
	})
	return (
		<div className="movieRow">
			<h2 className="heading">{props.title}</h2>
			<div className="posters">
				{movies.map((movie) => (
					<img
						className={props.isSmall?"smallPoster":"poster"}
						src={`${imageUrl+movie.backdrop_path}`}
						alt="poster"
					/>
				))}
			</div>
		</div>
	)
}

export default Rowpost
