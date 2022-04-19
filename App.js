import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import GameListScreen from './screens/GameListScreen';
import NewGameScreen from './screens/NewGameScreen';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function App() {

  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'purple',
          },
        }}>
        <Tab.Screen options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color='black' size={size} />
          ),
        }} name="Home" component={GameListScreen} />
        <Tab.Screen options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="gamepad" color={color} size={size} />
          )
        }} name="New Game" component={NewGameScreen} />
        <Tab.Screen options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-friends" color={color} size={size} />
          )
        }} name="Friends" component={NewGameScreen} />
        <Tab.Screen options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          )
        }} name="Settings" component={LoginScreen} />
      </Tab.Navigator>
    )
  }

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        {MyTabs()}
      </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
});
