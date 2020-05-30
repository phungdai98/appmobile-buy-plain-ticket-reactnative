import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableHighlight } from 'react-native';
import { Content } from 'native-base';
import ImageCarosel from './imageCarosel';
import ImageCaroselBottom from './imageCaroselBottom';
const images = [
  "https://znews-photo.zadn.vn/w660/Uploaded/cqxrcajwp/2014_06_29/1.jpg",
  "https://poliva.vn/wp-content/uploads/2018/08/ho-guom-ha-noi.jpg",
  "https://data.voh.com.vn//uploads/Image/2016/06/14/193240kinhte140616.jpg",
  "https://znews-photo.zadn.vn/w660/Uploaded/cqxrcajwp/2014_06_29/1.jpg",
];
class ContentBookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content style={styles.container}>
        <View style={styles.viewLogo}>
          <Image
            style={styles.logoVN}
            source={{
              uri: 'https://seekvectorlogo.com/wp-content/uploads/2018/05/vietnam-airlines-vector-logo.png',
            }}
          />
        </View>
        <ImageCarosel images={images} />
        <View style={styles.viewbtnBookTicket}>
          <TouchableHighlight style={styles.submit} onPress={() => this.props.navigation.navigate('BookTicket')} underlayColor="#fff">
            <Text style={styles.submitText}>Đặt chuyến bay</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.viewbtnBookTicket}>
          <TouchableHighlight style={styles.submit} onPress={() => this.props.navigation.navigate('BookTicket')} underlayColor="#fff">
            <Text style={styles.submitText}>Đăng nhập/Đăng kí</Text>
          </TouchableHighlight>
        </View>
        <ImageCaroselBottom images={images} />
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  viewLogo: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  logoVN: {
    width: '70%',
    height: 30,
  },
  viewbtnBookTicket: {
    marginTop: 15,
  },
  submit: {
    width: '100%',
  },
  submitText: {
    paddingTop: 11,
    paddingBottom: 11,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#013ADF',
    backgroundColor: '#013ADF',
  },
});
export default ContentBookTicket;
