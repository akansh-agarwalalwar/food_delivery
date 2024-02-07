import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
const CheckOut = props => {
  const [selectedValue, setSelectedValue] = useState('option2');
  return (
    <View style={{backgroundColor: '#F5F5F8', flex: 1}}>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
            source={require('../images/back2.png')}
            
          />
            </TouchableOpacity>
          
          <Text style={{fontSize: 20, color: '#000', marginHorizontal: 110}}>
            CheckOut
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 34,
              color: '#000',
              fontWeight: '400',
              marginVertical: 35,
            }}>
            Payment
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 17, marginVertical: 20, color: '#000'}}>
            Payment Method
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            maxHeight: 290,
          }}>
          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <RadioButton
              value="option1"
              status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedValue('option1')}
              style={{color: '#FA4A0C'}}
            />
            <Image source={require('../images/card_payment.png')} />
            <Text style={{fontSize: 25, color: '#000'}}>Card</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <RadioButton
              value="option2"
              status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedValue('option2')}
              style={{color: '#FA4A0C'}}
            />
            <Image source={require('../images/bank_payment.png')} />
            <Text style={{fontSize: 25, color: '#000'}}>Bank Account</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <RadioButton
              value="option3"
              status={selectedValue === 'option3' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedValue('option3')}
              style={{color: '#FA4A0C'}}
            />
            <Image source={require('../images/bank_payment.png')} />
            <Text style={{fontSize: 25, color: '#000'}}>Cash On Delivery</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <RadioButton
              value="option4"
              status={selectedValue === 'option4' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedValue('option4')}
              style={{color: '#FA4A0C'}}
            />
            <Image source={require('../images/paypal_payment.png')} />
            <Text style={{fontSize: 25, color: '#000'}}>Paypal</Text>
          </View>
        </View>
        <View style={{marginVertical: 80}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{fontSize: 27, color: '#000'}}>Total</Text>
            <Text style={{fontSize: 27, color: '#000'}}>23,000</Text>
          </View>
          <View style={{alignItems: 'center', marginVertical: 40}}>
            <Pressable
              style={styles.pay_button}
              onPress={() => props.navigation.navigate('Payment Successfull')}>
              <Text style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
                Pay
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  pay_button: {
    backgroundColor: '#FF4B3A',
    width: 314,
    height: 70,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
