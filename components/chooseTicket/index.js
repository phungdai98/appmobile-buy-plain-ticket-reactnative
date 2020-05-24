import React, { Component } from 'react';
import { Icon } from 'native-base';
import callApi from './../../util/apiCaller';
import { ActivityIndicator,Alert, StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native';
const imageUrlLogo = {
  uri: 'https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/ht6n5o1jcyl4vurt0skc',
};
class ChooseTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTicket: [
        {
          id: '0',
          idAirportFrom: 'SGN',
          nameFrom: 'Hồ Chí Minh',
          idChuyenBay: 'VN-236',
          timeStart: '05:00',
          idAirportTo: 'HN',
          nameTo: 'Hà Nội',
          timeEnd: '07:05',
          price: '3600000',
        },
        {
          id: '1',
          idAirportFrom: 'SGN',
          nameFrom: 'Hồ Chí Minh',
          idChuyenBay: 'VN-237',
          timeStart: '06:00',
          idAirportTo: 'HN',
          nameTo: 'Hà Nội',
          timeEnd: '08:05',
          price: '3600000',
        },
        {
          id: '2',
          idAirportFrom: 'SGN',
          nameFrom: 'Hồ Chí Minh',
          idChuyenBay: 'VN-238',
          timeStart: '07:00',
          idAirportTo: 'HN',
          nameTo: 'Hà Nội',
          timeEnd: '09:05',
          price: '3600000',
        },
      ],
      test:[]
    };
  }
  async componentDidMount()
  {
    let {
      airportFrom,
    airportTo,
    dateFrom,
    dateTo,
    stylePlane,
    countAdult,
    
    }=this.props.route.params;
    await callApi('GET','http://datvemaybay.somee.com/api/chuyen-bay/get-by-query?ngayDi=17042020&diemDi=HAN&diemDen=VII',null).then(res=>{
      this.setState({
        test:res.data
      },()=>console.log(this.state.test))
    })
    //Alert.alert(""+JSON.stringify(test));
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
              {item.idChuyenBay}
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
              <Text style={{ color: 'white' }}>{item.idAirportFrom}</Text>
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                color: '#A4A4A4',
              }}>
              {item.nameFrom}
            </Text>
            <Text
              style={{
                paddingLeft: 165,
                color: 'grey',
              }}>
              {item.timeStart}
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
              <Text style={{ color: 'white' }}>{item.idAirportTo}</Text>
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                color: '#A4A4A4',
              }}>
              {item.nameTo}
            </Text>
            <Text
              style={{
                paddingLeft: 202,
                color: 'grey',
              }}>
              {item.timeEnd}
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
              }}>
              {item.price}
              <Text>đ</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    
    return (
      <>
        {this.state.test.length <= 0 ? (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <ScrollView>
          <View style={{margin:5,alignContent:'center',alignItems:'center'}}><Text>Danh sách chuyến bay</Text></View>
            <FlatList
              data={this.state.listTicket}
              renderItem={({ item }) => <this.Item item={item} />}
              keyExtractor={(item) => item.id}></FlatList>
          </ScrollView>
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
    borderColor: 'grey',
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
