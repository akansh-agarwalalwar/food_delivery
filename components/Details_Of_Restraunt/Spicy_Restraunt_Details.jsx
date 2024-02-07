import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
const transparent = 'rgba(0,0,0,0.5)';
import {useNavigation} from '@react-navigation/native';
const Spicy_Restraunt_Details = ({navigation}) => {
  // const navigation = useNavigation()
  const [selectTab, setSelectTab] = useState(0);
  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Item Added To Cart',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1.3, position: 'relative'}}>
        <View style={{position: 'absolute'}}>
          <Image
            source={require('../images/french-fries-spicy.png')}
            style={{width: 410, height: 317}}
          />
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              margin: 20,
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../images/back2.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../images/filter.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          backgroundColor: '#FFF',
          marginHorizontal: 20,
          marginVertical: 30,
        }}>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../images/Star-1.png')} />
            <Text style={{marginLeft: 5, fontSize: 16, color: '#181C2E'}}>
              4.7
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 24,
            }}>
            <Image source={require('../images/delivery_bus.png')} />
            <Text style={{marginLeft: 5, fontSize: 16, color: '#181C2E'}}>
              Free
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 24,
              position: 'relative',
            }}>
            <Image source={require('../images/Clock.png')} />
            <Text style={{marginLeft: 5, fontSize: 16, color: '#181C2E'}}>
              20 min
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: '#181C2E',
              fontSize: 30,
              fontFamily: 'Sen',
              fontWeight: 700,
            }}>
            Spicy Restraunt
          </Text>
          <Text
            style={{
              color: '#A0A5BA',
              fontSize: 16,
              marginVertical: 8,
              lineHeight: 24,
              fontWeight: 400,
            }}>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View style={styles.horizonatal_scroll_view}>
              <Text style={styles.horizonatal_scroll}>Burger</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                marginLeft: 5,
                height: 46,
                width: 140,
                backgroundColor: '#EDEDED',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 20}}>Sandwich</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                marginLeft: 5,
                height: 46,
                width: 110,
                backgroundColor: '#EDEDED',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 20}}>Pizza</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                marginLeft: 5,
                height: 46,
                width: 150,
                backgroundColor: '#EDEDED',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 20}}>Spring Roll</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{color: '#181C2E', marginTop: 10, fontSize: 23}}>
            Burger ( 10 )
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{marginHorizontal: 10}}>
              <View
                style={{
                  height: 180,
                  backgroundColor: '#FFF',
                  width: 150,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/burger1.jpg')}
                  style={{height: 90, width: 114, marginTop: 5}}
                />
                <Text style={{fontSize: 16, fontWeight: '700'}}>
                  Burger Ferguson
                </Text>
                <Text style={{fontSize: 13, color: '#646982'}}>
                  Cafecafachino
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  marginTop: 140,
                  width: 150,
                }}>
                <Text style={{fontSize: 16, fontWeight: '700'}}>$40</Text>
                <TouchableOpacity onPress={() => showToastWithGravityAndOffset()} >
                  <Image source={require('../images/Plus.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginHorizontal: 41}}>
              <View
                style={{
                  height: 180,
                  backgroundColor: '#FFF',
                  width: 150,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/burger2.jpg')}
                  style={{height: 90, width: 114, marginTop: 5}}
                />
                <Text style={{fontSize: 16, fontWeight: '700'}}>
                  Rockin' Burgers
                </Text>
                <Text style={{fontSize: 13, color: '#646982'}}>
                  Spicy restaurant
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  marginTop: 140,
                  width: 150,
                }}>
                <Text style={{fontSize: 16, fontWeight: '700'}}>$41</Text>
                <TouchableOpacity>
                  <Image source={require('../images/Plus.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottom_Nav}>
        <View style={styles.bottomNav}>
          <Pressable onPress={() => navigation.navigate('Home Page')}>
            <Image source={require('../images/home_.png')} />
          </Pressable>
          <Pressable>
            <Image source={require('../images/search.png')} />
          </Pressable>
          <Pressable>
            <Image source={require('../images/add_new.png')} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('My Profile')}>
            <Image source={require('../images/user.png')} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Favourite')}>
            <Image source={require('../images/heart.png')} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Spicy_Restraunt_Details;

const styles = StyleSheet.create({
  horizonatal_scroll: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  horizonatal_scroll_view: {
    backgroundColor: '#FF4B3A',
    height: 46,
    width: 89,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  bottomNav: {
    position: 'relative',
    backgroudColor: '#FFF',

    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    marginTop: 25,
    zIndex: 100,
  },
  bottom_Nav: {
    position: 'absolute',
    bottom: 0,
    height: 40,
    backgroundColor: '#FFF',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
