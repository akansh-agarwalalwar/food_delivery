import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
const ellipse = require('../images/ellipse1.png');
const ellipse2 = require('../images/ellipse2.png');
const driver = require('../images/driver.png');
const back = require('../images/back.png');
const SliderPage2 = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.main_view}>
        <View>
          <View>
            <Image source={ellipse2} style={styles.circle_2} />
          </View>
          <View>
            <Image source={ellipse} style={styles.circle_1} />
          </View>
          <View>
            <Image source={driver} style={styles.young} />
          </View>
        </View>
      </View>
      <View style={styles.view_second}>
        {/* <View style={styles.rectangle}>
          <Text>Hii</Text>
        </View> */}

        <View>
          <Image source={back} style={styles.back_style} />
          <Text style={styles.welcome}>Delivery on Time</Text>
          <Text style={styles.describe}>
            Order the best meals in Lagos and have them delivered to your
            doorstep in little or no time. Doesn’t that sound delicious???
          </Text>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              props.navigation.navigate('SliderPage3');
            }}>
            <Text style={styles.next}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SliderPage2;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FF4B3A',
  },
  main_view: {
    backgroundColor: '#FF4B3A',
    flex: 2,
  },
  circle_1: {
    marginLeft: 25,
    marginTop: 140,
    width: 233,
    height: 242,
    flexShrink: 0,
    position: 'relative',
    top: 30,
  },
  circle_2: {
    marginTop: 83,
    marginLeft: 200,
    width: 189,
    height: 191,
    flexShrink: 0,
    position: 'absolute',
  },
  young: {
    height: 430,
    width: 250,
    bottom: 350,
    marginLeft: 130,
  },
  view_second: {
    height: 400,
    width: 400,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    flex: 1.3,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  welcome: {
    color: '#FA4A0C',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 50,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  describe: {
    color: '#FA4A0C',
    marginTop: 15,
    marginLeft: 69,
    marginRight: 69,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    backgroundColor: '#FF4B3A',
    width: 314,
    height: 70,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 20,
  },
  next: {
    fontSize: 20,
    color: '#FFF',
    fontWeight:'bold'
  },
  back_style: {
    alignItems: 'center',
    marginLeft: 140,
    marginTop: 10,
  },
});
