import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';

const Notification = () => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1, marginBottom: 35}}>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={() => props.navigation.navigate('My Profile')}>
            <Image source={require('../images/back2.png')} />
          </Pressable>
          <Text style={{fontSize: 25, color: '#000', marginHorizontal: 16}}>
            Notifications
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image
          source={require('../images/no-notification.png')}
          style={{height: 300, width: 300}}
        />
        <Text
          style={{
            fontSize: 40,
            marginTop: 10,
            fontWeight: '800',
            color: '#000',
          }}>
          No Notifications
        </Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
