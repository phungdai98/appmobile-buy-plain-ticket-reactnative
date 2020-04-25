import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Header} from 'native-base'
class HeaderBookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Header>
        <View>
            <Text>Phung Van Dai</Text>
        </View>
      </Header>
    );
  }
}

export default HeaderBookTicket;
