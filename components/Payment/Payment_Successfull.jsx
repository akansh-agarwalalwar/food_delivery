import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

const Payment_Successfull = (props) => {
  return (
    <View style={{justifyContent: 'space-between', alignItems: 'center', flex:1}}>
      <View style={{ flex:1, justifyContent:'center'}}>
        <View
          style={{
            flexDirection: 'column',
            marginVertical: 20,
          }}>
          <View
            style={{
              backgroundColor: '#98A8B8',
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Image source={require('../images/successfull.png')} />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 32,
            }}>
            <Text style={{color: '#111A2C', fontSize: 24}}>
              Congratulations !
            </Text>
            <Text style={{fontSize: 14, color: '#525C67', marginVertical: 5}}>
              You successfully maked a payment,
            </Text>
            <Text style={{fontSize: 14, color: '#525C67'}}>
              enjoy our service!
            </Text>
          </View>
        </View>
      </View>
      <View style={{position:'absolute', bottom:20}}>
      <Pressable
        style={styles.pressable}
        onPress={() => props.navigation.navigate('Home Page')}>
        <Text style={styles.next}>GO TO HOME</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default Payment_Successfull;

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#FF4B3A',
    width: 327,
    height: 62,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    marginTop: 20,
  },
  next: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
