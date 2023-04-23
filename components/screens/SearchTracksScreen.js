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


    //~ À remplacer par la requête API 
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
    
    function search() {

        //~ modifie la variable `tracks`
        
    }

    function onChangeText() {
        // Pas vraiment grand chose à programmer ici... 
    }


    return (

        <View
            style={styles.container}
        >
            {/* <Text title="Recherche"></Text> */}

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
        marginTop: 8,
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