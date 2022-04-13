import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import GameListScreen from './screens/GameListScreen';
import NewGameScreen from './screens/NewGameScreen';
import { useState } from 'react';

export default function App() {

  const [currentScreen, setCurrentScreen] = useState('NewGame');
  const [data, setData] = useState({});

  function updateScreenHandler(screenName, data = {}) {
    setCurrentScreen(screenName);
    setData(data);
  }

  function getData() {
    return data;
  }

  function showScreen() {
    switch (currentScreen) {
      case 'Login': return <LoginScreen updateScreen={updateScreenHandler}/>
      case 'Loading': return <LoadingScreen getData={getData} updateScreen={updateScreenHandler} />
      case 'GameList': return <GameListScreen />
      case 'NewGame': return <NewGameScreen />
    } 
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      {showScreen()}
    </View>
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
