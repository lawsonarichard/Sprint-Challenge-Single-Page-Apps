import React from 'react'
import { Card, Image, Icon} from 'semantic-ui-react';

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
    <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{type} | {dimension}</Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
    </Card>

    </Card.Group>
  
  )
}
