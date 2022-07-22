import { StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import GameListScreen from './screens/GameListScreen';
import NewGameScreen from './screens/NewGameScreen';
import { useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SettingsScreen from './screens/SettingsScreen';
import FriendsScreen from './screens/FriendsScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const Tab = createBottomTabNavigator();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(`Platform: ${Platform.OS} Status Bar Height: ${StatusBar.currentHeight}`)

  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' />
        
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: 'white'
            },
          }}>
          <Tab.Screen options={{
            headerShown: false,
            // tabBarStyle: {
            //   display: 'none'
            // },
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" color='black' size={size} />
            ),
            tabBarLabel: ({ focused, color }) =>
              (<Text style={{ color: "black" }}>Home</Text>)
          }} name="Home" component={GameListScreen} />
          <Tab.Screen options={{
            headerShown: false,
            // tabBarStyle: {
            //   display: 'none'
            // },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="gamepad" color='black' size={size} />              
            ),
            tabBarLabel: ({ focused, color }) =>
              (<Text style={{ color: "black" }}>Game</Text>)
          }} name="Game" component={GameScreen} />
          <Tab.Screen options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="gamepad" color='black' size={size} />
            ),
            tabBarLabel: ({ focused, color }) =>
              (<Text style={{ color: "black" }}>New Game</Text>)
          }} name="New Game" component={NewGameScreen} />
          <Tab.Screen options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user-friends" color='black' size={size} />
            ),
            tabBarLabel: ({ focused, color }) =>
              (<Text style={{ color: "black" }}>Friends</Text>)
          }} name="Friends" component={FriendsScreen} />
          <Tab.Screen options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color='black' size={size} />
            ),
            tabBarLabel: ({ focused, color }) =>
              (<Text style={{ color: "black" }}>Settings</Text>)
          }} name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
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
