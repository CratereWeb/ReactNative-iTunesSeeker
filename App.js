// Une app permettant d'utiliser l'API iTunes Seeker

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import Home from './components/Home';
import Track from './components/Track';
import UserTrackBaseScreen from './components/screens/UserTracksBaseScreen';
import SearchTracksScreen from './components/screens/SearchTracksScreen';

// import { createSlice } from '@reduxjs/toolkit';
// import ListItemTrack from './components/list-items/ListItemTrack';



export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='iTunes Seeker'>
            <Stack.Screen name={'iTunes Seeker'} component={Home}></Stack.Screen>
            <Stack.Screen name={'Recherche'} component={SearchTracksScreen}></Stack.Screen>
            <Stack.Screen name={'Mes morceaux'} component={UserTrackBaseScreen}></Stack.Screen>
            <Stack.Screen name={'Track'} component={Track}></Stack.Screen>
            {/* <Stack.Screen name={'ListItemTrack'} component={ListItemTrack}></Stack.Screen> */}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>

    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
