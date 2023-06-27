import { View, TextInput, StyleSheet } from "react-native"

const Input = ({ setUsername }) => {

  return(
    <View style={{width: '75%', height: '70%'}}>
      <TextInput 
        style={styles.input}
        placeholder="Enter username here"
        placeholderTextColor={'#ddd'}
        onChangeText={setUsername}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#273c75',
    color:'#fff',
    fontSize: 16
  }
})

export default Input