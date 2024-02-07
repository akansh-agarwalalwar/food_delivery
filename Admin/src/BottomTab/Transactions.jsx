import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTab from '../BottomTab/BottomTab';
const Transactions = () => {
  return (
    <View  style={styles.container}>
      <BottomTab/>
      <Text>Transactions</Text>
    </View>
  )
}

export default Transactions

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})