import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const OpenRestraunt = () => {
  return (
    <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'relative',
              }}>
              <Text style={styles.openRestraunts}>Open Restraunts</Text>
              <TouchableOpacity>
                <Text style={styles.openRestraunts}>See All</Text>
              </TouchableOpacity>
            </View>
          </View>
  )
}

export default OpenRestraunt

const styles = StyleSheet.create({
    openRestraunts: {
        color: '#32343E',
        fontSize: 20,
        position: 'relative',
      },
})