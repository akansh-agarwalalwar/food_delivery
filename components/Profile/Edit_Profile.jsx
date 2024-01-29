import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';

const Edit_Profile = props => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1, marginBottom: 35}}>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={()=> props.navigation.navigate('Personal Info')}>
          <Image source={require('../images/back2.png')} /></Pressable>
          <Text style={{fontSize: 25, color: '#000', marginHorizontal: 16}}>
            Edit Profile
          </Text>
        </View>

        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Image source={require('../images/Profile_background.png')} />
        </View>
        <View>
          <Text style={styles.heading}>FULL NAME</Text>
          <TextInput
            placeholder="name"
            style={{
              backgroundColor: '#F0F5FA',
              borderRadius: 10,
              marginVertical: 5,
            }}></TextInput>
        </View>
        <View>
          <Text style={styles.heading}>EMAIL</Text>
          <TextInput
            placeholder="user email"
            style={{
              backgroundColor: '#F0F5FA',
              borderRadius: 10,
              marginVertical: 5,
            }}></TextInput>
        </View>
        <View>
          <Text style={styles.heading}>PHONE NUMBER</Text>
          <TextInput
            placeholder="+91 XXXXX-XXXXX"
            style={{
              backgroundColor: '#F0F5FA',
              borderRadius: 10,
              marginVertical: 5,
            }}></TextInput>
        </View>
        <View>
          <Text style={styles.heading}>BIO</Text>
          <TextInput
            placeholder="name"
            style={{
              backgroundColor: '#F0F5FA',
              borderRadius: 10,
              marginVertical: 5,
              height: 100,
            }}></TextInput>
        </View>
        <Pressable
          style={styles.pressable}
          onPress={() => props.navigation.navigate('My Profile')}>
          <Text style={styles.next}>SAVE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Edit_Profile;

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
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
});
