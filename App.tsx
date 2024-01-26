import {View} from 'react-native';
import React from 'react';
import Main_page from './components/landing_page/Main_page';
import SliderPage from './components/landing_page/SliderPage';
import SliderPage2 from './components/landing_page/SliderPage2';
import SliderPage3 from './components/landing_page/SliderPage3';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login_page from './components/login_signup/Login_page';

const Stack = createNativeStackNavigator();
export default function App(): React.JSX.Element {
  return (
    <>
      {/* <Main_page /> */}
      {/* <SliderPage /> */}
      {/* <SliderPage2 /> */}
      {/* <SliderPage3 /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Main_page} />
        <Stack.Screen name="SliderPage" component={SliderPage} />
        <Stack.Screen name="SliderPage2" component={SliderPage2} />
        <Stack.Screen name="SliderPage3" component={SliderPage3} />
        <Stack.Screen name="Login" component={Login_page} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
