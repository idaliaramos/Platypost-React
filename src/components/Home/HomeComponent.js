import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment
} from 'semantic-ui-react';

import NavComponent from '../nav/NavComponent';
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'home'
    };
  }

  render() {
    return (
      <div>
        <NavComponent {...this.props} />
        <Segment
          // inverted
          textAlign="center"
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical>
          <Container text>
            <Header
              as="h1"
              content="Send postcards of your adventures, tell your story."
              // inverted
              style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em'
              }}
            />
            <Header
              as="h2"
              // inverted
              style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
            <Button color="purple" size="huge">
              <NavLink color="white" exact to="/send">
                Send my postcard!
              </NavLink>
              <Icon name="right arrow" />
            </Button>
          </Container>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Receive Mail Notifications
                </Header>
                <p style={{ fontSize: '1.33em' }}>Send Unique Postcards.</p>
                <Image
                  src="https://preview.ibb.co/eTxrPm/hotsprings2.jpg"
                  alt="hotsprings2"
                />
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  We handle the making, posting, and sending of your postcard,
                  that way you get to share and enjoy your trip!
                </Header>

                {/* <p style={{ fontSize: '1.33em' }}>
                  We handle the envelope, postage, delivery, all included in the
                  price. No hidden fees.
                </p> */}
                <Image
                  src="https://preview.ibb.co/iM9PAR/hotsprings.png"
                  alt="hotsprings"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Time is money.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              No more spending time finding post offices during your vacation.
              We hadle the making, posting and sending of your postcard, that +
              way you get to share and enjoy your trip!
            </p>
            {/* <Button as="a" size="large">
              Read More
            </Button> */}
            {/* <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
              <a href="#">Case Studies</a>
            </Divider> */}
            {/* <Header as="h3" style={{ fontSize: '2em' }}>
              Keep a
            </Header> */}
            {/* <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as
              non-sequitur filler content, but it's really true. It took years
              of gene splicing and combinatory DNA research, but our bananas can
              really dance.
            </p> */}
            {/* <Button as="a" size="large">
              I'm Still Quite Interested
            </Button> */}
          </Container>
        </Segment>
        <Segment
          // inverted
          vertical
          style={{ padding: '5em 0em' }}>
          {/* <Container>
            <Grid
              divided
              // inverted
              stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header
                    // inverted
                    as="h4"
                    content="About"
                  />
                  <List link>
                    // inverted
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header

                    as="h4"
                    content="Services"
                  />
                  <List link>
                    <List.Item as="a">Banana Pre-Order</List.Item>
                    <List.Item as="a">DNA FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4">Footer Header</Header>
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container> */}
        </Segment>
      </div>
    );
  }
}
//TODO: add more content
