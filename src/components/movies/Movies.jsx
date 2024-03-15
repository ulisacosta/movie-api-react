import React, { useEffect, useState } from "react";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const URL_IMG = 'https://image.tmdb.org/t/p/w1280'

    async function getMovie() {
 try {
      const response =  await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
           {
               method: "GET",
               headers:{
                   accept:"application/json",
                   authorization:
                   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2VjYzBhZTJjYzk2NjFiNTcwZDIxYmUyMDllZGMzYyIsInN1YiI6IjY1MzE4ZmViNmY4ZDk1MDBjOTI4NDNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvy1GyCxtI41oOWQyEjtAnvJItJau8QI84MNFYV52Tc"
           },
           })
           const data = await response.json()
         
           setMovies(data.results)
         
           }

           catch(err) { console.error(err) } 
       }
       
       
       // useEffect para llamar a getMovie() cuando el componente se monta
  useEffect(() => {
    getMovie();
  }, []); 

  function floorToTwoDecimals(value) {
    return Math.floor(value * 100) / 100;
  }

    return (
    <div className="">


      <div className="w-full flex justify-center items-center">

    <div className="font-semibold text-2xl bg-orange-600 w-auto rounded-xl p-3 text-white">Movies</div>
      </div>
    <div className="grid grid-cols-auto gap-10 p-10 rounded-xl md:grid-cols-2  lg:grid-cols-3">
    {movies.map((movie) => (
  <div className="h-auto w-autos bg-orange-600 rounded-2xl p-5">
            <img src={URL_IMG + movie.poster_path}></img>
          <li key={movie.id} className="text-white font-semibold text-lg list-none">{movie.title}</li>
          <p className="font-semibold text-white ">Valoración: {floorToTwoDecimals(movie.vote_average)} </p> 
  </div>
         
        ))}
    </div>

    
    </div>
  )
}
