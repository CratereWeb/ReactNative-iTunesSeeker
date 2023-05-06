/*
Un élément représentant un morceau dans une liste "ScrollView", pour les écrans :
    - résultats de recherche
    - base des morceaux enregistrés par l'utilisateur
*/

import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

import { addTracksToUserTracksBase } from '../../slices/userTracksBaseSlice';
import { addTrackToAddList, removeTrackFromAddList } from '../../slices/tracksToAddToTracksBaseSlice';

import { addTrackToDeleteList, removeTrackFromDeleteList } from '../../slices/tracksToDeleteFromTracksBaseSlice';

import Ionicons from '@expo/vector-icons/Ionicons';

import Checkbox from 'expo-checkbox';
import { useDispatch, useSelector } from 'react-redux';


export default function ListItemTrack(props, {navigation, route}) {


    //~ Le composant doit mettre à jour la slice lorsqu'on clique sur une CheckBox
    //~ Ainsi, les composants qui listent les morceaux de la requête / de la base de données
    //~ pourront activer/désactiver le bouton "Ajouter/Supprimer un morceau de la trackbase" en consultat l'état de cette slice

    const [isChecked, setChecked] = useState(false);
    const [eyeButtonColor, setEyeButtonColor] = useState("#cdcdcd");

    const dispatch = useDispatch();
    const tracksToAddToTracksBaseSelector = useSelector(state => state.tracksToAddToTracksBase);
    const userTracksBaseSelector = useSelector(state => state.userTracksBase);

    const tracksToRemoveFromTracksBaseSelector = useSelector(state => state.tracksToDeleteFromTracksBase);



    useEffect( () => {
        
        if (props.from == "SearchTracksScreen") {
            if (isChecked) {

                console.log(`Le morceau ${props.data.trackName} est sélectionné`);

                if(!tracksToAddToTracksBaseSelector.includes(props.data)) {
                    dispatch(addTrackToAddList(props.data));
                } else {
                    console.log(props.data["trackName"], "est déjà dans la liste temporaire 'à ajouter à la trackbase'.")
                }

            } else {
                console.log(`Le morceau ${props.data.trackName} est désélectionné`);
                dispatch(removeTrackFromAddList(props.data));

            }

        } else if (props.from == "UserTracksBaseScreen") {

            if (isChecked) {

                console.log(`Le morceau ${props.data.trackName} est sélectionné`);

                if(!tracksToRemoveFromTracksBaseSelector.includes(props.data)) {
                    dispatch(addTrackToDeleteList(props.data));
                } else {
                    console.log(props.data["trackName"], "est déjà dans la liste temporaire 'à supprimer de la trackbase'.")
                }

                
            } else {
                console.log(`Le morceau ${props.data.trackName} est désélectionné`);
                dispatch(removeTrackFromDeleteList(props.data));

            }


        }

    }, [isChecked]);

    

    useEffect( () => {
        setChecked(false);
    }, [props.data]); // réinitialise l'état des checkbox lorsque de nouvelles données arrivent

    useEffect( () => {
        setEyeButtonColor("#cdcdcd");
    }, [props.data])

    
    function onPressListItemViewIcon() {

        setEyeButtonColor("#aaaaaa");
        setTimeout( () => {
            setEyeButtonColor("#cdcdcd");
        }, 100);
        
        console.log(`L'utilisateur souhaite visualiser la fiche du morceau ${props.data.trackName}...`);

        console.log(navigation, "navigation");
        
        //~ Mettre à jour l'état de la slice "currentTrack"

        //~ Naviguer vers le composant `Track`

        
    }

    function trackIsInUserTracksBase() {
        // console.log('Trackbase :', userTracksBaseSelector)
        if (userTracksBaseSelector.includes(props.data)) {
            return true;
        } else {
            return false;
        }
    }

    /*
        {
            title: media.trackName,
            artist: media.artistName,
            albumTitle: media.collectionName,
            releaseYear: media.releaseDate
        }
    */
    
    return (

        <View 
            style={styles.container}
        >
            
            {props.from == "SearchTracksScreen" ? (
                <Checkbox
                    // style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                    disabled={trackIsInUserTracksBase()}
                />
            ) : (
                <Checkbox
                    // style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                    // disabled={trackIsInUserTracksBase()}
                />
            )}
            

            

            <View
                style={styles.data}
            >

                <Text 
                    style={styles.title}
                >{props.data.trackName}</Text>
                <Text 
                    //style={styles.author}
                >{props.data.artistName}</Text>
                <Text 
                    //style={styles.albumTitle}
                >{props.data.collectionName}</Text>
                <Text 
                    //style={styles.releaseYear}
                >{props.data.releaseDate}</Text>

            </View>

            <Ionicons 
                style={styles.detailsIcon}
                name="eye" 
                size={32} 
                color={eyeButtonColor}
                onPress={onPressListItemViewIcon}
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