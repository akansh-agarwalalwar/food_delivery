import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTab from '../BottomTab/BottomTab';
const Items = () => {
  return (
    <View style={styles.container}>
      <BottomTab/>
      <Text>Items</Text>
    </View>
  )
}

export default Items

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})