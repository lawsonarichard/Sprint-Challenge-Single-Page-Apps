import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard ({ name, image, episode, location, origin, species, status }) {
  return (
    <Card>
    <Image src={image} alt={name}/>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{species} | {status}</span>
      </Card.Meta>
      <Card.Description>
        Location: {location.name}
        Origin: {origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
       Episodes {episode.length}
      </a>
    </Card.Content>
  </Card>
      
          
       


 
    )
}
