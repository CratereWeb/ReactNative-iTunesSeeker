/*
Une vue d’affichage d’un morceau
*/
import { StyleSheet, Text, View, Button } from 'react-native';



export default function Track(props) {



    const trackData = {
        trackName:"Titre 1",
        artistName:"Artiste 1",
        collectionName:"Album 1",
        releaseDate:"2001"
    }

    function getCurrentTrack() {

        //~ Récupère l'état de la slice "currentTrack" 
        //~ afin que le composant sache quelles données afficher
    }

    function addTrackToUserBase() {
        console.log("Ajout d'un morceau à la trackbase...");

        //~ Ajouter le morceau à l'état de la slice "userTracksBase"

    }


    return (
        <View
            style={styles.container}
        >   
            <View
                style={styles.dataView}
            >
                <Text
                    style={styles.trackName}
                >{trackData.trackName}</Text>
                <Text
                    style={styles.artistName}
                >{trackData.artistName}</Text>
                <Text
                    style={styles.collectionName}
                >{trackData.collectionName}</Text>
                <Text
                    style={styles.releaseDate}
                >{trackData.releaseDate}</Text>

            </View>

            <Button
                style={styles.addButton}
                title="Ajouter à la trackbase"
                onPress={() => {
                    addTrackToUserBase()
                }}
            ></Button>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'flex-end'
    },
    title: {
        fontSize: 32,
        fontWeight: 600
    },
    author: {
        fontSize: 26,
        fontWeight: 400
    },
    albumTitle: {
        fontSize: 20,
        fontWeight: 500
    },
    releaseYear: {
        fontSize: 20,
        fontWeight: 400
    },
    addButton: {
        
    }
});