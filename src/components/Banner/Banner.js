import React, { useEffect, useState } from "react"
import "./Banner.css"
import { API_KEY,imageUrl } from "../../constants/constants"
import axios from "../../Axios"

function Banner() {
	const [movie, setMovie] = useState([])

	useEffect(async () => {
		try {
			let trending = await axios.get(
				`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
			)
            // console.log(trending.data.results[0])
			setMovie(trending.data.results[4])
		} catch (e) {
			console.log(e)
		}
	}, [])
	return (
		<div className="backimage" style={{backgroundImage: `url( ${imageUrl+movie.backdrop_path})`}}>
			<div className="content">
				<div className="title">{movie.title}</div>
				<div className="banner-btn">
					<button className="button">Play</button>
					<button className="button">My List</button>
				</div>
				<div className="description">
					<p>{movie.overview}</p>
				</div>
			</div>
			<div className="fade-bottom"></div>
		</div>
	)
}

export default Banner
