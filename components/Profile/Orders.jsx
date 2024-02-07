import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const Orders = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
        <ScrollView vertical={true} showsVerticalScrollIndicator={false} >
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        
        <View
          style={{
            flexDirection: 'row',
            position: 'relative',
            justifyContent: 'space-between',
            width: '90%',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../images/back2.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../images/filter2.png')} />
          </TouchableOpacity>
        </View>
        <View style={{position: 'relative', marginVertical: 30}}>
          <Text style={{color: '#181C2E', fontSize: 18}}>Food</Text>
          <Image
            source={require('../images/line.png')}
            style={{marginTop: 20}}
          />
          <View style={{flexDirection: 'column', marginTop: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/pizzahut.png')}
                style={{height: 80, width: 80}}
              />
              <View style={{marginLeft: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 250,
                  }}>
                  <Text
                    style={{color: '#181C2E', fontWeight: '700', fontSize: 18}}>
                    Pizza Hut
                  </Text>
                  <Text>#162432</Text>
                </View>
                <Text style={{marginTop: 10, fontSize: 16, color: '#181C2E'}}>
                  $35.25 | 03 Items
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between', width:350}}>
                <TouchableOpacity> 
                    <View style={styles.rate_container}>
                        <Text style={styles.rate_text}>Rate</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity> 
                <View style={styles.reOrder_container}>
                        <Text style={styles.reOrder_text}>Re-Order</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{position: 'relative', marginVertical:-20}}>
          <Text style={{color: '#181C2E', fontSize: 18}}>Drink</Text>
          <Image
            source={require('../images/line.png')}
            style={{marginTop: 20}}
          />
          <View style={{flexDirection: 'column', marginTop: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/burger1.jpg')}
                style={{height: 80, width: 80}}
              />
              <View style={{marginLeft: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 250,
                  }}>
                  <Text
                    style={{color: '#181C2E', fontWeight: '700', fontSize: 18}}>
                    MC Donald
                  </Text>
                  <Text>#240112</Text>
                </View>
                <Text style={{marginTop: 10, fontSize: 16, color: '#181C2E'}}>
                  $40.15 | 02 Items
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between', width:350}}>
                <TouchableOpacity> 
                    <View style={styles.rate_container}>
                        <Text style={styles.rate_text}>Rate</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity> 
                <View style={styles.reOrder_container}>
                        <Text style={styles.reOrder_text}>Re-Order</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{position: 'relative', marginVertical:30}}>
          <Text style={{color: '#181C2E', fontSize: 18}}>Drink</Text>
          <Image
            source={require('../images/line.png')}
            style={{marginTop: 20}}
          />
          <View style={{flexDirection: 'column', marginTop: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/glass_Order.png')}
                style={{height: 80, width: 80}}
              />
              <View style={{marginLeft: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 250,
                  }}>
                  <Text
                    style={{color: '#181C2E', fontWeight: '700', fontSize: 18}}>
                    MC Donald
                  </Text>
                  <Text>#242432</Text>
                </View>
                <Text style={{marginTop: 10, fontSize: 16, color: '#181C2E'}}>
                  $10.20 | 01 Items
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between', width:350}}>
                <TouchableOpacity> 
                    <View style={styles.rate_container}>
                        <Text style={styles.rate_text}>Rate</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity> 
                <View style={styles.reOrder_container}>
                        <Text style={styles.reOrder_text}>Re-Order</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
    rate_container:{
       borderColor:'#FF4B3A',
       width:139,
       height:45,
       alignItems:'center',
       justifyContent:'center', 
       marginVertical:25,
    borderRadius:10,
    backgroundColor:'#FFF',
    borderWidth:2,
    marginLeft:10
    

    },
    rate_text:{
        color:'#FF4B3A',
        fontSize:16,
        fontWeight:'700',
    },
    reOrder_container:{
        backgroundColor:'#FF4B3A',
        height:45, 
        width:139,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginVertical:25,
        
    },
    reOrder_text:{
        color:'#FFF',
        fontSize:16,
        fontWeight:'700',

    }
});
