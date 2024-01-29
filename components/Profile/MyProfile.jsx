import {Image, StyleSheet, View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import ProfileCard from './ProfileCard';
const MyProfile = props => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1, marginBottom: 35}}>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={() => props.navigation.navigate('Home Page')}>
            <Image source={require('../images/back2.png')}/>
        </Pressable>
          <Text style={{fontSize: 25, color: '#000', marginHorizontal: 16}}>
            Profile
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ProfileCard />
          <View>
            {/* 
=====================card first=============================== */}
            <View style={styles.card_styles}>
              <View style={{marginVertical: 10, marginHorizontal: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  
                  <Image source={require('../images/personal_info.png')} />
                  <Text
                    style={{
                      fontSize: 24,
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}
                    onPress={() => props.navigation.navigate('Personal Info')}>
                    Personal Info
                  </Text>
                  <Image
                    source={require('../images/move_forward.png')}
                    style={{
                      height: 30,
                      width: 30,
                      alignItems: 'center',
                      right: -100,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../images/address.png')} />

                  <Text
                    style={{
                      fontSize: 24,
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }} onPress={()=> props.navigation.navigate('My Address')}>
                    Address
                  </Text>
                  <Image
                    source={require('../images/move_forward.png')}
                    style={{height: 30, width: 30, right: -155}}
                  />
                </View>
              </View>
            </View>

            {/* ===============================card second================================ */}
            <View style={styles.card_styles}>
              <View style={{marginVertical: 10, marginHorizontal: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../images/cart2.png')} />
                  <Text
                    style={{
                      fontSize: 24,
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}
                    onPress={()=>props.navigation.navigate('Cart')}>
                    Cart
                  </Text>
                  <Image
                    source={require('../images/move_forward.png')}
                    style={{
                      height: 30,
                      width: 30,
                      alignItems: 'center',
                      right: -195,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../images/favourite.png')} />

                  <Text
                    style={{
                      fontSize: 24,
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}>
                    Favourite
                  </Text>
                  <Image
                    source={require('../images/move_forward.png')}
                    style={{height: 30, width: 30, right: -140}}
                  />
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../images/notifications.png')} />

                  <Text
                    style={{
                      fontSize: 24,
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}>
                    Notifications
                  </Text>
                  <Image
                    source={require('../images/move_forward.png')}
                    style={{height: 30, width: 30, right: -100}}
                  />
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../images/payment_method.png')} />

                  <Text
                  onPress={()=>props.navigation.navigate('Payment Method')}
                    style={{
                      fontSize: 24,
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}>
                    Payment Method
                  </Text>
                  <Image
                    source={require('../images/move_forward.png')}
                    style={{height: 30, width: 30, right: -55}}
                  />
                </View>
              </View>
            </View>

            {/* 
============================card third================================= */}
            <View style={styles.card_styles}>
              <View style={{marginVertical: 10, marginHorizontal: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../images/personal_info.png')} />
                  <Text
                    style={{
                      fontSize: 24,
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}>
                    FAQ's
                  </Text>
                  <Image
                    source={require('../images/move_forward.png')}
                    style={{
                      height: 30,
                      width: 30,
                      alignItems: 'center',
                      right: -175,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../images/address.png')} />

                  <Text
                    style={{
                      fontSize: 24,
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}>
                    Users Review
                  </Text>
                  <Image
                    source={require('../images/move_forward.png')}
                    style={{height: 30, width: 30, right: -90}}
                  />
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../images/settings.png')} />

                  <Text
                    style={{
                      fontSize: 24,
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}>
                    Settings
                  </Text>
                  <Image
                    source={require('../images/move_forward.png')}
                    style={{height: 30, width: 30, right: -145}}
                  />
                </View>
              </View>
            </View>
            {/* 
========================card fourth==================== */}
            <View style={styles.card_styles}>
              <View style={{marginVertical: 10, marginHorizontal: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../images/logout.png')} />
                  <Text
                    style={{
                      fontSize: 24,
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}>
                    Log Out
                  </Text>
                  <Image
                    source={require('../images/move_forward.png')}
                    style={{
                      height: 30,
                      width: 30,
                      alignItems: 'center',
                      right: -150,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  card_styles: {
    backgroundColor: '#F6F8FA',
    borderRadius: 20,
    marginVertical: 15,
    marginBottom: 10,
  },
});
