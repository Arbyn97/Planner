import React from "react";
import '../cssFile.css'
import{ v1 as UUID }  from "uuid"
const IMG_API = "https://image.tmdb.org/t/p/w1280"

const hndleclick=(event)=>{
    
   alert("selected");
   event.preventDefault();
}

const Movie = ( { title, poster_path, vote_average } ) => (
    <React.Fragment>
   
   <div className="movie" onClick={(e)=>hndleclick(e)}>
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
    
    </div>
    </React.Fragment>
);

export default Movie;