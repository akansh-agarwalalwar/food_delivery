import React from 'react';
import Main_page from './components/landing_page/Main_page';
import SliderPage from './components/landing_page/SliderPage';
import SliderPage2 from './components/landing_page/SliderPage2';
import SliderPage3 from './components/landing_page/SliderPage3';
import SignOut from './components/login_signup/SignOut';
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

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Personal_Info from './components/Profile/Personal_Info';
import Edit_Profile from './components/Profile/Edit_Profile';
// const Tab = createBottomTabNavigator();

import Auth from '@react-native-firebase/auth';
import Payment_Method from './components/Payment/Payment_Method';
import AddNew from './components/Payment/AddNew';
import Payment_Successfull from './components/Payment/Payment_Successfull';
import TrackOder from './components/TrackOrder/TrackOder';
import Address from './components/Profile/Address';
import AddNewAddress from './components/Profile/AddNewAddress';
import SearchBar from './components/homePage/SearchBar';
import Favourite from './components/homePage/Favourite';
import Spicy_Restraunt_Details from './components/Details_Of_Restraunt/Spicy_Restraunt_Details';
import SpicyRestraunt from './components/homePage/SpicyRestraunt';
import Notification from './components/Profile/Notification';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Orders from './components/Profile/Orders';
import AdminLogin from './Admin/src/screens/AdminLogin';
import MainLoginPage from './Admin/src/screens/MainLoginPage';
import Splash from './Admin/src/screens/Splash';
import Items from './Admin/src/BottomTab/Items';
import AddItems from './Admin/src/BottomTab/AddItems';
import NotificationAdmin from './Admin/src/BottomTab/NotificationAdmin';
import Transactions from './Admin/src/BottomTab/Transactions';
import OrderDelivery from './Admin/src/BottomTab/OrderDelivery';
import EditItem from './Admin/src/BottomTab/EditItem';

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

      {/* <CheckOut /> */}
      {/* <MyProfile /> */}

      {/* <Personal_Info /> */}
      {/* <Edit_Profile /> */}
      {/* <Payment_Method /> */}
      {/* <AddNew /> */}
      {/* <Payment_Successfull /> */}
      {/* <Address /> */}
      {/* <AddNewAddress/> */}

      {/* <SearchBar/> */}
      {/* <BottomNavigation/> */}
      {/* <Spicy_Restraunt_Details /> */}
      {/* <SpicyRestraunt/> */}
      {/* <Cart/> */}
      {/* <CheckOut/> */}
      {/* <Notification/> */}
      {/* <Orders/> */}
      {/* <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Splash"  component= {Splash} />
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
          <Stack.Screen name="Sign Out" component={SignOut} />
          <Stack.Screen
            name="Payment Successfull"
            component={Payment_Successfull}
          />
          <Stack.Screen name="Track Order" component={TrackOder} />
          <Stack.Screen name="My Address" component={Address} />
          <Stack.Screen name="Add New Address" component={AddNewAddress} />
          <Stack.Screen name="Favourite" component={Favourite} />
          <Stack.Screen name="Details Of Spicy Restraunt" component={Spicy_Restraunt_Details} />
          <Stack.Screen name="Check Out" component={CheckOut} />
          <Stack.Screen name="Notifications" component={Notification} />
          <Stack.Screen name="My Orders" component={Orders} />
        </Stack.Navigator>
      </NavigationContainer> */}

      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name = "Splash"  component= {Splash} /> */}
          <Stack.Screen name="Login" component={Login_page} />
          <Stack.Screen name="Admin Login" component={AdminLogin} />
          <Stack.Screen name="Items" component={Items} />
          <Stack.Screen name="Add Items" component={AddItems} />
          <Stack.Screen
            name="Admin Notifications"
            component={NotificationAdmin}
          />

          <Stack.Screen name="Admin Transactions" component={Transactions} />

          <Stack.Screen
            name="Delivered Order Admin"
            component={OrderDelivery}
          />
          <Stack.Screen name="EditItem" component={EditItem} />
          <Stack.Screen name="ForgortPassword" component={ForgotPassword} />
          <Stack.Screen name="Home Page" component={HomePage} />
          <Stack.Screen name="Sign Up" component={Signup} />
          <Stack.Screen name="My Profile" component={MyProfile} />
          <Stack.Screen name="Personal Info" component={Personal_Info} />
          <Stack.Screen name="Edit Profile" component={Edit_Profile} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Payment Method" component={Payment_Method} />
          <Stack.Screen name="Add New" component={AddNew} />
          <Stack.Screen name="Sign Out" component={SignOut} />
          <Stack.Screen
            name="Payment Successfull"
            component={Payment_Successfull}
          />
          <Stack.Screen name="Track Order" component={TrackOder} />
          <Stack.Screen name="My Address" component={Address} />
          <Stack.Screen name="Add New Address" component={AddNewAddress} />
          <Stack.Screen name="Favourite" component={Favourite} />
          <Stack.Screen
            name="Details Of Spicy Restraunt"
            component={Spicy_Restraunt_Details}
          />
          <Stack.Screen name="Check Out" component={CheckOut} />
          <Stack.Screen name="Notifications" component={Notification} />
          <Stack.Screen name="My Orders" component={Orders} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
