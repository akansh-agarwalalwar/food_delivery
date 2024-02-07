import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
//com.food_delivery
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import auth, {signInWithPopup} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login_page = props => {
  const [text, setText] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [isSelected, setSelection] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const navigationLogin = useNavigation();
  const [message, setMessage] = useState('');

  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    GoogleSignin.configure({
      //scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '177511355161-tm9otcgai6n197hvamrq18e1vh3ndr1c.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      //offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });

    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber;
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const {idToken, user} = await GoogleSignin.signIn();
      console.log(user);
      Alert.alert('Success');
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {}
  }

  // function onAuthStateChanged(userInfo) {
  //   setuserInfo(userInfo);
  //   console.log(userInfo);
  //   if (userInfo) setloggedIn(true);
  // }

  // const signIn = async () => {
  //   try {

  //     // await GoogleSignin.hasPlayServices();
  //     // const userInfo = await GoogleSignin.signIn();
  //     // const initializing = await GoogleSignin.isSignedIn();
  //     // setUserInfo ({ userInfo});
  //     // if (!initializing) {
  //     //   // User is already signed in, navigate to home screen
  //     //   const navigation = useNavigation();
  //     //   navigation.navigate('Home Page');
  //     // }
  //     // const auth = getAuth();
  //     // await signInWithCredential(auth, googleCredentials);

  //     // const {idToken} = await GoogleSignin.signIn();
  //     // const googleCredentials = GoogleAuthProvider.credentials(idToken);

  //     // const navigation = useNavigation();
  //     // navigation.navigate("Home Page");

  //     await GoogleSignin.hasPlayServices();
  //     const  ee = await GoogleSignin.signIn();
  //     console.log(ee)
  //     console.log(accessToken,idToken)
  //     setloggedIn(true);
  //     const credential = auth().GoogleAuthProvider.credential(
  //       idToken,
  //       accessToken,
  //     );
  //     await auth().signInWithCredential(credential);

  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancel the login info
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services is not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  // signOut = async () => {
  //   try {
  //     console.log("Sign out");
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     this.signIn();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     setloggedIn(false);
  //     setuserInfo([]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleLogin = async () => {
   firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0]._data;
          if (userDoc.email === email && userDoc.password === password) {
            gotoNextScreen();
          } else {
            alert('Please Check/Enter your Email and Password');
          }
        } else {
          alert('User not found');
        }
      });

    // try {
    //   const isUserLogIn = await auth().signInWithEmailAndPassword(
    //     email,
    //     password,
    //   );
    //   setMessage('');
    //   console.log(isUserLogIn);
    //   navigationLogin.navigate('Home Page', {
    //     email: isUserLogIn.user.email,
    //     uid: isUserLogIn.user.uid,
    //     userName: isUserLogIn.user.displayName,
    //   });
    // } catch (error) {
    //   // console.log("Email: ", email, "Password: ", password)
    //   console.log(error);
    //   setMessage(error.message);
    // }
  };

  const gotoNextScreen = async () => {
    await AsyncStorage.setItem('EMAIL', email);
    navigationLogin.navigate('Home Page');
  };
  return (
    <View style={styles.login_main_view}>
      {/* {userInfo!= null && <Text>{userInfo.user.name}</Text>}
      {userInfo!= null && <Text>{userInfo.user.email}</Text>}
      {userInfo!= null && <Image source={{uri: userInfo.user.photo}} 
      style={{width:100, height:100}}></Image>} */}
      {/* <Text>{message}</Text> */}
      <View style={styles.login_main_view_second}>
        <View style={styles.upperLogin}>
          <Text style={styles.login_text}>Log In</Text>
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
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              color: '#32343E',
              marginTop: 12,
              marginLeft: 5,
            }}>
            Password
          </Text>
          <TextInput
            placeholder="Enter Password"
            // secureTextEntry={!showPassword}
            //         value={password}
            //         onChangeText={setPassword}

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

          <View>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <View style={{marginTop: -25}}>
              <Text style={{marginLeft: 33}}>Remember me</Text>
              <Text
                style={{
                  textAlign: 'right',
                  marginRight: 33,
                  marginTop: -18,
                  color: '#FF7622',
                  fontSize: 14,
                }}
                onPress={() => {
                  props.navigation.navigate('ForgortPassword');
                }}>
                Forgot Password
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              // props.navigation.navigate('Home Page');
              if (email !== '' && password !== '') {
                handleLogin();
              } else {
                alert('Enter Data');
              }
            }}>
            <Text style={styles.next}>LOG IN</Text>
          </Pressable>
        </View>
        <Text style={{color: '#646982', textAlign: 'center', marginTop: 12}}>
          Don’t have an account?{' '}
          <Text
            style={{color: '#FF7622'}}
            onPress={() => props.navigation.navigate('Sign Up')}>
            Sign Up
          </Text>
        </Text>
        <Text style={{textAlign: 'center', marginTop: 15}}>OR</Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 20,
          }}>
          <TouchableOpacity>
            <Image source={require('../images/facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onGoogleButtonPress()}>
            <Image source={require('../images/twitter.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../images/apple.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login_page;

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
