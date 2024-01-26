import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
const login_background = require('../images/login_background.png')

const Login_page = () => {
  return (
    <View>
        <View style={styles.login_main_view}>
        <Image source={{login_background}} style={styles.login_image} />
        </View>
      <Text>login_page</Text>
    </View>
  )
}

export default Login_page

const styles = StyleSheet.create({
    login_main_view:{
        
    },
    login_image:{
        height:340,
    }
})