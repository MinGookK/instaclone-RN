import React from 'react'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import CreateAccount from '../screens/CreateAccount'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
      }}
    >
      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={Welcome}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: 'white',
        }}
        name="CreateAccount"
        component={CreateAccount}
      />
    </Stack.Navigator>
  )
}
