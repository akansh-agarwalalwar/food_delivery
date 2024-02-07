import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const BottomTab = () => {
    const navigation =  useNavigation();
  return (
    <View style={styles.bottomTab}>
      <TouchableOpacity 
      onPress={()=> navigation.navigate('Items')}>
          <Image
            source={require('../../../components/images/items.png')}
            style={styles.bottomTabImg}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Admin Transactions')}>
          <Image
            source={require('../../../components/images/transaction.png')}
            style={styles.bottomTabImg}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Add Items')} >
          <Image
            source={require('../../../components/images/add.png')}
            style={[styles.bottomTabImg, {width:34, height:34}] }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Delivered Order Admin')}>
          <Image
            source={require('../../../components/images/order-delivery.png')}
            style={styles.bottomTabImg}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Admin Notifications')}>
          <Image
            source={require('../../../components/images/bell.png')}
            style={styles.bottomTabImg}
          />
        </TouchableOpacity>
      </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({
    bottomTab: {
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
      },
      bottomTabImg:{
        height:30,
        width:30, 
        marginLeft:10,
        marginRight:10
      }
})