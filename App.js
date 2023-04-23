// Une app permettant d'utiliser l'API iTunes Seeker

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Track from './components/Track';
import TabNav from './components/TabNav';
import UserTrackBaseScreen from './components/screens/UserTracksBaseScreen';
import SearchTracksScreen from './components/screens/SearchTracksScreen';

import { createSlice } from '@reduxjs/toolkit';



export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  //~ Créer le store "userTracksBase"
  const userTracksBaseSlice = createSlice({
    name: "userTracksBase",
    initialState: [],
    reducers: {
      addTrack: (state, action) => {

      },
      removeTrack: (state, action) => {

      }
    }
  })
  //~

  return (

    <NavigationContainer>
      {/* <Text title="iTunes Seeker"></Text> */}
      <Stack.Navigator >
        <Stack.Screen name={'Recherche'} component={SearchTracksScreen}></Stack.Screen>
        <Stack.Screen name={'Mes morceaux'} component={UserTrackBaseScreen}></Stack.Screen>
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Recherche" component={SearchTracksScreen}></Tab.Screen>
        <Tab.Screen name="Mes morceaux" component={UserTrackBaseScreen}></Tab.Screen>
      </Tab.Navigator> */}
    </NavigationContainer>
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
