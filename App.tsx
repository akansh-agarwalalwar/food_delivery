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
const Tab = createBottomTabNavigator();



// function TabNavigator() {
//   return(
//     <Tab.Navigator screenOptions={{headerShown:false}}>
//       <Tab.Screen name=' Home Page' component={StackNavigator}/>
//       <Tab.Screen name='My Profile' component={MyProfile}/>
//     </Tab.Navigator>
//   )
// }


// function StackNavigator(){
//   return (
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//           <Stack.Screen name="Home" component={Main_page} />
//           <Stack.Screen name="SliderPage" component={SliderPage} />
//           <Stack.Screen name="SliderPage2" component={SliderPage2} />
//           <Stack.Screen name="SliderPage3" component={SliderPage3} />
//           <Stack.Screen name="Login" component={Login_page} />
//           <Stack.Screen name="ForgortPassword" component={ForgotPassword} />
//           <Stack.Screen name="Home Page" component={HomePage} />
//           <Stack.Screen name="Sign Up" component={Signup} />
//         </Stack.Navigator>

//   )
// }
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
      {/* <HomePage /> */}
      {/* <CheckOut /> */}
      {/* <MyProfile /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Main_page} />
          <Stack.Screen name="SliderPage" component={SliderPage} />
          <Stack.Screen name="SliderPage2" component={SliderPage2} />
          <Stack.Screen name="SliderPage3" component={SliderPage3} />
          <Stack.Screen name="Login" component={Login_page} />
          <Stack.Screen name="ForgortPassword" component={ForgotPassword} />
          <Stack.Screen name="Home Page" component={HomePage} />
          <Stack.Screen name="Sign Up" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
        <TabNavigator />
      </NavigationContainer> */}
    </>
  );
}
