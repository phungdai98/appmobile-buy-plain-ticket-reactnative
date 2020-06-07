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
    let params = {
      maDatCho: maDatCho,
    };
    callApi('POST', GETTICKETWITHIDVE, params).then((res) => {
      this.setState({
        infomation: res.data,
      });
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
          <View style={{ margin: 15 }}>
            <Text>
              Họ và tên : {infomation[0].Ho} {infomation[0].Ten}
            </Text>
            <Text>Chuyến bay : {infomation[0].chuyenbay_MaChuyenBay}</Text>
            <Text>Từ : {infomation[0].ThanhPho}</Text>
            <Text>Đến : {infomation[0].ThanhPhoDen}</Text>
            <Text>Ngày đi : {infomation[0].NgayDi}</Text>
            <Text>Số ghế : {infomation[0].SoGhe}</Text>
            <Text>Giờ khởi hành : {infomation[0].ThoiGianDiDuKien}</Text>
            <Text>Quý khách vui lòng có mặt tại sân bay trước giờ khởi hành 2 tiếng để làm các thủ tục cần thiết</Text>
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
