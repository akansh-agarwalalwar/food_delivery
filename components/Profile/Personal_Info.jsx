import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import ProfileCard from './ProfileCard';

const Personal_Info = props => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1, marginBottom: 35}}>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={() => props.navigation.navigate('My Profile')}>
            <Image source={require('../images/back2.png')} />
          </Pressable>
          <Text style={{fontSize: 25, color: '#000', marginHorizontal: 16}}>
            Personal Info
          </Text>
          <Text
            onPress={() => props.navigation.navigate('Edit Profile')}
            style={{
              fontSize: 25,
              color: '#FF7622',
              marginHorizontal: 16,
              textDecorationLine: 'underline',
              marginLeft: 60,
            }}>
            EDIT
          </Text>
        </View>
        <ProfileCard />
        <View style={styles.card_styles}>
          <View style={{marginVertical: 10, marginHorizontal: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../images/personal_info.png')} />
              <View style={{marginVertical: 10, marginHorizontal: 10}}>
                <Text
                  style={{
                    fontSize: 18,
                  }}>
                  FULL NAME
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  USER NAME
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 10, marginHorizontal: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../images/personal_info.png')} />
              <View style={{marginVertical: 10, marginHorizontal: 10}}>
                <Text
                  style={{
                    fontSize: 18,
                  }}>
                  EMAIL
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  email@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 10, marginHorizontal: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../images/personal_info.png')} />
              <View style={{marginVertical: 10, marginHorizontal: 10}}>
                <Text
                  style={{
                    fontSize: 18,
                  }}>
                  PHONE NO.
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  +91 XXXXX-XXXXX
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Personal_Info;

const styles = StyleSheet.create({
  card_styles: {
    backgroundColor: '#F6F8FA',
    borderRadius: 20,
    marginVertical: 15,
    marginBottom: 10,
  },
});
