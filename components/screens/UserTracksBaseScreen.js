/*
Une vue affichant la base de données des morceaux enregistrés par l'utilisateur
*/
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import ListItemTrack from '../list-items/ListItemTrack';



import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react';
import { removeTrackFromUserTracksBase } from '../../slices/userTracksBaseSlice';

export default function UserTrackBaseScreen({navigation, route}) {


    
    const dispatch = useDispatch();
    const userTracksBaseSelector = useSelector(state => state.userTracksBase);

    const [isDeleteFromTracksBaseButtonActive, setDeleteFromTracksBaseButtonActive] = useState(false);
    const tracksToDeleteFromTracksBaseSelector = useSelector(state => state.tracksToDeleteFromTracksBase);

    
    useEffect( () => {
        console.log(tracksToDeleteFromTracksBaseSelector[tracksToDeleteFromTracksBaseSelector.length-1]);
        // console.log("TEST");
        if (tracksToDeleteFromTracksBaseSelector.length > 0) {
            setDeleteFromTracksBaseButtonActive(true);
        } else if (tracksToDeleteFromTracksBaseSelector.length == 0) {
            setDeleteFromTracksBaseButtonActive(false);
        }
        console.log("Il y a désormais", tracksToDeleteFromTracksBaseSelector.length, "morceaux dans la liste temporaire 'à supprimer de la trackbase'.")

    }, [tracksToDeleteFromTracksBaseSelector])



    const UserTracksBase = () => {

    };


    function getSelectedTracks() {
        return tracksToDeleteFromTracksBaseSelector;
    }
    

    function suppressTracks() {

        console.log("Suppression des morceaux sélectionnés...");

        //~ Récupère l'état de la slice "userTracksBase"
        const selectedTracks = getSelectedTracks();

        console.log("Tracks to delete :", selectedTracks.length, '=>', selectedTracks);
        
        //~ Supprimer les morceaux sélectionnés de la slice "userTracksBase"
        if (selectedTracks.length > 0) {
            
            selectedTracks.forEach(track => {

                if (userTracksBaseSelector.includes(track)) {
                    console.log("SUPPRIMER");
                    dispatch(removeTrackFromUserTracksBase(track));
                } 
            });
        }
    }

    // function checkAddToTracksBaseList() {
    //     return
    // }

    //~ À remplacer par l'état de la slice
    const tracks = userTracksBaseSelector;
    /* const tracks = [
        {
            title:"Titre 1",
            author:"Artiste 1",
            albumTitle:"Album 1",
            releaseYear:"2001"
        },
        {
            title:"Titre 2",
            author:"Artiste 2",
            albumTitle:"Album 2",
            releaseYear:"2002"
        },
        {
            title:"Titre 3",
            author:"Artiste 3",
            albumTitle:"Album 3",
            releaseYear:"2003"
        },
        {
            title:"Titre 4",
            author:"Artiste 4",
            albumTitle:"Album 4",
            releaseYear:"2004"
        },
        {
            title:"Titre 5",
            author:"Artiste 5",
            albumTitle:"Album 5",
            releaseYear:"2005"
        },
        {
            title:"Titre 6",
            author:"Artiste 6",
            albumTitle:"Album 6",
            releaseYear:"2006"
        },
        {
            title:"Titre 7",
            author:"Artiste 7",
            albumTitle:"Album 7",
            releaseYear:"2007"
        },
    ];
    */
    //~


    console.log(tracks);
    

    return (
        <View
            style={styles.container}
        >
            {/* <Text title="Mes morceaux"></Text> */}

            <View
                style={styles.buttonsView}
            >
                <Button
                    style={styles.deleteButton}
                    title="Supprimer"
                    color='grey'
                    disabled={!isDeleteFromTracksBaseButtonActive}
                    onPress={() => suppressTracks()}
                ></Button>

                {/* <Button
                    title="Supprimer"
                    onPress={() => suppressTrack()}
                ></Button> */}
            </View>

            <ScrollView 
                style={styles.list}
            >
                {tracks.map( (track, index) => {
                    return (
                        <View>
                            <ListItemTrack key={index} data={track} from="UserTracksBaseScreen" />
                        </View>
                    )
                })}
            </ScrollView>

            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    list: {
        width: "100%",
        marginTop: 24,
        display: "flex",
        marginBottom: 72
    },
    // buttonsView: {
    //     width: '100%',
    //     display:'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //     paddingLeft: 16
    // },
    deleteButton: {
        backgroundColor: 'grey'
    }
})
