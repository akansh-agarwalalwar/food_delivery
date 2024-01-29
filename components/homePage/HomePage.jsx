import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Drawer from './Drawer';
import BottomNavigation from './BottomNavigation';
const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  return (
    <View style={{flex: 1}}>

      <Drawer/>

      {/* =======================home Page============================ */}
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          position: 'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
          transform: [{scale: scale}, {translateX: moveToRight}],
          borderRadius:showMenu?30:0 
        }}
        >
        <View style={styles.main_vew}>
          <View style={styles.topDetails}>
            <TouchableOpacity
              onPress={() => {
                Animated.timing(scale, {
                  toValue: showMenu ? 1 : 0.6,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                Animated.timing(moveToRight, {
                  toValue: showMenu ? 0 : 250,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                setShowMenu(!showMenu);
              }}
              
              >
              <Image source={require('../images/sidebar.png')} />
            </TouchableOpacity>

            <Text
              style={{
                marginLeft: -80,
                marginVertical: 2,
                color: '#FC6E2A',
                fontSize: 15,
              }}>
              Deliver To
            </Text>
            <Text style={{marginVertical: 20, marginLeft: -160}}>
              Opposite BSNL Office{' '}
              <Image source={require('../images/downarrowkey.png')} />{' '}
            </Text>
            <Image
              source={require('../images/cart.png')}
              style={{maxHeight: 44, width: 45}}
            />
          </View>
          <View style={{marginVertical: 60}}>
            <Text style={{fontSize: 20}}>
              Hey Halal,{' '}
              <Text style={{fontWeight: 'bold'}}>Good Afternoon</Text>{' '}
            </Text>
          </View>
        </View>
        <BottomNavigation/>
      </Animated.View>
      
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  topDetails: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-between',
  },
  main_vew: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
