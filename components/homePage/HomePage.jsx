import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Drawer from './Drawer';

import Flashoffers from './Flashoffers';
import OpenRestraunt from './OpenRestraunt';
import RoseGarden from './RoseGarden';
import CheesyRestraunt from './CheesyRestraunt';
import SpicyRestraunt from './SpicyRestraunt';

const HomePage = props => {
  const [showMenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  return (
    <View style={{flex: 1}}>
      <Drawer />

      {/* =======================home Page============================ */}

      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transform: [{scale: scale}, {translateX: moveToRight}],
          borderRadius: showMenu ? 30 : 0,
        }}>
        <View style={styles.bottom_Nav}>
          <View style={styles.bottomNav}>
            <Pressable onPress={() => props.navigation.navigate('Home Page')}>
              <Image source={require('../images/home_.png')}  style={{height:24, width:24}} />
            </Pressable>
            <Pressable>
              <Image source={require('../images/search.png')} style={{height:24, width:24}} />
            </Pressable>
            <Pressable>
              <Image source={require('../images/add.png')}  style={{height:24, width:24}} />
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate('My Profile')}>
              <Image source={require('../images/user.png')}  style={{height:24, width:24}} />
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate('Favourite')}>
              <Image source={require('../images/heart.png')} style={{height:24, width:24}}  />
            </Pressable>
          </View>
        </View>
        <View style={styles.main_vew}>
          <View style={styles.topDetails}>
            <TouchableOpacity
              onPress={() => {
                Animated.timing(scale, {
                  toValue: showMenu ? 1 : 0.7,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                Animated.timing(moveToRight, {
                  toValue: showMenu ? 0 : 250,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                setShowMenu(!showMenu);
              }}>
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
            <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
              <Image
                source={require('../images/cart.png')}
                style={{maxHeight: 44, width: 45}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 60}}>
            <Text style={{fontSize: 20}}>
              Hey Halal,
              <Text style={{fontWeight: 'bold'}}> Good Afternoon</Text>
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            vertical={true}
            style={{bottom: 97, position: 'relative'}}>
            <Flashoffers />
            <OpenRestraunt />
            <RoseGarden />
            <CheesyRestraunt />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details Of Spicy Restraunt')
              }>
              <SpicyRestraunt />
            </TouchableOpacity>
          </ScrollView>
        </View>
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
    marginBottom: 90,
  },

  bottomNav: {
    position: 'relative',
    backgroudColor: '#FFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: "92%",
    height: 50,
    marginTop: 25,
    marginHorizontal:15,

  },
  bottom_Nav: {
    position: 'absolute',
    bottom: 0,
    height: 40,
    backgroundColor: '#FFF',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
