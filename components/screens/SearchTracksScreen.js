/*
– Une vue permettant 
    - d’effectuer une recherche
        - par artistes
        - par nom de track
    - de récupérer une liste de résultats
        - affichage d'une liste d'éléments sélectionnables
*/

import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';

import ListItemTrack from '../list-items/ListItemTrack';

export default function SearchTracksScreen({navigation, route}) {


    //~ À remplacer par la requête API  (rôle assuré par la fonction locale search() )
    //~ https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/
    var tracks = [
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

    // const userSearchResults = () => {
    
    // }
    

    function onChangeText() {

        //~ assigner la value du TextInput à l'état de la slice "userAPIQuery"
        //~ cette variable est consultée par un composant à chaque fois qu'il a besoin de savoir s'il y a une requête
        //~ et si oui, faire cette requête à l'API
    }

    function search() {

        //~ récupérer l'état de la slice "userAPIQuery"
        //~ faire la requête API à partir de cette valeur
        //~ mettre à jour la variable `tracks`
    }


    return (

        <View
            style={styles.container}
        >
            {/* <Text title="Recherche"></Text> */}

            <View
                style={styles.buttonsView}
            >
                <Button
                    style={styles.addButton}
                    title="Ajouter à la trackbase"
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
                    return <ListItemTrack key={index} data={track} />
                })}
            </ScrollView>

            <View
                style={styles.searchView}
            >
                <TextInput
                    style={styles.searchInput}
                    onChangeText={onChangeText}
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
        marginTop: 24,
        display: "flex",
    },
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