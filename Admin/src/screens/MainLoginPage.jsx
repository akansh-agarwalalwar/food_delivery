import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const MainLoginPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Admin Login')}>
        <View style={styles.viewpage}>
          <Text>Admin Login</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.viewpage}>
          <Text>User Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainLoginPage;

const styles = StyleSheet.create({
  viewpage: {
    backgroundColor: 'orange',
    marginVertical: 20,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    borderRadius: 20,
  },
});
