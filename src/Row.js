import React, {useState,useEffect} from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url= "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLarge}) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(()=>{
       //if [] runs once when row loads and again doesnt run

       async function fetchData(){
           const request = await axios.get(fetchUrl);
           setMovies(request.data.results);
           return request;
       }
       fetchData();
    },[fetchUrl]);
    console.log(movies);

    const opts={
        height:"390",
        width: "100%",
        playerVars: {
            autoplay:1,
        }
    }

    const handleClick = (movie) => {
        // console.table(movie?.title)
        if (trailerUrl) {
          setTrailerUrl('')
        } else {
          movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
            .then(url => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error));
        }
      }

    return (
        <div className='row'>
        <h2>{title}</h2>
        <div className='rowposters'>
           {movies.map(movie=>(
            <img 
                key={movie.id}
                onClick={()=>handleClick(movie)}
                className={`rowposter ${isLarge && "rowposterlarge"}`}
                src={`${base_url}${isLarge?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
           ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl}  opts={opts} />}
        </div>
    )
}

export default Row
