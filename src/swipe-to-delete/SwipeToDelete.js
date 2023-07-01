import React from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import Item from "./Item"

const SwipeToDelete = () => {

  const data = [
    {
      id: 1,
      title: "Item 1",
      date: "10 March 2023",
      location: "Maltepe, Istanbul",
      category: "Finance",
      priority: "Low",
      priorityColor: "#FEE101"
    },

    {
      id: 2,
      title: "Item 2",
      date: "17 July 2023",
      location: "Kadikoy, Istanbul",
      category: "Friends",
      priority: "High",
      priorityColor: "#FF4040"
    },

    {
      id: 3,
      title: "Item 3",
      date: "24 November 2023",
      location: "Besiktas, Istanbul",
      category: "Music",
      priority: "Medium",
      priorityColor: "#FF8000"
    },

    {
      id: 4,
      title: "Item 4",
      date: "28 May 2023",
      location: "Beyoglu, Istanbul",
      category: "School",
      priority: "Medium",
      priorityColor: "#FF8000"
    },
  ]

  return(
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {data.map(e => {
          return <Item key={e.id} data={e} />
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE",
    alignItems: "center"
  },

  scroll: {
    width: "90%",
    height: "100%"
  }
})

export default SwipeToDelete