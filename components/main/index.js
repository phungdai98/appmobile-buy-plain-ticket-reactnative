import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container} from 'native-base';
import FooterBookTicket from './footer';
import ContentBookTicket from './content';
class MainBookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <ContentBookTicket />
        <FooterBookTicket navigation={this.props.navigation}/>
      </Container>
    );
  }
}

export default MainBookTicket;
