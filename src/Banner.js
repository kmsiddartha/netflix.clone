import React, { useState,useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css'

function Banner() {
    const [movie,setMovie]=useState([]);

    useEffect(()=>{

        async function fetchdata(){
            const request=await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length-1)
                ]
            );
            return request;

        }
        fetchdata();

    },[]);

    console.log(movie);

    function truncate(str, max) {
        return str?.length > max ? str.substr(0, max-1) + "...." : str
      } 

    return (
        <header className='banner' 
           style={{
               backgroundSize: "cover",
               backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
               backgroundPosition: "center center",

           }}
        >
          <div className='bannercontents'>
             <h1 className="bannertitle">{movie?.title || movie?.name || movie?.original_name}</h1>
             <div className="buttons">
             <button className="bannerbutton">Play</button>
             <button className="bannerbutton">Mylist</button>
             </div>
             <h1 className='description'>
                 {truncate(movie?.overview,150)}
             </h1>
            
          </div>
          <div className='fade'/>
        </header>
    );
}

export default Banner
