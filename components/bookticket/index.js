import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { ModalSelectList } from 'react-native-modal-select-list';
import { actFetAirportResquest } from './../../actions/index';
import { connect } from 'react-redux';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
class BookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalRef: '',
      airportFrom: '',
      modalRefTo: '',
      airportTo: '',
    };
  }
  openModal = () => this.state.modalRef.show();
  openModalToAirport = () => this.state.modalRefTo.show();
  saveModalRef = (ref) => {
    this.setState({
      modalRef: ref,
    });
  };
  saveModalRefTo = (ref) => {
    this.setState({
      modalRefTo: ref,
    });
  };
  onSelectedFrom = (value) => {
    this.setState({
      airportFrom: value,
    });
  };
  onSelectedTo = (value) => {
    this.setState({
      airportTo: value,
    });
  };
  componentDidMount() {
    this.props.fetAllAirport();
  }
  render() {
    let { airPort } = this.props;
    let { airportFrom, airportTo } = this.state;
    return (
      <ScrollView>
        <View>
          <View style={styles.formSearchAirport}>
            <View>
              <View>
                <Text>Chọn nơi đi</Text>
              </View>
              <View style={styles.inputAirportFrom}>
                <Text style={{ position: 'absolute', bottom: 0 }}>{airportFrom}</Text>
              </View>
              <View style={styles.btnSearchAirport}>
                <Button title="Open Modal" onPress={this.openModal} />
              </View>
            </View>
            <View style={{ paddingTop: 10 }}>
              <View>
                <Text>Chọn nơi đến</Text>
              </View>
              <View style={styles.inputAirportTo}>
                <Text style={{ position: 'absolute', bottom: 0 }}>{airportTo}</Text>
              </View>
              <View style={styles.btnSearchAirportTo}>
                <Button title="Open Modal" onPress={this.openModalToAirport} />
              </View>
            </View>
          </View>

          <ModalSelectList
            ref={this.saveModalRef}
            closeButtonText={'Đóng'}
            options={airPort.map((air, index) => {
              return {
                label: air.TenSanBay,
                value: air.MaSanBay,
              };
            })}
            onSelectedOption={this.onSelectedFrom}
            disableTextSearch={false}
          />
          <ModalSelectList
            ref={this.saveModalRefTo}
            closeButtonText={'Đóng'}
            options={airPort.map((air, index) => {
              return {
                label: air.TenSanBay,
                value: air.MaSanBay,
              };
            })}
            onSelectedOption={this.onSelectedTo}
            disableTextSearch={false}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  formSearchAirport: {
    width: DEVICE_WIDTH - 25,
    height: DEVICE_HEIGHT / 3,
    backgroundColor: '#E6E6E6',
    margin: 15,
    padding: 10,
    borderRadius: 10,
  },
  inputAirportFrom: {
    width: '90%',
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#424242',
  },
  inputAirportTo: {
    width: '90%',
    height: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: '#424242',
  },
  btnSearchAirport: {
    opacity: 0,
    position: 'absolute',
    top: 13,
    width: '90%',
  },
  btnSearchAirportTo:{
    opacity: 0,
    position: 'absolute',
    top: 22,
    //left: 10,
    width: '90%',
  }
});
const mapStateToProps = (state) => {
  return {
    airPort: state.listAirport,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetAllAirport: () => {
      dispatch(actFetAirportResquest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookTicket);
