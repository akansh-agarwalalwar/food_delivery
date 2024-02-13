import { StyleSheet, Text, View , Image,Pressable} from 'react-native'
import React from 'react'
import SearchBar from './SearchBar';
import AddNew from '../Payment/AddNew';
import MyProfile from '../Profile/MyProfile';
import Favourite from './Favourite';
const BottomNav = (props) => {
  return (
    <View style={styles.bottom_Nav}>
          <View style={styles.bottomNav}>
            <Pressable>
              <Image source={require('../images/home_.png')} />
            </Pressable>
            <Pressable onPress={()=>{
              alert("Only For Admin")
            }}>
              <Image source={require('../images/search.png')}  />
            </Pressable>
            <Pressable>
              <Image source={require('../images/add_new.png')} />
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate('My Profile')}>
              <Image source={require('../images/user.png')} />
            </Pressable>
            <Pressable>
              <Image source={require('../images/heart.png')} />
            </Pressable>
          </View>
        </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    bottomNav: {
        position: 'relative',
        backgroudColor: '#FFF',
    
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        marginTop: 25,
        zIndex: 100,
      },
      bottom_Nav: {
        position: 'absolute',
        bottom: 0,
        height: 40,
        backgroundColor: '#FFF',
        alignContent: 'center',
        justifyContent: 'center',
      },
})