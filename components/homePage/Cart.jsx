import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const Cart = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#E3DCD5',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      {/* ==========================Top View============================= */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            position: 'relative',
            margin: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../images/back2.png')} />
          </TouchableOpacity>
          <Text
            style={{
              left: 30,
              fontSize: 20,
              color: '#1A1817',
              fontWeight: '500',
            }}>
            Cart
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            position: 'relative',
            marginHorizontal: 20,
          }}>
          <View
            style={{width: 370, backgroundColor: '#FFF', flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#F0ECE9',
                width: 130,
                marginLeft: 20,
                marginVertical: 30,
                height: 136,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../images/burger3.png')}
                style={{width: 130, height: 89}}
              />
            </View>
            <View style={{marginVertical: 20, marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: '400', color: '#403F3E'}}>
                Cheese Burgers
              </Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{marginTop: 3, fontSize: 16}}>$</Text>
                <Text
                  style={{fontSize: 20, fontWeight: '400', color: '#403F3E'}}>
                  8.09
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: 370,
              backgroundColor: '#FFF',
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <View
              style={{
                backgroundColor: '#F0ECE9',
                width: 130,
                marginLeft: 20,
                marginVertical: 30,
                height: 136,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../images/glass_Order.png')}
                style={{width: 130, height: 89}}
              />
            </View>
            <View style={{marginVertical: 20, marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: '400', color: '#403F3E'}}>
                Blonde Roast
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginTop: 3, fontSize: 16}}>$</Text>
                  <Text
                    style={{fontSize: 20, fontWeight: '400', color: '#403F3E'}}>
                    7.30
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 50,
                    alignItems: 'center',
                  }}>
                  <Text style={{marginTop: 3, fontSize: 12}}>$</Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '400', color: '#403F3E'}}>
                    3.65 per unit
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text>SubTotal</Text>
          <Text>$15.39</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text>Delivery Fee</Text>
          <Text>Free</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Image
            source={require('../images/line.png')}
            style={{backgroundColor: 'black', marginHorizontal: 20}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <Text>Total</Text>
          <Text>$15.39</Text>
        </View>
        <View style={{ alignItems:'center', marginBottom:20}}>
        <TouchableOpacity
          style={styles.pressable}
          onPress={() => navigation.navigate('Check Out')}>
          <Text style={styles.next}>Place Order</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
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
