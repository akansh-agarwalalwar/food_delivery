import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

const Address = props => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
        marginBottom: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable onPress={() => props.navigation.navigate('My Profile')}>
              <Image source={require('../images/back2.png')} />
            </Pressable>
            <Text style={{fontSize: 25, color: '#000', marginHorizontal: 16}}>
              Address
            </Text>
          </View>
          <View style={{marginVertical: 24}}>
            <Pressable>
              <View
                style={{
                  backgroundColor: '#F0F5FA',
                  flexDirection: 'row',
                  borderRadius: 16,
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/Home.png')}
                  style={{marginHorizontal: 15}}
                />
                <View>
                  <Text
                    style={{fontSize: 14, color: '#32343E', marginBottom: 10}}>
                    HOME
                  </Text>
                  <Text style={{fontSize: 14}}>
                    2464 Royal Ln. Mesa, New Jersey 45463
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 30}}>
                  <Image
                    source={require('../images/edit-icon.png')}
                    style={{marginRight: 5}}
                    onPress={() => props.navigation.navigate('Add New Address')}
                  />
                  <Image source={require('../images/Delete-icon.png')} />
                </View>
              </View>
            </Pressable>

            <Pressable
              onPress={() => props.navigation.navigate('Add New Address')}>
              <View
                style={{
                  backgroundColor: '#F0F5FA',
                  flexDirection: 'row',
                  borderRadius: 16,
                  height: 100,
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <Image
                  source={require('../images/Office.png')}
                  style={{marginHorizontal: 15}}
                />
                <View>
                  <Text
                    style={{fontSize: 14, color: '#32343E', marginBottom: 10}}>
                    WORK
                  </Text>
                  <Text style={{fontSize: 14}}>
                    3891 Ranchview Dr. Richardson,
                  </Text>
                  <Text style={{fontSize: 14}}>California 62639</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 30,
                    marginLeft: 50,
                  }}>
                  <Image
                    source={require('../images/edit-icon.png')}
                    style={{marginRight: 5}}
                    onPress={() => props.navigation.navigate('Add New Address')}
                  />
                  <Image source={require('../images/Delete-icon.png')} />
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.pressable}
        onPress={() => props.navigation.navigate('Add New Address')}>
        <Text style={styles.next}>ADD NEW ADRESS</Text>
      </Pressable>
    </View>
  );
};

export default Address;

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
