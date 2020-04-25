import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container} from 'native-base';
import FooterBookTicket from './footer';
import HeaderBookTicket from './header';
import ContentBookTicket from './content';
class MainBookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <HeaderBookTicket />
        <ContentBookTicket />
        <FooterBookTicket />
      </Container>
    );
  }
}

export default MainBookTicket;
