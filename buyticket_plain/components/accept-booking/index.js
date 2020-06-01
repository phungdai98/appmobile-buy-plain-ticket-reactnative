import React, { Component } from 'react';
import { View, Text, TextInput,StyleSheet,TouchableHighlight } from 'react-native';

class AcceptBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
        maxacnhan:""
    };
  }

  render() {
    return (
      <View style={{margin:15}}>
        <Text>Nhập mã xác nhận đã được gửi đên mail của bạn</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginTop:20 }} onChangeText={(maxn)=>this.setState({
            maxacnhan:maxn
        })} />
        <View style={{ marginTop: 50 }}>
          <TouchableHighlight style={styles.submit} underlayColor="#fff">
            <Text style={styles.submitText}>Xác nhận</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    submit: {
      width: '100%',
    },
    submitText: {
      paddingTop: 8,
      paddingBottom: 8,
      color: '#fff',
      textAlign: 'center',
      backgroundColor: '#68a0cf',
      borderRadius: 7,
      borderWidth: 1,
      borderColor: '#013ADF',
      backgroundColor: '#013ADF',
    },
  });
export default AcceptBooking;
