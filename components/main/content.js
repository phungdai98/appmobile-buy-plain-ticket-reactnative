import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import {Content} from 'native-base';
import ImageCarosel from './imageCarosel';
const images=[
  "https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg",
  "https://image.freepik.com/free-photo/indian-masala-egg-omelet_136595-191.jpg",
  "https://image.freepik.com/free-photo/north-indian-thali-tipical-meal-served-stainless-steel-plate-blue-table_107467-1331.jpg",
  "https://image.freepik.com/free-photo/national-uzbek-pilaf-with-meat-cast-iron-skillet-wooden-table_127425-8.jpg"
]
class ContentBookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Content style={styles.container}>
        <View style={styles.viewLogo}>
            <Image
            style={styles.logoVN}
            source={{
              uri:'https://seekvectorlogo.com/wp-content/uploads/2018/05/vietnam-airlines-vector-logo.png'
            }}
            />
        </View>
        <ImageCarosel images={images}/>
      </Content>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    marginLeft:10,
    marginRight:10
  },
   viewLogo:{
     width:'100%',
     height:30,
     alignItems:'center',
     alignSelf:'center',
     marginBottom:10
   },
   logoVN:{
     width:'70%',
     height:30,
     
   }
})
export default ContentBookTicket;
