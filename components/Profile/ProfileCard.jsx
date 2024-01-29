import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const ProfileCard = () => {
  return (
    <View style={{marginVertical: 30, flexDirection: 'row'}}>
            <Image source={require('../images/Profile_background.png')} />
            <View style={{marginHorizontal: 30}}>
              <Text style={{color: '#32343E', fontSize: 30}}>User Name</Text>
              <Text
                style={{
                  marginVertical: 10,
                  letterSpacing: 1,
                  fontSize: 22,
                  fontWeight: '400',
                  color: '#A0A5BA',
                }}>
                I Love Fast Food
              </Text>
            </View>
            </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({})