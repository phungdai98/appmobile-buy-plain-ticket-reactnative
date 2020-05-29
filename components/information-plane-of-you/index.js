import React, { Component } from 'react';
import { View, Text,ActivityIndicator,StyleSheet } from 'react-native';
import callApi from './../../util/apiCaller'
import {GETTICKETWITHIDVE} from './../../constain/config';
class InformationPlane extends Component {
  constructor(props) {
    super(props);
    this.state = {
        infomation:{}
    };
  }
async componentDidMount(){
    let {maDatCho,email}=this.props.route.params;
    let url=GETTICKETWITHIDVE+"?mave="+maDatCho;
    callApi('GET',url,null).then(res=>{
        this.setState({
            infomation:res.data
        },()=>console.log(this.state.infomation))
    })
}
  render() {
      let {infomation}=this.state;
    return (
        <View>
      <Text> Đây là tông tin cb của bạn </Text>
    </View>
      
    );
  }
}
const styles=StyleSheet.create({
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
})
export default InformationPlane;
