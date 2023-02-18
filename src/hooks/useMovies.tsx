import React, { useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface';
import { useState } from 'react';


export const useMovies = () => {
  
    const [isLoading, setIsLoading] = useState(true)
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        const peliculas = resp.data.results;
        setPeliculasEnCine( peliculas );

        setIsLoading(false);
    }

    useEffect(() => {
        // now_playing
        getMovies();
    }, [])
          
  return{
    peliculasEnCine,
    isLoading
  }
}
