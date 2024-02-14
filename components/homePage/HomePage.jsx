import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Animated,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Drawer from './Drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Flashoffers from './Flashoffers';
import OpenRestraunt from './OpenRestraunt';
import RoseGarden from './RoseGarden';
import CheesyRestraunt from './CheesyRestraunt';
import SpicyRestraunt from './SpicyRestraunt';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused, useNavigation} from '@react-navigation/native';
let userId = '';
const HomePage = props => {
  const [showMenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const [items, setItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  useEffect(() => {
    //const subscriber =
    firestore()
      .collection('items')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          tempData.push({
            id: documentSnapshot.id,
            data: documentSnapshot.data(),
          });
        });
        setItems(tempData);
      });
    // Stop listening for updates when no longer required
    // return () => subscriber();
  }, []);

  useEffect(() => {
    getCartItems();
  }, [isFocused]);
  const getCartItems = async () => {
    userId = await AsyncStorage.getItem('USERID');
    const user = await firestore().collection('users').doc(userId).get();
    setCartCount(user._data.cart.length);
  };
  const onAddToCart = async (item, index) => {
    const user = await firestore().collection('users').doc(userId).get();
    console.log(user._data.cart);
    let tempDart = [];
    tempDart = user._data.cart;
    if (tempDart.length > 0) {
      let existing = false;
      tempDart.map(itm => {
        if (itm.id == item.id) {
          existing = true;
          itm.data.qty = itm.data.qty + 1;
        }
      });
      if (existing == false) {
        tempDart.push(item);
      }
      firestore().collection('users').doc(userId).update({
        cart: tempDart,
      });
    } else {
      tempDart.push(item);
    }
    console.log(tempDart);
    firestore().collection('users').doc(userId).update({
      cart: tempDart,
    });
    getCartItems();
  };

  return (
    <View style={{flex: 1}}>
      <Drawer />

      {/* =======================home Page============================ */}

      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transform: [{scale: scale}, {translateX: moveToRight}],
          borderRadius: showMenu ? 30 : 0,
        }}>
        <View style={styles.bottom_Nav}>
          <View style={styles.bottomNav}>
            <Pressable onPress={() => props.navigation.navigate('Home Page')}>
              <Image
                source={require('../images/home_.png')}
                style={{height: 24, width: 24}}
              />
            </Pressable>
            <Pressable>
              <Image
                source={require('../images/search.png')}
                style={{height: 24, width: 24}}
              />
            </Pressable>
            <Pressable>
              <Image
                source={require('../images/add.png')}
                style={{height: 24, width: 24}}
              />
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate('My Profile')}>
              <Image
                source={require('../images/user.png')}
                style={{height: 24, width: 24}}
              />
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate('Favourite')}>
              <Image
                source={require('../images/heart.png')}
                style={{height: 24, width: 24}}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.main_vew}>
          <View style={styles.topDetails}>
            <TouchableOpacity
              onPress={() => {
                Animated.timing(scale, {
                  toValue: showMenu ? 1 : 0.7,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                Animated.timing(moveToRight, {
                  toValue: showMenu ? 0 : 250,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                setShowMenu(!showMenu);
              }}>
              <Image source={require('../images/sidebar.png')} />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: -80,
                marginVertical: 2,
                color: '#FC6E2A',
                fontSize: 15,
              }}>
              Deliver To
            </Text>
            <Text style={{marginVertical: 20, marginLeft: -160}}>
              Opposite BSNL Office{' '}
              <Image source={require('../images/downarrowkey.png')} />{' '}
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
              <Image
                source={require('../images/cart.png')}
                style={{maxHeight: 44, width: 45}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 60}}>
            <Text style={{fontSize: 20}}>
              Hey Halal,
              <Text style={{fontWeight: 'bold'}}> Good Afternoon</Text>
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            vertical={true}
            style={{bottom: 97, position: 'relative'}}>
            {/* <Flashoffers />
            <OpenRestraunt />
            <RoseGarden />
            <CheesyRestraunt />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details Of Spicy Restraunt')
              }>
              <SpicyRestraunt />
            </TouchableOpacity> */}
            <View style={{marginTop: 40}}>
              <FlatList
                data={items}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.itemView}>
                      <Image
                        source={{uri: item.data.imageUrl}}
                        style={styles.itemImage}
                      />
                      <View style={styles.nameView}>
                        <Text style={styles.nameText}>{item.data.name}</Text>
                        <Text style={styles.descText}>
                          {item.data.description}
                        </Text>

                        <View style={styles.priceView}>
                          <Text style={styles.priceText}>
                            {'Rs.' + item.data.discountPrice}
                          </Text>
                          <Text style={styles.discountText}>
                            {'Rs.' + item.data.price}
                          </Text>
                        </View>
                      </View>
                      <Image
                        source={require('../images/Plus.png')}
                        style={{
                          position: 'absolute',
                          right: 0,
                          margin: 9,
                          bottom: 0,
                          height: 40,
                          width: 40,
                        }}
                      />
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>
      </Animated.View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  topDetails: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-between',
  },
  main_vew: {
    marginHorizontal: 20,
    marginVertical: 20,
    marginBottom: 90,
  },

  bottomNav: {
    position: 'relative',
    backgroudColor: '#FFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '92%',
    height: 50,
    marginTop: 25,
    marginHorizontal: 15,
  },
  bottom_Nav: {
    position: 'absolute',
    bottom: 0,
    height: 40,
    backgroundColor: '#FFF',
    alignContent: 'center',
    justifyContent: 'center',
  },
  itemView: {
    flexDirection: 'row',
    width: '100%',

    backgroundColor: '#fff',
    elevation: 4,
    marginTop: 10,
    borderRadius: 10,
    height: 160,
    marginBottom: 10,
    position: 'relative',
  },
  itemImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
    margin: 5,
  },
  nameView: {
    width: '53%',
    margin: 10,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: '800',
  },
  descText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
  },
  priceText: {
    fontSize: 18,
    color: 'green',
    fontWeight: '700',
  },
  discountText: {
    fontSize: 17,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
