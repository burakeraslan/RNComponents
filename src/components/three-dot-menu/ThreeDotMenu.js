import React from "react"
import { View, StyleSheet } from "react-native"

import Menu from "./Menu"

const ThreeDotMenu = () => {
  
  return (
    <View style={styles.container}>
            
      <View style={styles.tab}>
        <Menu></Menu>
      </View>
    
    </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: 'orange'
  },

  tab: {
    width: '100%',
    height: '10%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    padding: 10,
  },

})

export default ThreeDotMenu