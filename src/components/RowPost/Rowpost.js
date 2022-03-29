import React, { useEffect, useState } from "react"
import "./Rowpost.css"
import { API_KEY, imageUrl } from "../../constants/constants"
import axios from "../../Axios"
import YouTube from "react-youtube"
function Rowpost(props) {
	const [movies, setMovies] = useState([])
	const [url, setUrl] = useState("")
	useEffect(async () => {
		try {
			let originals = await axios.get(props.url)
			setMovies(originals.data.results)
			// console.log(originals)
		} catch (e) {
			console.log(e.message)
		}
	}, [])
	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	}
	const handleTrailer = async (id) => {
		try {
			let trailerId = await axios.get(
				`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
			)
			if (trailerId.data.results.length !== 0) {
				setUrl(trailerId.data.results[0])
			}
		} catch (e) {
			console.log(e.message)
		}
	}
	return (
		<div className="movieRow">
			<h2 className="heading">{props.title}</h2>
			<div className="posters">
				{movies.map((movie) => (
					<div>
						<img
							onClick={() => {
								handleTrailer(movie.id)
							}}
							className={props.isSmall ? "smallPoster" : "poster"}
							src={`${imageUrl + movie.backdrop_path}`}
							alt="poster"
						/>
						<p className="movieTitle">
							{movie.title ? movie.title : movie.name}
						</p>
					</div>
				))}
			</div>
			{url && <YouTube opts={opts} videoId={url.key} />}
		</div>
	)
}

export default Rowpost
