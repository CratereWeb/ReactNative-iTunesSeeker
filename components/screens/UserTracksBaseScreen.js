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

        //~ Supprimer les morceaux sélectionnés du store "userTracksBase"
    }

    //~ À remplacer par le store
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
    ];
    //~
    

    return (
        <View
            style={styles.container}
        >
            <Text title="Mes morceaux"></Text>

            <ScrollView 
                style={styles.list}
            >
                {tracks.map( (track, index) => {
                    return <ListItemTrack key={index} data={track} />
                })}
            </ScrollView>

            <View
                style={styles.buttonsView}
            >
                <Button
                    style={styles.deleteButton}
                    title="Supprimer"
                    color='grey'
                    onPress={() => suppressTracks()}
                ></Button>

                {/* <Button
                    title="Supprimer"
                    onPress={() => suppressTrack()}
                ></Button> */}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    list: {
        width: "100%",
        marginTop: 24,
        display: "flex",
    },
    buttonsView: {
        width: '100%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 16
    },
    deleteButton: {
        backgroundColor: 'grey'
    }
})
