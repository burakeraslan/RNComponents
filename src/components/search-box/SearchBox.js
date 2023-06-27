import { useEffect, useState } from "react"
import { View, StyleSheet, TouchableOpacity, Animated, Dimensions } from "react-native"

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import UserList from "./UserList"
import Suggestions from "./Suggestions"
import Input from "./Input"

const SearchBox = ({ navigation }) => {

  const screenHeight = Dimensions.get('window').height

  const [search, setSearch] = useState(false)
  const [barHeight, setBarHeight] = useState(new Animated.Value(screenHeight*0.1))
  
  const [username, setUsername] = useState('')
  const [userList, setUserList] = useState([])
  
  const getUserList = () => {

    if(username.length<1){
      alert("Please enter username")

      if(userList.length > 0){
        setUserList([])
      }
      return
    }

    fetch(`https://api.github.com/search/users?q=${username}`)
      .then(res => res.json())
      .then(data => {
        setUserList(data.items)
      })
  }

  useEffect(() => {
    if(search === true) {
      
      Animated.timing(
        barHeight, {
          toValue: screenHeight*0.17,
          duration: 200,
          useNativeDriver: false
        }
      ).start()

    } else{
      Animated.timing(
        barHeight, {
          toValue: screenHeight*0.1,
          duration: 200,
          useNativeDriver: false
        }
      ).start()

    }
  }, [search])
 
  return(
    <View style={styles.container}>
      
      <Animated.View style={[styles.bar, {height: barHeight}]}>

        <View style={[styles.button, {height: screenHeight*0.1}]}>
          <TouchableOpacity 
            onPress={()=>{
              if (search === true){
                setSearch(false)
                setUserList([])
              } else{
                navigation.goBack()
              }    
            }}
          >
            <FontAwesome name="arrow-left" size={25} color="#fff" />
          </TouchableOpacity>

          {
            search && (
              <Input setUsername={setUsername} ></Input>
            )
          }

          <TouchableOpacity 
            onPress={()=>{
              if (search === false){
                setSearch(true)
              } else{
                getUserList()
              }
            }}
          >
            <FontAwesome name="search" size={25} color="#fff" />
          </TouchableOpacity>
        </View>

        {
          search && (
            <Suggestions></Suggestions>
          )
        }

      </Animated.View>
      
      { search && (
          <UserList userList={userList}></UserList>
        ) 
      }

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center'
  },

  bar: {
    width: '100%',
    backgroundColor: '#192a56',
  },

  button: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center'
  }

})

export default SearchBox