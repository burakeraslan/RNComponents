import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "./src/components/home-screen/HomeScreen"
import SearchBar from "./src/components/search-bar/SearchBar"
import SearchBox from "./src/components/search-box/SearchBox"
import ThreeDotMenu from "./src/components/three-dot-menu/ThreeDotMenu"

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

      </Stack.Navigator>
    </NavigationContainer>
  )
}