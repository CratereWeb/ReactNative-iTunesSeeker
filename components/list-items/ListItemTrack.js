/*
Un élément représentant un morceau dans une liste "ScrollView", pour les écrans :
    - résultats de recherche
    - base des morceaux enregistrés par l'utilisateur
*/

import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

import Checkbox from 'expo-checkbox';


export default function ListItemTrack(props, {navigation, route}) {


    //~ Le composant doit mettre à jour la slice lorsqu'on clique sur une CheckBox
    //~ Ainsi, les composants qui listent les morceaux de la requête / de la base de données
    //~ pourront activer/désactiver le bouton "Ajouter/Supprimer un morceau de la trackbase" en consultat l'état de cette slice

    const [isChecked, setChecked] = useState(false);

    useEffect( () => {
        isChecked
        ? console.log(`Le morceau ${props.data.title} est sélectionné`)
        : console.log(`Le morceau ${props.data.title} est désélectionné`);
    }, [isChecked]);

    
    function onPressListItemIcon() {
        
        console.log(`L'utilisateur souhaite visualiser la fiche du morceau ${props.data.title}...`);

        //~ Mettre à jour l'état de la slice "currentTrack"

        //~ Naviguer vers le composant `Track`

        
    }


    return (
        <View 
            style={styles.container}
        >
            <Checkbox
                // style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
            />

            <View
                style={styles.data}
            >

                <Text 
                    style={styles.title}
                >{props.data.title}</Text>
                <Text 
                    //style={styles.author}
                >{props.data.author}</Text>
                <Text 
                    //style={styles.albumTitle}
                >{props.data.albumTitle}</Text>
                <Text 
                    //style={styles.releaseYear}
                >{props.data.releaseYear}</Text>

            </View>

            <Ionicons 
                style={styles.detailsIcon}
                name="arrow-forward-circle" 
                size={32} 
                color="grey"
                onPress={onPressListItemIcon}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        paddingLeft: 24
    },
    data: {
        marginLeft: 14,
        width: '75%'
    },
    title: {
        fontSize: 20,
        fontWeight: 600
    }
})