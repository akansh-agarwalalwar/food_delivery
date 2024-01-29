import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

const AddNew = props => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1, justifyContent:'space-between', marginBottom:12,marginHorizontal: 20}}>
      <View style={{ marginVertical: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={() => props.navigation.navigate('My Profile')}>
            <Image source={require('../images/Close.png')} />
          </Pressable>
          <Text style={{fontSize: 25, color: '#000', marginHorizontal: 16}}>
            Add Card
          </Text>
        </View>
        <View style={styles.enterDetails}>
          <View>
            <Text style={styles.textOfInput}>Card Holder Name</Text>
            <TextInput
              placeholder="Enter Name"
              style={styles.textInputDesign}></TextInput>
            <View style={{marginVertical: 25}}>
              <Text style={styles.textOfInput}>Card Number</Text>
              <TextInput
                placeholder="2134   _ _ _ _   _ _ _ _"
                style={styles.textInputDesign}></TextInput>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: 150}}>
              <Text style={styles.textOfInput}>Expire Date</Text>
              <TextInput
                placeholder="mm/yyyy"
                style={styles.textInputDesign}></TextInput>
            </View>
            <View style={{marginHorizontal: 15, width: 150}}>
              <Text style={styles.textOfInput}>CV</Text>
              <TextInput
                placeholder="***"
                style={styles.textInputDesign}></TextInput>
            </View>
          </View>
        </View>
        
      </View>
      <View style={{}}>
          <Pressable
            style={styles.pressable}
            onPress={() => props.navigation.navigate('My Profile')}>
            <Text style={styles.next}>ADD CARD</Text>
          </Pressable>
        </View>
    </View>
  );
};

export default AddNew;

const styles = StyleSheet.create({
  enterDetails: {
    marginVertical: 35,
  },
  textInputDesign: {
    backgroundColor: '#F0F5FA',
    height: 61,
    borderRadius: 5,
    marginVertical: 10,
  },
  textOfInput: {
    fontSize: 24,
    color: '#A0A5BA',
    fontWeight: 'bold',
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
