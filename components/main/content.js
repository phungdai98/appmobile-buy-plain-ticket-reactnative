import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Content} from 'native-base';
class ContentBookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Content>
        <View>
            <Text>Content</Text>
        </View>
      </Content>
    );
  }
}

export default ContentBookTicket;
