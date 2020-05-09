import React, { Component } from 'react';
import {
  View,
  Alert,
  Text,
  SafeAreaView,
  Button,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import { ModalSelectList } from 'react-native-modal-select-list';
import { actFetAirportResquest } from './../../actions/index';
import { connect } from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Icon } from 'native-base';
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
      countAdult: 1,
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
  changeCount = (number) => {
    if (number === -1) {
      if (this.state.countAdult > 1) {
        this.setState({
          countAdult: this.state.countAdult + number,
        });
      }
    } else {
      if (this.state.countAdult < 5) {
        this.setState({
          countAdult: this.state.countAdult + number,
        });
      }
    }
  };
  onBookTicket=()=>{
    let {airportFrom,
    airportTo,
    dateFrom,
    dateTo,
    stylePlane,
    countAdult
  }=this.state;
  Alert.alert("tu " + airportFrom+" den "+airportTo+ "\n" +"Ngay di " + dateFrom);
  }
  componentDidMount() {
    this.props.fetAllAirport();
  }
  render() {
    let { airPort } = this.props;
    let { airportFrom, airportTo, isDatePickerVisibleFrom, dateFrom, dateTo, isDatePickerVisibleTo, stylePlane, countAdult } = this.state;
    return (
      <ScrollView>
        <ImageBackground source={image} style={styles.imageBackground}>
          <View>
            <View style={styles.btnStylePlane}>
              <View style={styles.btnChange}>
                <Button title="Một chiều" color={stylePlane === 1 ? '#08088A' : ''} onPress={() => this.onChangeStyle(1)} />
              </View>
              <View style={styles.btnChange}>
                <Button title="Khứ hồi" color={stylePlane === 2 ? '#08088A' : ''} onPress={() => this.onChangeStyle(2)} />
              </View>
            </View>
            <View style={styles.formSearchAirport}>
              <View>
                <View>
                  <Text style={{ color: '#0040FF' }}>Chọn nơi đi</Text>
                </View>
                <View style={styles.inputAirportFrom}>
                  <Text style={{ position: 'absolute', bottom: 0, fontWeight: 'bold' }}>{airportFrom}</Text>
                </View>
                <View style={styles.btnSearchAirport}>
                  <Button title="Open Modal" onPress={this.openModal} />
                </View>
              </View>
              <View style={{ paddingTop: 10 }}>
                <View>
                  <Text style={{ color: '#0040FF' }}>Chọn nơi đến</Text>
                </View>
                <View style={styles.inputAirportTo}>
                  <Text style={{ position: 'absolute', bottom: 0, fontWeight: 'bold' }}>{airportTo}</Text>
                </View>
                <View style={styles.btnSearchAirportTo}>
                  <Button title="Open Modal" onPress={this.openModalToAirport} />
                </View>
              </View>
              <View style={{ paddingTop: 10 }}>
                <View>
                  <Text style={{ color: '#0040FF' }}>Ngày đi</Text>
                </View>
                <View style={[styles.inputAirportTo, { borderBottomWidth: 1.2 }]}>
                  <Text style={{ position: 'absolute', bottom: 0, fontWeight: 'bold' }}>{dateFrom}</Text>
                </View>
                <View style={styles.btnSearchAirportTo}>
                  <Button title="Open Modal" onPress={this.showDatePicker} />
                </View>
              </View>
              {stylePlane === 2 && (
                <View style={{ paddingTop: 10 }}>
                  <View>
                    <Text style={{ color: '#0040FF' }}>Ngày về</Text>
                  </View>
                  <View style={styles.inputAirportTo}>
                    <Text style={{ position: 'absolute', bottom: 0, fontWeight: 'bold' }}>{dateTo}</Text>
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
          <View style={styles.formSearchAirportCount}>
            <View style={{ paddingTop: 10 }}>
              <View>
                <Text style={{ color: '#0040FF' }}>Số lượng</Text>
              </View>
              <View style={[styles.inputAirportTo, { borderBottomWidth: 1 }]}>
                <Text style={{ position: 'absolute', bottom: 0, fontWeight: 'bold', color: '#A4A4A4' }}>Người lớn</Text>

                <Icon
                  onPress={() => this.changeCount(-1)}
                  style={{ position: 'absolute', bottom: 0, right: 60, color: countAdult === 1 ? '#A4A4A4' : '#0040FF' }}
                  name="md-remove"
                />
                <Text style={{ position: 'absolute', bottom: 5, right: 40, color: '#8A4B08' }}>{countAdult}</Text>
                <Icon
                  onPress={() => this.changeCount(1)}
                  style={{ position: 'absolute', bottom: 0, right: 10, color: countAdult === 5 ? '#A4A4A4' : '#0040FF' }}
                  name="md-add"
                />
              </View>
            </View>
            <View style={{ paddingTop: 10 }}>
              <View>
                <Text style={{ color: '#0040FF' }}>Số lượng</Text>
              </View>
              <View style={[styles.inputAirportTo, { borderBottomWidth: 1.2 }]}>
                <Text style={{ position: 'absolute', bottom: 0, fontWeight: 'bold', color: '#A4A4A4' }}>Trẻ em từ 2 đến 12 tuổi</Text>

                <Icon style={{ position: 'absolute', bottom: 0, right: 60, color: '#A4A4A4' }} name="md-remove" />
                <Text style={{ position: 'absolute', bottom: 5, right: 40, color: '#8A4B08' }}>0</Text>
                <Icon style={{ position: 'absolute', bottom: 0, right: 10, color: '#0040FF' }} name="md-add" />
              </View>
            </View>
            <View style={{ paddingTop: 10 }}>
              <View>
                <Text style={{ color: '#0040FF' }}>Số lượng</Text>
              </View>
              <View style={[styles.inputAirportTo, { borderBottomWidth: 1.2 }]}>
                <Text style={{ position: 'absolute', bottom: 0, fontWeight: 'bold', color: '#A4A4A4' }}>Trẻ em từ 2 đến 12 tuổi</Text>

                <Icon style={{ position: 'absolute', bottom: 0, right: 60, color: '#A4A4A4' }} name="md-remove" />
                <Text style={{ position: 'absolute', bottom: 5, right: 40, color: '#8A4B08' }}>0</Text>
                <Icon style={{ position: 'absolute', bottom: 0, right: 10, color: '#0040FF' }} name="md-add" />
              </View>
            </View>
          </View>
          <View>
            <TouchableHighlight style={styles.buttonSearchTicket} onPress={this.onBookTicket}>
              <Text style={styles.submitText}>Tìm kiếm chuyến bay</Text>
            </TouchableHighlight>
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
  formSearchAirportCount: {
    width: DEVICE_WIDTH - 25,
    height: DEVICE_HEIGHT / 3,
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
    width: '98%',
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#013ADF',
  },
  inputAirportTo: {
    width: '98%',
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#013ADF',
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
  buttonSearchTicket: {
    margin:15
  },
  submitText: {
    paddingTop: 11,
    paddingBottom: 11,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#2E2EFE',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
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
