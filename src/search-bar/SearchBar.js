import { useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native"

import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SearchBar = () => {

  // The initial height of the view that will grow with the animation
  const [heightAnimation, setHeightAnimation] = useState(new Animated.Value(48))
  
  // Control for the height of the list screen to work
  const [focus, setFocus] = useState(false)

  // We will pull data to list
  const [username, setUsername] = useState('')
  const [userList, setUserList] = useState([])
  
  const getUserList = () => {

    if(username.length<1){
      alert("Please enter username")
      if(userList.length>0){
        setUserList([])
      }
      return
    }

    fetch(`https://api.github.com/search/users?q=${username}`,)
      .then(res => res.json())
      .then(data => {
        setUserList(data.items)
      })
  }

  // Height adjustment according to the number of list elements and focus blur control
  useEffect(() => {
    if(userList.length===0){
      Animated.timing(
        heightAnimation, {
          toValue: focus ? 48:48,
          duration: 200,
          useNativeDriver: false
        }
      ).start()
    } else if(userList.length===1){
      Animated.timing(
        heightAnimation, {
          toValue: focus ? 100:48,
          duration: 200,
          useNativeDriver: false
        }
      ).start()
    } else if(userList.length===2){
      Animated.timing(
        heightAnimation, {
          toValue: focus ? 150:48,
          duration: 200,
          useNativeDriver: false
        }
      ).start()
    } else if(userList.length===3){
      Animated.timing(
        heightAnimation, {
          toValue: focus ? 200:48,
          duration: 200,
          useNativeDriver: false
        }
      ).start()
    } else if(userList.length===4){
      Animated.timing(
        heightAnimation, {
          toValue: focus ? 250:48,
          duration: 200,
          useNativeDriver: false
        }
      ).start()
    } else if(userList.length>=5){
      Animated.timing(
        heightAnimation, {
          toValue: focus ? 300:48,
          duration: 200,
          useNativeDriver: false
        }
      ).start()
    }
  }, [focus, userList])

  // The name written to the input and if it is open, the button will be shown to close the view screen, the bool value is returned to control it
  const showClose = () =>{
    if(username.length>0){
      return true
    } else{
      return false
    }
  }

  return(
    <View style={styles.container}>
            
      {/* Search bar design */}
      <View style={styles.searchBar}>
        
        {/* Text input design and some operations */}
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          placeholder="Enter a username here"
          placeholderTextColor={'#DDD'}
          onFocus={()=>{setFocus(true)}}
          value={username}
        >
        </TextInput>

        {
          // The button appears or disappears depending on the bool value returned.
          showClose() && (
            <View style={styles.closeView}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={()=>{
                  setFocus(false)
                  setUsername('')
                  setUserList([])
                }}
              >
                <FontAwesome name="close" size={14} color="#FFF" />
              </TouchableOpacity>
            </View>
          )
        }        

        {/* Icon view design on the left of search bar */}
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.icon}
            onPress={()=>{
              getUserList()
              setFocus(true)
            }}
          >
            <FontAwesome name="search" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* The view will then increase in height */}
      <Animated.ScrollView 
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        style={[styles.list, {height: heightAnimation}]}>
        <View style={{width: '90%', height: 50, borderRadius: 20}}></View>
        {
          // Users are listed
          userList.map((e,i)=>{
            return(
              // To avoid blur when clicked
              <TouchableOpacity 
                style={styles.user}
                key={i}
                // Not important
                onPress={()=>{setFocus(false)}}
              >
                <Image
                  style={styles.avatar}
                  source={{uri:`${e.avatar_url}`}}
                />
                <Text style={styles.username}>
                  {e.login}
                </Text>
             </TouchableOpacity>
            )
          })
        }   
      </Animated.ScrollView>
      <View style={styles.screen}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  searchBar: {
    width: '90%',
    height: 50,
    backgroundColor: '#0097A7',
    borderRadius: 20,
    zIndex: 2,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },

  button: {
    width: '13%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0
  },

  icon: {
    width: 35,
    height: 35,
    backgroundColor: '#00BCD4',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    width: '82%',
    height: '100%',
    padding: 10,
    color: '#FFF',
    borderRadius: 20,
  },

  list: {
    width: '90%',
    position: 'absolute',
    zIndex: 1,
    borderRadius: 20,
    backgroundColor: '#00BCD4',
    marginTop: 10,
  },

  screen: {
    width: '90%',
    height: '80%',
    marginTop: 20,
    backgroundColor: 'orange',
    borderRadius: 20,
    alignItems: 'center'
  },

  user: {
    width: '100%',
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 20,
  },

  username: {
    marginLeft: 10,
    color: '#FFF',
  },

  closeView: {
    width: '5%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  closeButton: {
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default SearchBar