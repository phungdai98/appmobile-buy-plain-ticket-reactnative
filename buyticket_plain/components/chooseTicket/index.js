import React, { Component } from 'react';
import { Icon } from 'native-base';
import callApi from './../../util/apiCaller';
import { GETPLANE } from './../../constain/config';
import { ActivityIndicator, Alert, StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native';
const imageUrlLogo = {
  uri: 'https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/ht6n5o1jcyl4vurt0skc',
};
class ChooseTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTicket: [],
      test: [],
    };
  }
  async componentDidMount() {
    let { airportFrom, airportTo, dateFrom, dateTo, stylePlane, countAdult } = this.props.route.params;
    let temp1 = dateFrom.split('-');
    let dateFromAPI = temp1[0] + '' + temp1[1] + temp1[2];
    let urlPlane = GETPLANE + '/' + dateFromAPI + '/' + airportFrom + '/' + airportTo;
    await callApi('GET', urlPlane, null).then((res) => {
      //console.log(res);
      this.setState({
        listTicket: res.data,
      });
    });
    //Alert.alert(""+JSON.stringify(test));
  }
  inputInfor=(chuyenbay)=>{
    this.props.navigation.navigate('Inforcustomer',{
      chuyenbay
    });
  }
  Item = ({ item }) => {
    return (
      <View style={styles.viewListTicket}>
        <View style={styles.childrenViewListTicket}>
          <Image style={styles.sizeLogo} source={imageUrlLogo}></Image>
          <View
            style={{
              position: 'absolute',
              width: 60,
              height: 20,
              borderWidth: 1,
              borderColor: '#013ADF',
              alignItems: 'center',
              alignContent: 'center',
              right: 5,
              top: 5,
            }}>
            <Text
              style={{
                color: 'grey',
                fontSize: 12,
              }}>
              {item.MaChuyenBay}
            </Text>
          </View>
          <View style={styles.addressFrom}>
            <View
              style={{
                width: 40,
                height: 20,
                backgroundColor: '#013ADF',
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: 3,
              }}>
              <Text style={{ color: 'white' }}>{item.MaSanBay}</Text>
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                color: '#A4A4A4',
              }}>
              {item.ThanhPho}
            </Text>
            <Text
              style={{
                paddingLeft: 185,
                color: 'grey',
              }}>
              {item.ThoiGianDiDuKien}
            </Text>
          </View>
          <View style={styles.addressFrom}>
            <Icon
              style={{
                color: 'grey',
                paddingLeft: 10,
                fontSize: 20,
              }}
              name="md-jet"
            />
            <Text
              style={{
                color: 'grey',
                paddingLeft: 20,
              }}>
              Bay thẳng
            </Text>
          </View>
          <View style={styles.addressFrom}>
            <View
              style={{
                width: 40,
                height: 20,
                backgroundColor: '#013ADF',
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: 3,
              }}>
              <Text style={{ color: 'white' }}>{item.MaSanBayDen}</Text>
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                color: '#A4A4A4',
              }}>
              {item.ThanhPhoDen}
            </Text>
            <Text
              style={{
                paddingLeft: 150,
                color: 'grey',
              }}>
              {item.ThoiGianDenDuKien}
            </Text>
          </View>
          <View style={styles.priceTicket}>
            <Text
              style={{
                color: '#A4A4A4',
              }}>
              Giá
            </Text>
            <Text
              style={{
                paddingLeft: '70%',
                fontWeight: 'bold',
                color: 'black',
              }}
              onPress={()=>this.inputInfor(item)}
              >
              {item.GiaVe}
              <Text>đ</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    let { stylePlane } = this.props.route.params;
    //console.log("hht là:",stylePlane);
    return (
      <>
        {this.state.listTicket.length <= 0 ? (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <>
            <View style={{ margin: 5, alignContent: 'center', alignItems: 'center' }}></View>
            <FlatList
              data={this.state.listTicket}
              renderItem={({ item }) => <this.Item item={item} />}
              keyExtractor={(item) => item.id}></FlatList>
          </>
        )}
      </>
    );
  }
}
const styles = StyleSheet.create({
  viewListTicket: {
    width: '95%',
    height: 180,
    backgroundColor: 'white',
    margin: 10,
  },
  childrenViewListTicket: {
    margin: 5,
    position: 'relative',
  },
  addressFrom: {
    flexDirection: 'row',
    marginTop: 10,
  },
  priceTicket: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderTopWidth: 1,
    borderColor: '#BDBDBD',
    marginTop: 15,
    paddingTop: 12,
  },
  sizeLogo: {
    width: 150,
    height: 30,
  },
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

export default ChooseTicket;
