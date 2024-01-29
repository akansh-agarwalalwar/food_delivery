import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const BottomNavigation = (props) => {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        bottom:0
      }}>
      <TouchableOpacity
        style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../images/home_.png')}
          style={{height: 50, width: 30}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../images/search.png')}
          style={{height: 20, width: 30}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../images/add_new.png')}
          style={{height: 50, width: 30}}
        />
      </TouchableOpacity>
      <TouchableOpacity
      
        style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../images/user.png')}
          style={{height: 50, width: 30}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../images/heart.png')}
          style={{height: 50, width: 30}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
