import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MyProfile from '../Profile/MyProfile';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const HomePage = () => {
  return (
    <View style={styles.main_vew}>
      <View style={styles.topDetails}>
        <Image source={require('../images/sidebar.png')} />
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
          Hey Halal, <Text style={{fontWeight: 'bold'}}>Good Afternoon</Text>{' '}
        </Text>
      </View>
      {/* <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name='Home Page' component={HomePage}/>
      <Tab.Screen name='My Profile' component={MyProfile}/>
    </Tab.Navigator> */}
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
