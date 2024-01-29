import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
const Payment_Method = props => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={() => props.navigation.navigate('My Profile')}>
            <Image source={require('../images/back2.png')} />
          </Pressable>
          <Text style={{fontSize: 25, color: '#000', marginHorizontal: 16}}>
            Payment
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 70,
            }}>
            <View>
              <View style={styles.payment_methods}>
                <Image
                  source={require('../images/cash.png')}
                  style={{height: 24, width: 24}}
                />
              </View>
              <Text style={styles.payment_text}>Cash</Text>
            </View>
            <View>
              <View style={styles.payment_methods}>
                <Image
                  source={require('../images/visa.png')}
                  style={{height: 24, width: 70}}
                />
              </View>
              <Text style={styles.payment_text}>Visa</Text>
            </View>
            <View>
              <View style={styles.payment_methods}>
                <Image
                  source={require('../images/mastercard.png')}
                  style={{height: 34, width: 44}}
                />
              </View>
              <Text style={styles.payment_text}>Mastercard</Text>
            </View>
            <View>
              <View style={styles.payment_methods}>
                <Image
                  source={require('../images/paypal.png')}
                  style={{height: 24, width: 24}}
                />
              </View>
              <Text style={styles.payment_text}>Paypal</Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#F0F5FA',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 18,
          }}>
          <Image
            source={require('../images/mastercardPhoto.png')}
            style={{width: 200, height: 117}}
          />
          <Text style={{color: '#32343E', fontSize: 16, fontWeight: '700'}}>
            No Master Card Added
          </Text>
          <View style={{marginVertical: 5, alignItems: 'center'}}>
            <Text
              style={{
                color: '#2D2D2D',
                letterSpacing: 0.5,
                fontSize: 15,
              }}>
              You can add a mastercard and
            </Text>
            <Text
              style={{
                color: '#2D2D2D',
                letterSpacing: 0.5,
                fontSize: 15,
              }}>
              save it for later
            </Text>
          </View>
        </View>
        <Pressable onPress={() => props.navigation.navigate('Add New')}>
          <View
            style={{
              backgroundColor: '#F0F5FA',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 18,
              marginVertical: 30,
              height: 62,
            }}>
            <Text style={{color: '#FF7622', fontSize: 24}}> + ADD NEW</Text>
          </View>
        </Pressable>
      </View>
      <View style={{alignItems: 'center', marginBottom: 12}}>
        <Pressable
          style={styles.pressable}
          onPress={() => props.navigation.navigate('My Profile')}>
          <Text style={styles.next}>UPDATE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Payment_Method;

const styles = StyleSheet.create({
  payment_methods: {
    backgroundColor: '#F0F5FA',
    width: 85,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginHorizontal: 10,
  },
  payment_text: {
    textAlign: 'center',
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
