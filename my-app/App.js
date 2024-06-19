import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/homeScreen';
import LoginScreen from './screens/loginScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component = {LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component = {HomeScreen} options={{headerShown:false}} />       
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}
