import { useEffect, useState } from "react"
import { StyleSheet, Pressable, Text, Animated } from "react-native"

const Options = ({ opacity, height, bool }) => {

  const [opacityText1, setOpacityText1] = useState(new Animated.Value(0))
  const [opacityText2, setOpacityText2] = useState(new Animated.Value(0))
  const [opacityText3, setOpacityText3] = useState(new Animated.Value(0))
  const [opacityText4, setOpacityText4] = useState(new Animated.Value(0))
  const [opacityText5, setOpacityText5] = useState(new Animated.Value(0))


  useEffect(() => {
    
    if(bool === false) {
      
      Animated.timing(opacityText1, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      }).start()

      Animated.timing(opacityText2, {
        toValue: 1,
        duration: 300,
        delay: 100,
        useNativeDriver: false
      }).start()

      Animated.timing(opacityText3, {
        toValue: 1,
        duration: 300,
        delay: 200,
        useNativeDriver: false
      }).start()

      Animated.timing(opacityText4, {
        toValue: 1,
        duration: 300,
        delay: 300,
        useNativeDriver: false
      }).start()

      Animated.timing(opacityText5, {
        toValue: 1,
        duration: 300,
        delay: 400,
        useNativeDriver: false
      }).start()

    } else {

      setOpacityText1(new Animated.Value(0))
      setOpacityText2(new Animated.Value(0))
      setOpacityText3(new Animated.Value(0))
      setOpacityText4(new Animated.Value(0))
      setOpacityText5(new Animated.Value(0))

    }
    
  }, [bool])

  const onPress = () => {
    alert("Pressed")
  }

  return(
    <Animated.View style={[styles.options, {opacity: opacity, height: height}]}>

      <Animated.View style={styles.row}>
      </Animated.View>
      
      <Animated.View style={[styles.row, {opacity: opacityText1}]}>
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            {backgroundColor: pressed ? '#DDD' : '#EEE'}
          ]}
          onPress={onPress}
        >
          <Text style={styles.text}>
            Option 1
          </Text>
        </Pressable>
      </Animated.View>
      
      <Animated.View style={[styles.row, {opacity: opacityText2}]}>
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            {backgroundColor: pressed ? '#DDD' : '#EEE'}
          ]}
          onPress={onPress}
        >
          <Text style={styles.text}>
            Option 2
          </Text>
        </Pressable>
      </Animated.View>
      
      <Animated.View style={[styles.row, {opacity: opacityText3}]}>
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            {backgroundColor: pressed ? '#DDD' : '#EEE'}
          ]}
          onPress={onPress}
        >
          <Text style={styles.text}>
            Option 3
          </Text>
        </Pressable>
      </Animated.View>
      
      <Animated.View style={[styles.row, {opacity: opacityText4}]}>
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            {backgroundColor: pressed ? '#DDD' : '#EEE'}
          ]}
          onPress={onPress}
        >
          <Text style={styles.text}>
            Option 4
          </Text>
        </Pressable>
      </Animated.View>
      
      <Animated.View style={[styles.row, {opacity: opacityText5}]}>
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            {backgroundColor: pressed ? '#DDD' : '#EEE'}
          ]}
          onPress={onPress}
        >
          <Text style={styles.text}>
            Option 5
          </Text>
        </Pressable>
      </Animated.View>
    
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  options: {
    width: '70%',
    backgroundColor: '#EEE',
    borderRadius: 10,
    position: 'absolute',
  },

  row: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
  },

  pressable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 10
  },

  text: {
    fontSize: 18,
    marginLeft: 20
  }

})

export default Options