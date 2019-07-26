import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function EpisodesList() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(results => {
          console.log('results', results.data.results)
          setEpisodes(results.data.results)
        })
      // TODO: Add AJAX/API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, [])
  
    return <section className='location-list grid-view'>
  
        {episodes.map(episode => {
          return <EpisodeCard key={episode.id} {...episode} />;
        })}
        
      </section>
  
  }
  