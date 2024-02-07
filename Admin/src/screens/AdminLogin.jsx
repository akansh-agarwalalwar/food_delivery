import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
const AdminLogin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // useEffect(() => {
  //   // firestore()
  //   //   .collection('Users')
  //   //   .add({
  //   //     email:'admin@gmail.com',
  //   //     password: 'admin@1234'
  //   //   })
  //   //   .then(() => {
  //   //     console.log('Admin Added! ');
  //   //   });
  //   getData();
  // }, []);
  const userLogin = async () => {
    const users = await firestore().collection('Users').get();
    // console.log(users.password +" " + users.email);
    if(email == users.docs[0]._data.email && password== users.docs[0]._data.password ){
      navigation.navigate('Admin Dashboard')
    }
    else{
      alert("Wrong Email/Password")
    }
    
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Admin Login</Text>
      </View>
      <View>
        <TextInput
          placeholder="Enter Your Email"
          style={styles.textinput}
          value={email}
          onChangeText={txt => setEmail(txt)}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={styles.textinput}
          value={password}
          onChangeText={txt => setPassword(txt)}
        />
        <Pressable
          onPress={() => {
            if (email !== '' && password !== '') {
              userLogin();
            } else alert('Please Enter Valid Details');
          }}>
          <View style={styles.pressable}>
            <Text style={styles.next}>LOGIN</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default AdminLogin;

const styles = StyleSheet.create({
  textinput: {
    paddingLeft: 10,
    marginTop: 10,
    height: 50,
    width: 250,
    borderWidth: 2,
    borderColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:40
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
