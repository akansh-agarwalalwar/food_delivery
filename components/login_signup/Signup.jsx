import {StyleSheet, Text, View, Pressable, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Modals from '../common/Modals';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
const Signup = props => {
  const  navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [userName, setUserName] = useState('');
  const [mobile , setMobile] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const navigationsignUp = useNavigation();
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false)
  const saveUser = () =>{
    setModalVisible(true)
    const userId = uuid.v4();
    firestore().collection('users').doc(userId).set({
      name:userName,
      email:email,
      password:password,
      mobile:mobile
    }).then(res=>{
      setModalVisible(false)
      navigation.navigate('Login')
    }).catch(error=>{
      setModalVisible(false)
      console.log(error)
    })
  }


  const handlesignUp = async () => {
    try{
      if(email.length > 0 && password.length >0 ){
        const isUserCreated = await auth().createUserWithEmailAndPassword(
          email,
          password,
          mobile
          
        )
        console.log(isUserCreated);
        saveUser(); // Save user to Firestore
        navigation.navigate('Login')
      }
      else{
        setMessage('Please fill in all fields.');
      }
    }
    catch (error){
    console.log(error)
    setMessage(error.message)
    }
  }
  // const handlesignUp = async () => {
  //   try {
  //     if(email.length > 0 && password.length >0 ){
  //       const isUserCreated = await auth().createUserWithEmailAndPassword(
         
  //         email,
  //         password,
  //         mobile
          
  //       );
  //       console.log(isUserCreated);
  
  //       navigation.navigate('Login');
        
  //     }
  //     else{
        
  //     }
  //     }
  //     // console.log("Email: ", email, "Password: ", password)
  //     catch (error) {
  //     console.log(error);
  //     setMessage(error.message);
  //   }
  // };
  return (
    <View style={styles.login_main_view}>
      {/* <Text>{message}</Text> */}
      <View style={styles.login_main_view_second}>
        <View style={styles.upperLogin}>
          <Text style={styles.login_text}>Sign Up</Text>
          <Text style={styles.SignInText}>Please sign up to get started</Text>
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
            Name
          </Text>
          <TextInput
            placeholder="Name"
            style={{
              backgroundColor: '#F0F5FA',
              borderRadius: 15,
              marginTop: 9,
              height: 62,
              width: 327,
            }}
            value={userName}
            onChangeText={value => setUserName(value)}
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              color: '#32343E',
              marginLeft: 5,
              marginTop: 5,
            }}>
            Email
          </Text>
          <TextInput
            placeholder="Email"
            style={{
              backgroundColor: '#F0F5FA',
              borderRadius: 15,
              marginTop: 9,
              height: 62,
              width: 327,
            }}
            keyboardType='email-address'
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              color: '#32343E',
              marginLeft: 5,
              marginTop: 5,
            }}>
            Phone Number
          </Text>
          <TextInput
            placeholder="Enter Your Number"
            style={{
              backgroundColor: '#F0F5FA',
              borderRadius: 15,
              marginTop: 9,
              height: 62,
              width: 327,
              
            }}
            keyboardType='number-pad'
            value={mobile.toString()}
            onChangeText={value => setMobile(value)}
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              color: '#32343E',
              marginTop: 5,
              marginLeft: 5,
            }}>
            Password
          </Text>
          <TextInput
            placeholder="Password"
            style={{
              backgroundColor: '#F0F5FA',
              borderRadius: 15,
              marginTop: 9,
              height: 62,
              width: 327,
            }}
            value={password}
            onChangeText={value => setpassword(value)}
            secureTextEntry={passwordVisible}
            right={
              <TextInput.Icon
                name={passwordVisible ? 'eye' : 'eye-off'}
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={{color: 'black'}}
              />
            }
          />
          <View></View>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              // props.navigation.navigate('Home Page');
              // saveUser();

              setModalVisible(!modalVisible)
              if(
              email!=='' &&
              password!=='' &&
              userName!=='' &&
              mobile!=='' &&
              mobile.length>9
              ){
                handlesignUp();
              }
              else{
                alert('Plese Enter data')
              }
              handlesignUp()


            }}>
            <Text style={styles.next}>Sign Up</Text>
          </Pressable>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 20,
          }}>
          <Image source={require('../images/facebook.png')} />
          <Image source={require('../images/twitter.png')} />
          <Image source={require('../images/apple.png')} />
        </View>
      </View>
      <Modals modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  login_main_view: {
    backgroundColor: '#121223',
    flex: 1,
  },

  login_main_view_second: {
    flex: 1,
  },
  secondView: {
    flex: 3,
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
})
