import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
const menus = [
  {icons: require('../images/gg_profile.png'), title: 'Profile'},
  {icons: require('../images/orders.png'), title: 'Orders'},
  {icons: require('../images/offers.png'), title: 'Offer And Promo'},
  {icons: require('../images/privacy.png'), title: 'Privacy Policy'},
  {icons: require('../images/security.png'), title: 'Security'},
];
const Drawer = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FF4B3A',
        justifyContent: 'space-between'
      }}>
      <View style={{marginTop: 150}}>
        <FlatList
          data={menus}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedMenuItem(index)}
                style={{
                  width: 200,
                  height: 50,
                  marginHorizontal: 20,
                  marginVertical: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={item.icons} />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                    color: '#FFF',
                    fontWeight: 'bold',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{marginHorizontal:20, bottom:90}}>
        <TouchableOpacity>
        <Text style={{color:'#FFF', fontSize:20, fontWeight:'bold'}}>Sign-Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
