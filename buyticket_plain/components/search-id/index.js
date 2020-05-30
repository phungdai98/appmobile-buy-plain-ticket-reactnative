import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

class SearchIDPlane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maDatCho:'',
      email:''
    };
  }
  onSearchMaDatCho=()=>{
    let {maDatCho,email}=this.state;
    this.props.navigation.navigate('InformationPlane',{
      maDatCho,
      email
    })
  }
  render() {
    return (
      <View>
        <View style={{ margin: 15 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22,color:'#0040FF' }}>Mở đặt chỗ của quý khách</Text>
        </View>
        <View style={{ margin: 15 }}>
          <Text style={{color:'#0040FF'}}>Mã đặt chỗ</Text>
          <TextInput onChangeText={id=>this.setState({
            maDatCho:id
          })} style={{ height: 35, borderColor: '#0040FF', borderWidth: 1, marginTop: 3 }} />
        </View>
        <View style={{ marginTop: 20, margin: 15 }}>
          <Text style={{color:'#0040FF'}}>Email của bạn</Text>
          <TextInput onChangeText={email=>this.setState({
            email:email
          })} style={{ height: 35, borderColor: '#0040FF', borderWidth: 1, marginTop: 3 }} />
        </View>
        <View style={{ marginTop: 20, margin: 15 }}>
          <TouchableHighlight style={styles.submit} onPress={this.onSearchMaDatCho} underlayColor="#fff">
            <Text style={styles.submitText}>Quản lí đặt chỗ</Text>
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
export default SearchIDPlane;
