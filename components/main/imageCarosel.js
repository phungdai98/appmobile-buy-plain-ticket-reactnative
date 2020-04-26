import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
class ImageCarosel extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  setSelectedIndex = (event) => {
    //width of the viewSize
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    //get current possition of scrollView
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({
      selectedIndex: selectedIndex,
    });
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        (prev) => ({
          selectedIndex: prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            y: 0,
            x: DEVICE_WIDTH * this.state.selectedIndex,
          });
        },
      );
    }, 3000);
  };
  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View style={styles.viewImage}>
        <ScrollView horizontal pagingEnabled onMomentumScrollEnd={this.setSelectedIndex} ref={this.scrollRef}>
          {images.map((image) => (
            <Image key={image} source={{ uri: image }} style={styles.backGroundImage} />
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View key={image} style={[styles.whiteCircle, { opacity: i === selectedIndex ? 1 : 0.5 }]}></View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewImage: {
    flex:1,
    width: DEVICE_WIDTH - 20,
    height: DEVICE_HEIGHT / 3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  backGroundImage: {
    width: DEVICE_WIDTH - 20,
    height: DEVICE_HEIGHT / 3,
    borderRadius: 10,
  },
  circleDiv: {
    position: 'absolute',
    bottom: 15,
    height: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: '#fff',
  },
});
export default ImageCarosel;
