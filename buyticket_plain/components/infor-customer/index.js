import React, { Component } from 'react';
import { View, Text, TextInput, Picker, StyleSheet,TouchableHighlight } from 'react-native';

class InputInforCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '1',
    };
  }

  render() {
    return (
      <View style={{ margin: 15 }}>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: '#0040FF' }}>Chứng minh ND</Text>
          <TextInput style={{ height: 35, borderColor: '#0040FF', borderBottomWidth: 1, marginTop: 3 }} />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: '#0040FF' }}>Họ</Text>
          <TextInput style={{ height: 35, borderColor: '#0040FF', borderBottomWidth: 1, marginTop: 3 }} />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: '#0040FF' }}>Tên</Text>
          <TextInput style={{ height: 35, borderColor: '#0040FF', borderBottomWidth: 1, marginTop: 3 }} />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: '#0040FF' }}>Giới tính</Text>
          <View style={{ height: 35, width: '100%', borderBottomWidth: 0.8, borderColor: '#0040FF' }}>
            <Picker
              selectedValue={this.state.gender}
              style={{ height: 35, width: '100%' }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  gender: itemValue,
                })
              }>
              <Picker.Item label="Nữ" value="0" />
              <Picker.Item label="Nam" value="1" />
            </Picker>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: '#0040FF' }}>Điện thoại liên hệ</Text>
          <TextInput style={{ height: 35, borderColor: '#0040FF', borderBottomWidth: 1, marginTop: 3 }} />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: '#0040FF' }}>Email</Text>
          <TextInput style={{ height: 35, borderColor: '#0040FF', borderBottomWidth: 1.5, marginTop: 3 }} />
        </View>
        <View style={{ marginTop: 50 }}>
          <TouchableHighlight style={styles.submit} onPress={this.onSearchMaDatCho} underlayColor="#fff">
            <Text style={styles.submitText}>Đi tới thanh toán</Text>
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
export default InputInforCustomer;
