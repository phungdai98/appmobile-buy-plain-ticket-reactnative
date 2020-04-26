import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import MainBookTicket from './main/index';
import BookTicket from './bookticket/index';
const Stack = createStackNavigator();
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainBookTicket}
            options={{
              title: '',
              headerShown:false
            }}
          />
          <Stack.Screen name="BookTicket" component={BookTicket} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Index;
