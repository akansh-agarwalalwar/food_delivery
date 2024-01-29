import {View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
const pic = require('../images/logo.png');
const pics = require('../images/toy_faces_1.png');
const picss = require('../images/toy_faces_2.png');
const Main_page = (props) => {
  return (
    <View style={{backgroundColor: '#FF4B3A', flex: 1, justifyContent:'space-between'}}>
      <View>
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
          
      </View>
      <Text style={styles.background}>FOOD FOR EVERYONE</Text>
      <Image source={pics} style={styles.img} />
      <Image source={picss} style={styles.imgs} />
      <View style={styles.button_container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("SliderPage")
          }}>
          <Text style={styles.text}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default Main_page

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
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 50,
      elevation: 3,
      backgroundColor: '#ffffff',
      height: 60,
      width: 271,
      alignContent: 'center',
    },
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#FF4B3A',
    },
    button_container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    get_started: {
      fontSize: 24,
      color: '#FF4B3A',
    },
  });
  