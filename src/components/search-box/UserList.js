import { StyleSheet, Text, FlatList, Image, TouchableOpacity } from "react-native"

const UserList = ({ userList }) => {

  const renderItem = ({ item }) => {

    return(
      <TouchableOpacity style={styles.user}>
        <Image
          style={styles.image}
          source={{uri:`${item.avatar_url}`}}
        />
        <Text style={styles.text}>
          {item.login}
        </Text>
      </TouchableOpacity>
    )
  }

  return(
    <FlatList
      data = {userList}
      keyExtractor={(item) => item.login.toString()}
      renderItem={renderItem}
      style={{width: '100%', backgroundColor: '#fff'}}
    />
  )
}

const styles = StyleSheet.create({
  
  user: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row'
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10
  },

  text: {
    color: '#192a56',
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "300"
  }

})

export default UserList