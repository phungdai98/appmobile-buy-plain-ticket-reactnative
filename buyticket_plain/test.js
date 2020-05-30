Item = ({ item }) => {
  let timeFrom = item.gioidi + ':' + item.phutdi;
  let timeTo = item.gioden + ':' + item.phutden;
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
            {item.macb}
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
            <Text style={{ color: 'white' }}>{item.sbdi.masb}</Text>
          </View>
          <Text
            style={{
              paddingLeft: 10,
              fontWeight: 'bold',
              color: '#A4A4A4',
            }}>
            {item.sbdi.tp}
          </Text>
          <Text
            style={{
              paddingLeft: 185,
              color: 'grey',
            }}>
            {timeFrom}
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
            <Text style={{ color: 'white' }}>{item.sbden.masb}</Text>
          </View>
          <Text
            style={{
              paddingLeft: 10,
              fontWeight: 'bold',
              color: '#A4A4A4',
            }}>
            {item.sbden.tp}
          </Text>
          <Text
            style={{
              paddingLeft: 202,
              color: 'grey',
            }}>
            {timeTo}
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
            {item.giave}
            <Text>đ</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};