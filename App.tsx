import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
const pic = require('../food_delivery/components/images/logo.png');
const pics = require('../food_delivery/components/images/toy_faces_1.png');
const picss = require('../food_delivery/components/images/toy_faces_2.png');
export default function App() {
  return (
    <View style={{backgroundColor: '#FF4B3A', flex: 3}}>
      <View
        style={{
          width: 73,
          backgroundColor: 'white',
          borderRadius: 50,
          height: 73,
          marginLeft: 49,
          marginTop: 56,
        }}>
        <Image
          source={pic}
          style={{
            height: 49.65,
            width: 45.86,
            marginTop: 12.77,
            marginLeft: 16.77,
          }}></Image>
        {/* <Text>Hii</Text> */}
      </View>
      <Text style={styles.background}>FOOD FOR EVERYONE</Text>
      <Image source={pics} style={styles.img} />
      <Image source={picss} style={styles.imgs} />
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          marginLeft: 40,
          height: 70,
          width: 314,
          borderRadius: 50,
          display: 'grid',
          marginTop: 10,
          shadowRadius: 4,
          
        }}>
        <Text
          onPress={console.log('Hi')}
          style={{
            color: '#FF4B3A',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            textAlign: 'center',
          }}>
          GET STARTED
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    color: '#FFFFFF',
    fontSize: 50,
    marginTop: 30,
    marginLeft: 51,
  },
  img: {
    height: 359.36,
    width: 200.1,
    marginTop: 10,
  },
  imgs: {
    height: 298.36,
    width: 225.1,
    marginTop: -300,
    marginLeft: 170,
  },
  button: {
    height: 70,
    width: 314,
    borderRadius: 50,
  },
});
