import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-paper';
import database from '@react-native-firebase/database';
const ForgotPassword = props => {
  const [text, setText] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [isSelected, setSelection] = useState(false);

  // const [myData, setMyData] = useState(null);

  // useEffect(() => {
  //   getDataBase();
  // }, [])
  
  // const getDataBase = async () => {
  //   try {
  //     const data = await database().ref('users/2').once('value');
  //     console.log(data)
  //     setMyData(data.val())
  //   } catch (error) {
  //     console.log(error)
      
  //   }
  // }
  return (
    <View style={styles.login_main_view}>
      <View style={styles.login_main_view_second}>
        <View style={styles.upperLogin}>
          <Text style={styles.login_text}>Forgot Password</Text>
          <Text style={styles.SignInText}>
            Please sign in to your existing account
          </Text>
        </View>
      </View>
      <View style={styles.secondView}>
        <View style={styles.secondViewDesign}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              color: '#32343E',
              marginLeft: 5,
            }}>
            Email
          </Text>
          <TextInput
            placeholder="Enter Your Email"
            style={{
              backgroundColor: '#F0F5FA',
              borderRadius: 15,
              marginTop: 9,
              height: 62,
              width: 327,
            }}
          />
          <Pressable
            style={styles.pressable}
            onPress={() => {
              props.navigation.navigate('SliderPage3');
            }}>
            <Text style={styles.next}>SEND CODE</Text>
          </Pressable>
        </View>
        {/* <Text>Email:-  {myData ? myData.email : 'Loading'}</Text>
      <Text>Password:-  {myData ? myData.password : 'Loading'}</Text> */}
      </View>
      
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  login_main_view: {
    backgroundColor: '#121223',
    flex: 1,
  },

  login_main_view_second: {
    flex: 1,
  },
  secondView: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  login_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  upperLogin: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignInText: {
    color: 'white',
    marginTop: 3,
    fontSize: 16,
  },
  secondViewDesign: {
    paddingTop: 30,
    paddingLeft: 30,
  },

  checkbox: {
    marginTop: 5,
  },
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
