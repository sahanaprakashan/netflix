import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../axios/axios'
import {API_KEY , imageUrl } from '../../constants/constants'
function Banner() {
    useEffect(() => {
        getTredingMovie()
        
    }, [])

    const [movie, setMovie] = useState({})
    
   const getTredingMovie = () =>{ 

      axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then(response=>{ 
      if(response?.data?.results[0]){ 
         const movieObj = {
             movieName: response.data.results[0].name,
             description : response.data.results[0].overview,
             image:  response.data.results[0].backdrop_path,
         } 

         setMovie(movieObj) 
      }else{
        setMovie({})
      }

      })
       
   }

    return (
        <div className="banner" style={{ backgroundImage:  `url(${imageUrl+movie?.image})`}} >
            <div className="content" >
                <h1 className="title" >{movie?.movieName}</h1>
                <div className="bannerbuttons" >
                    <button className="button" >play</button>
                    <button className="button" >my list</button>
                </div>
                <h1 className='discription' >{movie?.description} </h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
