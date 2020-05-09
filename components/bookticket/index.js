import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { ModalSelectList } from 'react-native-modal-select-list';
import { actFetAirportResquest } from './../../actions/index';
import { connect } from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const image = {
  uri:
    'https://www.vir.com.vn/stores/news_dataimages/nguyenhuong/092019/05/18/in_article/vietnam-airlines-granted-for-direct-flights-to-the-us.jpg',
};
class BookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalRef: '',
      airportFrom: '',
      modalRefTo: '',
      airportTo: '',
      dateFrom: '',
      dateTo: '',
      isDatePickerVisibleFrom: false,
      isDatePickerVisibleTo: false,
      stylePlane: 2,
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
  showDatePicker = () => {
    this.setState({
      isDatePickerVisibleFrom: true,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisibleFrom: false,
    });
  };
  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
  handleConfirm = (date) => {
    this.hideDatePicker();

    this.setState({
      dateFrom: this.formatDate(date),
    });
  };
  showDatePickerTo = () => {
    this.setState({
      isDatePickerVisibleTo: true,
    });
  };

  hideDatePickerTo = () => {
    this.setState({
      isDatePickerVisibleTo: false,
    });
  };
  handleConfirmTo = (date) => {
    this.hideDatePickerTo();

    this.setState({
      dateTo: this.formatDate(date),
    });
  };
  onChangeStyle = (status) => {
    this.setState({
      stylePlane: status,
    });
  };
  componentDidMount() {
    this.props.fetAllAirport();
  }
  render() {
    let { airPort } = this.props;
    let { airportFrom, airportTo, isDatePickerVisibleFrom, dateFrom, dateTo, isDatePickerVisibleTo, stylePlane } = this.state;
    return (
      <ScrollView>
        <ImageBackground source={image} style={styles.imageBackground}>
          <View>
            <View style={styles.btnStylePlane}>
              <View style={styles.btnChange}>
                <Button title="Một chiều" color={stylePlane===1?'#088A08':''} onPress={() => this.onChangeStyle(1)} />
              </View>
              <View style={styles.btnChange}>
                <Button title="Khứ hồi" color={stylePlane===2?'#088A08':''} onPress={() => this.onChangeStyle(2)} />
              </View>
            </View>
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
              <View style={{ paddingTop: 10 }}>
                <View>
                  <Text>Ngày đi</Text>
                </View>
                <View style={styles.inputAirportTo}>
                  <Text style={{ position: 'absolute', bottom: 0 }}>{dateFrom}</Text>
                </View>
                <View style={styles.btnSearchAirportTo}>
                  <Button title="Open Modal" onPress={this.showDatePicker} />
                </View>
              </View>
              {stylePlane === 2 && (
                <View style={{ paddingTop: 10 }}>
                  <View>
                    <Text>Ngày về</Text>
                  </View>
                  <View style={styles.inputAirportTo}>
                    <Text style={{ position: 'absolute', bottom: 0 }}>{dateTo}</Text>
                  </View>
                  <View style={styles.btnSearchAirportTo}>
                    <Button title="Open Modal" onPress={() => this.showDatePickerTo()} />
                  </View>
                </View>
              )}
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
            <DateTimePickerModal
              isVisible={isDatePickerVisibleFrom}
              mode="date"
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisibleTo}
              mode="date"
              onConfirm={this.handleConfirmTo}
              onCancel={this.hideDatePickerTo}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  formSearchAirport: {
    width: DEVICE_WIDTH - 25,
    height: DEVICE_HEIGHT / 2.5 + 10,
    backgroundColor: 'white',
    margin: 15,
    padding: 10,
    borderRadius: 10,
  },
  btnStylePlane: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
  },
  btnChange: {
    width: '50%',
    borderRadius: 20,
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
  btnSearchAirportTo: {
    opacity: 0,
    position: 'absolute',
    top: 22,
    //left: 10,
    width: '90%',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '30%',
  },
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
