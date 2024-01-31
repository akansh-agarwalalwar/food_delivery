import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const CheesyRestraunt = () => {
  return (
    <View style={{marginVertical: 15, position: 'relative'}}>
              <Image
                source={require('../images/chessy_restraunt.png')}
                style={{width: '100%', height: 170}}
              />
              <Text style={styles.openRestraunts}>Chessy Restraunt</Text>
              <Text style={{color: '#A0A5BA', fontSize: 16}}>
                Spring Roll - Momos - Chowmein
              </Text>
            
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../images/Star-1.png')} />
                <Text style={{marginLeft: 5, fontSize: 16, color: '#181C2E'}}>
                  4.5
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
                }}>
                <Image source={require('../images/Clock.png')} />
                <Text style={{marginLeft: 5, fontSize: 16, color: '#181C2E'}}>
                  35 min
                </Text>
              </View>
            </View>
            </View>

  )
}

export default CheesyRestraunt

const styles = StyleSheet.create({
  openRestraunts: {
    color: '#32343E',
    fontSize: 20,
    position: 'relative',
  },
})