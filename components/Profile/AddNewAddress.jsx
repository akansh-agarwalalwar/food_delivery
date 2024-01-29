import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

const AddNewAddress = props => (
  <View style={{flex: 1}}>
    <View style={{marginHorizontal: 20, marginVertical: 20, flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable onPress={() => props.navigation.navigate('My Profile')}>
          <Image source={require('../images/back2.png')} />
        </Pressable>
      </View>
    </View>
    <View
      style={{
        flex: 2,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
      }}>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <View>
          <Text style={{fontSize: 20, color: '#32343E'}}>Address</Text>
          <TextInput
            placeholder="Address"
            style={{
              backgroundColor: '#F0F5FA',
              marginVertical: 10,
              borderRadius: 10,
              height: 50,
            }}></TextInput>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 175}}>
            <Text style={{fontSize: 20, color: '#32343E'}}>Street</Text>
            <TextInput
              placeholder="Street"
              style={{
                backgroundColor: '#F0F5FA',
                marginVertical: 10,
                borderRadius: 10,
                height: 50,
              }}></TextInput>
          </View>
          <View style={{marginHorizontal: 20, width: 175}}>
            <Text style={{fontSize: 20, color: '#32343E'}}>Post Code</Text>
            <TextInput
              placeholder="30101"
              style={{
                backgroundColor: '#F0F5FA',
                marginVertical: 10,
                borderRadius: 10,
                height: 50,
              }}></TextInput>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 20, color: '#32343E'}}>Apartment</Text>
          <TextInput
            placeholder="345"
            style={{
              backgroundColor: '#F0F5FA',
              marginVertical: 10,
              borderRadius: 10,
              height: 50,
            }}></TextInput>
        </View>
        <View>
          <Text style={{fontSize: 20, color: '#32343E'}}>Label As</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={styles.homeWorkOther}>
              <Text>HOME</Text>
            </View>
            <View style={styles.homeWorkOther}>
              <Text>WORK</Text>
            </View>
            <View style={styles.homeWorkOther}>
              <Text>OTHER</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Pressable
          style={styles.pressable}
          onPress={() => props.navigation.navigate('My Profile')}>
          <Text style={styles.next}>ADD NEW ADDRESS</Text>
        </Pressable>
      </View>
    </View>
  </View>
);

export default AddNewAddress;

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
  homeWorkOther: {
    backgroundColor: '#F0F5FA',
    height: 50,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    color: '#32343E',
  },
});
