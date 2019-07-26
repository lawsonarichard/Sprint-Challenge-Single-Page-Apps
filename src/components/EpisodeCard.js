import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';

export default function EpisodeCard ({ name, air_date, episode, characters }) {
  return (
    <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{air_date}</span>
      </Card.Meta>
      <Card.Description>
        Characters: {characters}
      </Card.Description>
    </Card.Content>
  </Card>
          )
        }
        
          
       