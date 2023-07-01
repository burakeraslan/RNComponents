import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "./src/home-screen/HomeScreen"
import SearchBar from "./src/search-bar/SearchBar"
import SearchBox from "./src/search-box/SearchBox"
import ThreeDotMenu from "./src/three-dot-menu/ThreeDotMenu"
import SwipeToDelete from "./src/swipe-to-delete/SwipeToDelete"

export default function App() {

  const Stack = createNativeStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Home Screen"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Search Bar"
          component={SearchBar}
        />

        <Stack.Screen
          name="Search Box"
          component={SearchBox}
        />

        <Stack.Screen
          name="Three-Dot Menu"
          component={ThreeDotMenu}
        />

        <Stack.Screen
          name="Swipe to Delete"
          component={SwipeToDelete}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}