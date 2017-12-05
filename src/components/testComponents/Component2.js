import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const Component2 = () =>
  <Card>
    <Image src="/assets/images/avatar/large/matthew.png" />
    <Card.Content>
      <Card.Header>Katy</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Katie is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons" onClick={_changetoStep3}>
        <Button basic color="green">
          Next
        </Button>
      </div>
    </Card.Content>
  </Card>;

export default Component2;
