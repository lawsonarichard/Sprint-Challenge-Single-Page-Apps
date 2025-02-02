import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(results => {
          console.log('results', results.data.results)
          setLocations(results.data.results)
        })
      // TODO: Add AJAX/API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, [])
  
    return <section className='location-list grid-view'>
  
        {locations.map(location => {
          return <LocationCard key={location.id} {...location} />;
        })}
        
      </section>
  
  }
  
