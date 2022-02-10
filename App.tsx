import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from './src/screens/home.screen'
import DetailScreen from './src/screens/detail.screen'


const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Detail'} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App