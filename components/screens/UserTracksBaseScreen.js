/*
Une vue affichant la base de données des morceaux enregistrés par l'utilisateur
*/
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import ListItemTrack from '../list-items/ListItemTrack';

export default function UserTrackBaseScreen({navigation, route}) {


    const UserTracksBase = () => {

    };

    function suppressTracks() {
        console.log("Suppression des morceaux sélectionnés...");

        //~ Récupère l'état de la slice "userTracksBase"
        //~ Supprimer les morceaux sélectionnés de la slice "userTracksBase"
    }

    //~ À remplacer par l'état de la slice
    const tracks = [
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
    //~
    

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
                    disabled={true}
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
                        <ListItemTrack 
                            key={index} 
                            data={track} 
                            // onPress={() => {
                            //     navigation.push("Track", {
                            //         data: track
                            //     });
                            // }}
                        />
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
