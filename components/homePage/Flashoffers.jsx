import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Flashoffers = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginVertical: 50}}>
      <View style={styles.flashOFfers}>
        <View style={{flexDirection:'row', position:'relative'}}>
        <Image source={require('../images/flash_offer.png')} />
        <Image
          source={require('../images/flash_offer2.png')}
          style={{marginLeft: 10}}
        />
        </View>
      </View>
    </ScrollView>
  );
};

export default Flashoffers;

const styles = StyleSheet.create({
  flashOFfers: {
  
  },
});
