import { useState } from "react"
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native"

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Options from "./Options"

const Menu = () => {

  const [bool, setBool] = useState(true)
  const [opacity, setOpacity] = useState(new Animated.Value(0))
  const [height, setHeight] = useState(new Animated.Value(50))

  const onPress = () => {

    if (bool === true) {

      setBool(false)
      
      Animated.timing(height, {
        toValue: 300,
        duration: 300,
        useNativeDriver: false
      }).start()

      setOpacity(new Animated.Value(1))

    } else {

      setBool(true)
      
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start(() => {
        setHeight(new Animated.Value(50))
      })
    }

  }

  return(
    <View style={styles.container}>

      {
        bool ? (
          <TouchableOpacity
            style={styles.press}
            onPress={onPress}
          >
            <FontAwesome name="ellipsis-v" size={25} color="#000" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
          style={styles.press}
          onPress={onPress}
          >
            <FontAwesome name="arrow-left" size={25} color="#000" />
          </TouchableOpacity>
        )
      }

      <Options opacity={opacity} height={height} bool={bool} ></Options>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  
  press: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    zIndex: 1,
  }

})

export default Menu