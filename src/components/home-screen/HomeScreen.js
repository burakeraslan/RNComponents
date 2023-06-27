import React from "react"
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native"

const HomeScreen = ({navigation}) => {

  return(
    <View style={styles.container}>
      
      <StatusBar backgroundColor="#FF6347"/>

      <TouchableOpacity
        style={styles.stack}
        onPress={()=>{
          navigation.navigate("Search Bar")
        }}  
      >
        <Text style={styles.text}>Search Bar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.stack}
        onPress={()=>{
          navigation.navigate("Search Box")
        }}  
      >
        <Text style={styles.text}>Search Box</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },

  stack: {
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    padding: 10,
    width: '90%',
    height: 50,
    marginTop: 10,
    borderRadius: 15,
  },

  text: {
    color: '#FFF',
    fontSize: 18,
  }

})
export default HomeScreen