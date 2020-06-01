import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainBookTicket from './main/index';
import BookTicket from './bookticket/index';
import ChooseTicket from './chooseTicket/index';
import SearchIDPlane from './search-id/index';
import InformationPlane from './information-plane-of-you/index';
import InputInforCustomer from './../components/infor-customer/index';
import AcceptBooking from './../components/accept-booking/index';
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
              headerShown: false,
            }}
          />
          <Stack.Screen name="BookTicket" component={BookTicket} options={{
            title: 'Đặt vé',
            headerTintColor: 'blue',
          }} />
          <Stack.Screen
            name="ChooseTicket"
            component={ChooseTicket}
            options={{
              title: 'Chọn chuyến bay',
              headerTintColor: 'blue',
            }}
          />
          <Stack.Screen
            name="Checkin"
            component={SearchIDPlane}
            options={{
              title: 'Đặt chỗ của tôi',
              headerTintColor: 'blue',
            }}
          />
          <Stack.Screen
            name="InformationPlane"
            component={InformationPlane}
            options={{
              title: 'Thông tin chuyến bay của bạn',
              headerTintColor: 'blue',
            }}
          />
          <Stack.Screen
            name="Inforcustomer"
            component={InputInforCustomer}
            options={{
              title: 'Thông tin hành khách',
              headerTintColor: 'blue',
            }}
          />
          <Stack.Screen
            name="acceptBooking"
            component={AcceptBooking}
            options={{
              title: 'Xác nhận đặt vé',
              headerTintColor: 'blue',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Index;
