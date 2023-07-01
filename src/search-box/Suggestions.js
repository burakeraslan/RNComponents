import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native"

const Suggestions = () => {
  
  return(
    <ScrollView 
      horizontal = {true}
      style= {styles.scroll}
      showsHorizontalScrollIndicator={false}
    >

      <View style={styles.suggestion}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>First Suggestion</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.suggestion}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>Second Suggestion</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.suggestion}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>Third Suggestion</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    height: '33.4%',
  },

  suggestion: {
    width: 200,
    height: '75%',
    alignItems: 'center',
  },

  touchable: {
    width: '95%',
    height: '100%',
    backgroundColor: '#273c75',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: '#fff',
    fontSize: 16
  }

})

export default Suggestions