import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import callApi from './../../util/apiCaller';
import { GETTICKETWITHIDVE } from './../../constain/config';
class InformationPlane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infomation: {},
    };
  }
  async componentDidMount() {
    let { maDatCho, email } = this.props.route.params;
    let url = GETTICKETWITHIDVE + '?mave=' + maDatCho;
    callApi('GET', url, null).then((res) => {
      this.setState(
        {
          infomation: res.data,
        },
        () => console.log(this.state.infomation),
      );
    });
  }
  render() {
    let { infomation } = this.state;
    return (
      <>
        {Object.keys(infomation).length <= 0 ? (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <View style={{margin:15}}>
            <Text>Họ và tên  : {infomation.hoadon.khachhang.ho} {infomation.hoadon.khachhang.ten}</Text>
            <Text>Chuyến bay : {infomation.chuyenbay.macb}</Text>
            <Text>Ngày đi    : {infomation.chuyenbay.ngayden}-{infomation.chuyenbay.thangden.length===2?infomation.chuyenbay.thangden:"0"+infomation.chuyenbay.thangden}-{infomation.chuyenbay.namden}</Text>
            <Text>Số ghế : {infomation.soghe}</Text>
          </View>
        )}
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default InformationPlane;
