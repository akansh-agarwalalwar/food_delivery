import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTab from '../BottomTab/BottomTab';
const OrderDelivery = () => {
  return (
    <View style={styles.container}>
      <BottomTab/>
      <Text>OrderDelivery</Text>
    </View>
  )
}

export default OrderDelivery

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})