import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import callApi from '../../util/apiCaller';
import { BOOKED } from './../../constain/config';
class AcceptBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxacnhan: '',
    };
  }
  componentDidMount() {
    let { inforBooking } = this.props.route.params;
    //console.log('Thông tin xác nhận', inforBooking);
  }
  onBooked = async () => {
    let { inforBooking } = this.props.route.params;
    let params = {
      macb: inforBooking.macb,
      cmnd: inforBooking.cmnd,
      ho: inforBooking.ho,
      ten: inforBooking.ten,
      sdt: inforBooking.sdt,
      gioitinh: inforBooking.gender,
      email: inforBooking.email,
      maxacnhan: this.state.maxacnhan,
    };
    console.log(params);
    await callApi('POST', BOOKED, params).then((res) => {
      console.log("trạng thái",res.data.status);
      //Alert.alert("Đặt vé thành công");
    });
  };
  render() {
    return (
      <View style={{ margin: 15 }}>
        <Text>Nhập mã xác nhận đã được gửi đên mail của bạn</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
          onChangeText={(maxn) =>
            this.setState({
              maxacnhan: maxn,
            })
          }
        />
        <View style={{ marginTop: 50 }}>
          <TouchableHighlight style={styles.submit} underlayColor="#fff" onPress={this.onBooked}>
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
