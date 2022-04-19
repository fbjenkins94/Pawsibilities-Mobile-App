import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import NavMenu from '../Components/NavMenu.js';


const PetButton = ({ petEmoji, petName }) => {
    const [color, setColor] = useState(true);
    const [Pets, setPets] = useState([]);

    return (
        <View style={{ alignItems: 'center' }}>
            <Pressable onPress={() => {
                petName != null ? setColor(!color) : null;
                //push animals into search array
            }}>
                <Text style={color ? styles.PetEmojiBlue : styles.PetEmojiGreen}>{petEmoji}</Text>
            </Pressable>
            <View style={{ width: 61, alignItems: 'center' }}>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>{petName}</Text>
                <Text>{Pets}</Text>
            </View>
        </View>
    )
}

const ArrowButton = ({ navigation }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Pressable onPress={navigation}>
                <Text style={ styles.arrowButton }>Search</Text>
            </Pressable>
            <View style={{ width: 61, alignItems: 'center' }}>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>Search</Text>
                <Text></Text>
            </View>
        </View>
    )
}

const SearchScreen = ({navigation}) => {
    return (
        <View style={styles.PetScreen}>
            <ScrollView>
            <Text style={styles.SearchText}>Search for Pets</Text>
            <View style={styles.PetRow}>
                <PetButton petEmoji="🐶" petName="Dogs" />
                <PetButton petEmoji="🐱" petName="Cats" />
                <PetButton petEmoji="🐰" petName="Bunnies" />
            </View>

            <View style={styles.PetRow}>
                <PetButton petEmoji="🐭" petName="Rodents" />
                <PetButton petEmoji="🐷" petName="Farm Animals" />
                <PetButton petEmoji="🦊" petName="Mam   -mals" />
            </View>

                <View style={styles.PetRow}>
                <PetButton petEmoji="🐦" petName="Birds" />
                <PetButton petEmoji="🦎" petName="Reptiles" />
                <PetButton petEmoji="🐸" petName="Amphibi-ans" />
            </View>

            <View style={styles.PetRow}>
                    <PetButton petEmoji="🐟" petName="Fish" />
                    <PetButton petEmoji="" petName="" />
                    <ArrowButton navigation={() => navigation.navigate('PetsScreen')}/>

            </View>
                <View style={{ height: 50 }}></View>
            </ScrollView>

            <View style={{ paddingTop: 55 }}>
                <NavMenu
                    navOne={() => navigation.navigate('Success', { PropText: 'This page is currently under construction. Check back later!' })}
                    navTwo={() => navigation.navigate('PetsScreen')}
                    navThree={() => navigation.navigate('UserProfile')} /></View>



        </View>
    );
}

const styles = StyleSheet.create({
    arrowButton: {
        backgroundColor: '#710193',
        fontSize: 26,
        borderRadius: 10,
        fontWeight: 'bold',
        color: 'white',
        height: '100%',
    },
    PetRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        alignSelf: 'center',
    },
    PetScreen: {
        marginTop: 50,
        height: '100%',
        flex: 1
    },
    PetEmojiBlue: {
        backgroundColor: 'skyblue',
        fontSize: 65,
    },
    PetEmojiGreen: {
        backgroundColor: '#37FD12',
        fontSize: 65,
    },
    SearchText: {
        fontWeight: 'bold',
        marginBottom: 15,
        alignSelf: 'center',
        color: 'skyblue',
        fontSize: 22
    }
})

export default SearchScreen;