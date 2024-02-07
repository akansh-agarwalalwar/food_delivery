import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTab from '../BottomTab/BottomTab';
const NotificationAdmin = () => {
  return (
    <View style={styles.container}>
      <BottomTab/>
      <Text>NotificationAdmin</Text>
    </View>
  )
}

export default NotificationAdmin

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})