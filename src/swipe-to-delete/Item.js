import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Item = ({ data }) => {

  const [isSwiped, setIsSwiped] = useState(false)

  const handleSwipe = () => {
    setIsSwiped(!isSwiped)
  }

  const translateValue = new Animated.Value(0)
  const collapseValue = new Animated.Value(1)

  useEffect(() => {
    if (isSwiped) {
      Animated.timing(translateValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start()

      const timer = setTimeout(() => {
        setIsSwiped(false)
      }, 3000)

      return () => clearTimeout(timer)
    } else {
      Animated.timing(collapseValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
  }, [isSwiped])
  
  const swipeTransform = {
    transform: [{
      translateX: isSwiped ? translateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -200]
      }) : collapseValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -200]
      })
    }]
  }

  return(
    <View style={styles.container} >
      <Animated.View style={[styles.items, swipeTransform]}>
        <View style={styles.itemsLeft}>
          <Text style={styles.itemsTitle}>
            {data.title}
          </Text>

          <View style={styles.itemsDetails}>
            <MaterialIcons name="date-range" size={20} color="#000" />
            <Text style={styles.itemsDetailsText}>{data.date}</Text>
          </View>

          <View style={styles.itemsDetails}>
            <MaterialIcons name="location-on" size={20} color="#000" />
            <Text style={styles.itemsDetailsText}>{data.location}</Text>
          </View>

          <View style={styles.itemsDetails}>
            <MaterialIcons name="border-all" size={20} color="#000" />
            <Text style={styles.itemsDetailsText}>{data.category}</Text>
          </View>

        </View>

        <View style={styles.itemsRight}>
          <View style={[styles.priorityColor, {backgroundColor: data.priorityColor}]}></View>
          <Text style={styles.priorityText}>
            {data.priority}  
          </Text>
          <Text style={styles.priorityText}>
            Priority
          </Text>
          { isSwiped ? (
              <TouchableOpacity
                style={styles.swipeButton}
                onPress={handleSwipe}
              >
                <MaterialIcons name="chevron-right" size={30} color="#000" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.swipeButton}
                onPress={handleSwipe}
              >
                <MaterialIcons name="chevron-left" size={30} color="#000" />
              </TouchableOpacity>
            )
          }
        </View>
      </Animated.View>

      <View style={styles.openedArea}>
        <TouchableOpacity style={[styles.openedButtons, {backgroundColor: "#50C878"}]}>
          <MaterialIcons name="check" size={40} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.openedButtons, {backgroundColor: "#FF4040"}]}>
          <MaterialIcons name="delete-outline" size={40} color="#FFF" />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    paddingTop: 10,
  },
  
  items: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#FFF",
    zIndex: 1
  },

  itemsLeft: {
    width: "80%",
    paddingLeft: 10
  },

  itemsTitle: {
    fontSize: 24,
    fontWeight: "300",
    color: "#4D6FFF",
    marginVertical: 5
  },

  itemsDetails: {
    alignItems: "center",
    flexDirection: "row"
  },

  itemsDetailsText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#000",
    marginVertical: 2,
    marginHorizontal: 5
  },

  itemsRight: {
    width: "20%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center"
  },

  priorityColor: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginBottom: 5
  },

  priorityText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#444"
  },

  swipeButton: {
    width: "100%",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  openedArea: {
    width: 200,
    height: "100%",
    position: "absolute",
    right: 0,
    top: 10,
    flexDirection: "row",
    zIndex: 0
  },

  openedButtons: {
    width: 90,
    height: "100%",
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default Item