import React from 'react';
import Main_page from './components/landing_page/Main_page';
import SliderPage from './components/landing_page/SliderPage';
import SliderPage2 from './components/landing_page/SliderPage2';
import SliderPage3 from './components/landing_page/SliderPage3';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login_page from './components/login_signup/Login_page';
import ForgotPassword from './components/login_signup/ForgotPassword';
import HomePage from './components/homePage/HomePage';
import Signup from './components/login_signup/Signup';
import CheckOut from './components/Payment/CheckOut';
import Cart from './components/homePage/Cart';
import MyProfile from './components/Profile/MyProfile';
const Stack = createNativeStackNavigator();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Personal_Info from './components/Profile/Personal_Info';
import Edit_Profile from './components/Profile/Edit_Profile';
const Tab = createBottomTabNavigator();

import Auth from '@react-native-firebase/auth';
import Payment_Method from './components/Payment/Payment_Method';
import AddNew from './components/Payment/AddNew';
import Payment_Successfull from './components/Payment/Payment_Successfull';
import TrackOder from './components/TrackOrder/TrackOder';
import Address from './components/Profile/Address';
import AddNewAddress from './components/Profile/AddNewAddress';

export default function App(): React.JSX.Element {
  return (
    <>
      {/* <Main_page /> */}
      {/* <SliderPage /> */}
      {/* <SliderPage2 /> */}
      {/* <SliderPage3 /> */}
      {/* <Login_page /> */}
      {/* <ForgotPassword /> */}
      {/* <HomePage /> */}
      {/* <Signup /> */}
      <HomePage />
      {/* <CheckOut /> */}
      {/* <MyProfile /> */}

      {/* <Personal_Info /> */}
      {/* <Edit_Profile /> */}
      {/* <Payment_Method /> */}
      {/* <AddNew /> */}
      {/* <Payment_Successfull /> */}
      {/* <Address /> */}
      {/* <AddNewAddress/> */}



      {/* <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Main_page} />
          <Stack.Screen name="SliderPage" component={SliderPage} />
          <Stack.Screen name="SliderPage2" component={SliderPage2} />
          <Stack.Screen name="SliderPage3" component={SliderPage3} />
          <Stack.Screen name="Login" component={Login_page} />
          <Stack.Screen name="ForgortPassword" component={ForgotPassword} />
          <Stack.Screen name="Home Page" component={HomePage} />
          <Stack.Screen name="Sign Up" component={Signup} />
          <Stack.Screen name="My Profile" component={MyProfile} />
          <Stack.Screen name="Personal Info" component={Personal_Info} />
          <Stack.Screen name="Edit Profile" component={Edit_Profile} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Payment Method" component={Payment_Method} />
          <Stack.Screen name="Add New" component={AddNew} />
          <Stack.Screen
            name="Payment Successfull"
            component={Payment_Successfull}
          />
          <Stack.Screen name="Track Order" component={TrackOder} />
          <Stack.Screen name="My Address" component={Address} />
          <Stack.Screen name="Add New Address" component={AddNewAddress} />

        </Stack.Navigator>
      </NavigationContainer> */}




      {/* <NavigationContainer>
        <TabNavigator />
      </NavigationContainer> */}
    </>
  );
}
