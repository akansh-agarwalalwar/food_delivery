import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const RoseGarden = () => {
  return (
    <View style={{marginVertical: 20, position: 'relative'}}>
            <View>
              <Image
                source={require('../images/rosegarden.png')}
                style={{width: '100%', height: 170}}
              />
              <Text style={styles.openRestraunts}>Rose Garden Restraunt</Text>
              <Text style={{color: '#A0A5BA', fontSize: 16}}>
                Burger - Chiken - Riche - Wings{' '}
              </Text>
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../images/Star-1.png')} />
                  <Text style={{marginLeft: 5, fontSize: 16, color: '#181C2E'}}>
                    4.7
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 24,
                  }}>
                  <Image source={require('../images/delivery_bus.png')} />
                  <Text style={{marginLeft: 5, fontSize: 16, color: '#181C2E'}}>
                    Free
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 24,
                    position: 'relative',
                  }}>
                  <Image source={require('../images/Clock.png')} />
                  <Text style={{marginLeft: 5, fontSize: 16, color: '#181C2E'}}>
                    20 min
                  </Text>
                </View>
              </View>
            </View>
            </View>
  )
}

export default RoseGarden

const styles = StyleSheet.create({
    openRestraunts: {
        color: '#32343E',
        fontSize: 20,
        position: 'relative',
      },
})