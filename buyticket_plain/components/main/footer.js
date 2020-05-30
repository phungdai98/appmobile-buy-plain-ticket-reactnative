import React, { Component } from 'react';
import { Text, StyleSheet} from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
class FooterBookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <Footer style={styles.containerFooter}>
        <FooterTab style={{ backgroundColor: 'white' }}>
          <Button>
            <Icon style={styles.colorIcon} name="home" />
            <Text style={styles.titleIcon}>Trang chủ</Text>
          </Button>
          <Button onPress={()=>{this.props.navigation.navigate('BookTicket')}}>
            <Icon style={styles.colorIcon} name="md-jet" />
            <Text style={styles.titleIcon}>Đặt vé</Text>
          </Button>
          <Button onPress={()=>{this.props.navigation.navigate('Checkin')}}>
            <Icon style={styles.colorIcon} name="md-desktop" />
            <Text style={styles.titleIcon}>Lotusmiles</Text>
          </Button>
          <Button>
            <Icon name="paper" style={styles.colorIcon} />
            <Text style={styles.titleIcon}>Làm thủ tục</Text>
          </Button>
          <Button>
            <Icon style={styles.colorIcon} name="md-apps" onPress={()=>{this.props.navigation.navigate('Inforcustomer')}} />
            <Text style={styles.titleIcon}>Chức năng khác</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
const styles = StyleSheet.create({
  containerFooter: {
    height: 40,
  },
  titleIcon: {
    fontSize: 7,
    color: 'grey',
  },
  colorIcon: {
    color: 'grey',
  },
  titleIconClick: {
    fontSize: 7,
    color: '#2E64FE',
  },
  colorIconClick: {
    color: '#2E64FE',
  },
});
export default FooterBookTicket;
