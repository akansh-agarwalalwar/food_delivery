import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Items from '../BottomTab/Items';
import Transactions from '../BottomTab/Transactions';
import AddItems from '../BottomTab/AddItems';
import OrderDelivery from '../BottomTab/OrderDelivery';
import NotificationAdmin from '../BottomTab/NotificationAdmin';
import BottomTab from '../BottomTab/BottomTab';

const AdminDasboard = () => {
  
  const [selectTab, setSelectTab ] = useState(0);
  return (
    <View style={styles.container}>
      <BottomTab/>
    </View>
  );
};

export default AdminDasboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
