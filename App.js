// Une app permettant d'utiliser l'API iTunes Seeker

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Track from './components/Track';
import Home from './components/Home';
import Track from './components/Track';
import UserTrackBaseScreen from './components/screens/UserTracksBaseScreen';
import SearchTracksScreen from './components/screens/SearchTracksScreen';

import { createSlice } from '@reduxjs/toolkit';
// import ListItemTrack from './components/list-items/ListItemTrack';



export default function App() {

  const Stack = createNativeStackNavigator();

  //~ Créer la slice "userTracksBase"
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

  //~ Créer la slice "userAPIQuerySlice" qui stocke la dernière requête saisie par l'utilisateur
  const userAPIQuerySlice = createSlice({
    name: "userAPIQuery",
    initialState: "",
    reducers: {
      updateQuery: (state, action) => {

      }
    }
  })
  //~

  //~ Créer la slice "tracksToDeleteFromTracksBase"
  const tracksToDeleteFromTracksBaseSlice = createSlice({
    name: "tracksToDeleteFromTracksBase",
    initialState: [],
    reducers: {
      addTrack: (state, action) => {

      },
      removeTrack: (state, action) => {

      }
    }
  })
  //~

  //~ Créer la slice "tracksToAddToTracksBase"
  const tracksToAddToTracksBaseSlice = createSlice({
    name: "tracksToAddToTracksBase",
    initialState: [],
    reducers: {
      addTrack: (state, action) => {

      },
      removeTrack: (state, action) => {

      }
    }
  })
  //~

  //~ Créer la slice "currentTrack"
  const currentTrackSlice = createSlice({
    name: "currentTrack",
    initialState: {},
    reducers: {
      setTrack: (state, action) => {

      }
    }
  })
  //~



  return (

    <NavigationContainer>
      {/* <Text title="iTunes Seeker"></Text> */}
      {/*//~ <Provider store={store}> */}
        <Stack.Navigator initialRouteName='iTunes Seeker'>
          <Stack.Screen name={'iTunes Seeker'} component={Home}></Stack.Screen>
          <Stack.Screen name={'Recherche'} component={SearchTracksScreen}></Stack.Screen>
          <Stack.Screen name={'Mes morceaux'} component={UserTrackBaseScreen}></Stack.Screen>
          <Stack.Screen name={'Track'} component={Track}></Stack.Screen>
          {/* <Stack.Screen name={'ListItemTrack'} component={ListItemTrack}></Stack.Screen> */}
        </Stack.Navigator>
      {/*//~ </Provider> */}

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
