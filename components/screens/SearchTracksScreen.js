/*
– Une vue permettant 
    - d’effectuer une recherche
        - par artistes
        - par nom de track
    - de récupérer une liste de résultats
        - affichage d'une liste d'éléments sélectionnables
*/

import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyTracksToAddList } from '../../slices/tracksToAddToTracksBaseSlice';
import { setUserAPIRequestQuery, emptyUserAPIRequestQuery, setUserAPIRequestResults, emptyUserAPIRequestResults } from '../../slices/userAPIRequestSlice';
import { addTrackToUserTracksBase } from '../../slices/userTracksBaseSlice';
import Ionicons from '@expo/vector-icons/Ionicons';


import ListItemTrack from '../list-items/ListItemTrack';



export default function SearchTracksScreen({ navigation, route }) {

    const dispatch = useDispatch();
    const userAPIRequestQuerySelector = useSelector(state => state.userAPIRequest.query);
    const userAPIRequestResultsSelector = useSelector(state => state.userAPIRequest.results);
    const userTracksBaseSelector = useSelector(state => state.userTracksBase);

    const [isAddToTracksBaseButtonActive, setAddToTracksBaseButtonActive] = useState(false);
    const tracksToAddToTracksBaseSelector = useSelector(state => state.tracksToAddToTracksBase);
    
    useEffect( () => {
        console.log(tracksToAddToTracksBaseSelector[tracksToAddToTracksBaseSelector.length-1]);
        // console.log("TEST");
        if (tracksToAddToTracksBaseSelector.length > 0) {
            setAddToTracksBaseButtonActive(true);
        } else if (tracksToAddToTracksBaseSelector.length == 0) {
            setAddToTracksBaseButtonActive(false);
        }
        console.log("Il y a désormais", tracksToAddToTracksBaseSelector.length, "morceaux dans la liste temporaire.")
    }, [tracksToAddToTracksBaseSelector])


    //~ À remplacer par la requête API  (rôle assuré par la fonction locale search() )
    //~ https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/
    var tracks = [
        {
            title: "Titre 1",
            author: "Artiste 1",
            albumTitle: "Album 1",
            releaseYear: "2001"
        },
        {
            title: "Titre 2",
            author: "Artiste 2",
            albumTitle: "Album 2",
            releaseYear: "2002"
        },
        {
            title: "Titre 3",
            author: "Artiste 3",
            albumTitle: "Album 3",
            releaseYear: "2003"
        },
    ];
    //~



    // const userSearchResults = () => {

    // }

    function getSelectedTracks() {

        //~ récupère la valeur de la slice "tracksToAddToUserTracksBase"
        //~ note : ce slice aura été modifié via le click sur les CheckBox respectives des instances du composant ListItemTrack, et sa valeur sera la liste des morceaux à ajouter à la trackbase
        return tracksToAddToTracksBaseSelector;
    }

    function addToTrackbase() {

        //~ 1ère étape
        //_ const selectedTracks = getSelectedTracks();
        const selectedTracks = getSelectedTracks();

        //~ 2ème étape
        //~ ajoute les tracks sélectionnées à la trackbase
        /*
        _ dispatch() => 
        */
        selectedTracks.forEach(track => {
            if (!userTracksBaseSelector.includes(track)) {
                dispatch(addTrackToUserTracksBase(track));
            }
        })

    }

    function onChangeText(text) {

        //~ assigner la value du TextInput à l'état de la slice "userAPIRequest"
        //~ cette variable est consultée par un composant à chaque fois qu'il a besoin de savoir s'il y a une requête
        //~ et si oui, faire cette requête à l'API
        console.log(text);
        dispatch(setUserAPIRequestQuery(text));
    }

    function updateSearchResults(data) {
        
        console.log(data.results.length + " médias trouvés.");
        dispatch(setUserAPIRequestResults(data.results))
        console.log(userAPIRequestResultsSelector);
        /*
        {
            title: media.trackName,
            artist: media.artistName,
            albumTitle: media.collectionName,
            releaseYear: media.releaseDate
        }
        */
        // results.forEach(media => {
        //     tracks.push(
        //         {
        //             title: media.trackName,
        //             author: media.artistName,
        //             albumTitle: media.collectionName,
        //             releaseYear: media.releaseDate

        //         },

        //     )
        // })


        // console.log(tracks[0])
    }

    function search() {

        //~ récupérer l'état de la slice "userAPIRequest"
        //~ faire la requête API à partir de cette valeur
        //~ mettre à jour la variable `tracks`
        let query = userAPIRequestQuerySelector;
        const API_QUERY_URL = `https://itunes.apple.com/search?media=music&term=${query}`;
        // console.log(API_QUERY_URL);

        fetch(API_QUERY_URL)
            .then(response => response.json())
            .then(jsonData => updateSearchResults(jsonData));
            // .then(data => updateSearchResults(data));
    }

    // function emptyTracksToAddToTracksBaseList() {
    //     // dispatch(emptyTracksToAddList());
    //     persistor.purge()
    //     console.log(tracksToAddToTracksBaseSelector.length)
    //     console.log("La liste temporaire est vide.");
    // }


    return (

        <View
            style={styles.container}
        >
            {/* <Text title="Recherche"></Text> */}

            <View
                style={styles.buttonsView}
            >
                {/* <Ionicons 
                    name="trash" 
                    size={30} 
                    color='grey'
                    onPress={() => emptyTracksToAddToTracksBaseList()}
                /> */}

                <Button
                    style={styles.addButton}
                    title="Ajouter à la trackbase"
                    color='grey'
                    disabled={!isAddToTracksBaseButtonActive}
                    onPress={() => addToTrackbase()}
                ></Button>

                {/* <Button
                    title="Supprimer"
                    onPress={() => suppressTrack()}
                ></Button> */}
            </View>

            <ScrollView
                style={styles.list}
            >
                {userAPIRequestResultsSelector.map((track, index) => {
                    return (
                        <View>
                            <ListItemTrack key={index} data={track} from="SearchTracksScreen" />
                        </View>
                    )
                })}
            </ScrollView>

            <View
                style={styles.searchView}
            >
                <TextInput
                    style={styles.searchInput}
                    onChangeText={text => onChangeText(text)}
                    placeholder="Chercher un titre, un artiste, un album..."
                />
                <Button
                    title="Go"
                    onPress={() => search()}
                >
                </Button>
            </View>

            {/* 
             */}

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    list: {
        width: "100%",
        marginBottom: 64,
        display: "flex",
    },
    // buttonsView : {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     padding: 24
    // },
    searchView: {
        position: 'absolute',
        // paddingLeft: 24,
        paddingBottom: 16,
        paddingTop: 16,
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
        backgroundColor: 'rgba(255,255,255,1)',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    searchInput: {
        // marginTop: 16,
        height: 24
    }
})