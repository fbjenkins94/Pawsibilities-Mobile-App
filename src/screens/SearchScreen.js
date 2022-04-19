import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const PetButton = ({ petEmoji, petName }) => {
    const [color, setColor] = useState(true);
    const [Pets, setPets] = useState([]);

    return (
        <View style={{ alignItems: 'center' }}>
            <Pressable onPress={() => {
                setColor(!color);
                //push animals into search array
            }
            }>
                <Text style={color ? styles.PetEmojiBlue : styles.PetEmojiGreen}>{petEmoji}</Text>
            </Pressable>
            <View style={{ width: 61, alignItems: 'center' }}>
                <Text style={{ fontSize: 11 }}>{petName}</Text>
                <Text>{Pets}</Text>
            </View>
        </View>
    )
}

const SearchScreen = () => {
    return (
        <View style={styles.PetScreen}>
            <Text style={styles.SearchText}>Search for Pets</Text>
            <View style={styles.PetRow}>
                <PetButton petEmoji="🐶" petName="Dogs" />
                <PetButton petEmoji="🐱" petName="Cats" />
                <PetButton petEmoji="🐰" petName="Bunnies" />
            </View>

            <View style={styles.PetRow}>
                <PetButton petEmoji="🐭" petName="Rodents" />
                <PetButton petEmoji="🐷" petName="Farm Animals" />
                <PetButton petEmoji="🦊" petName="Other Mammals" />
            </View>

            <View style={styles.PetRow}>
                <PetButton petEmoji="🐦" petName="Birds" />
                <PetButton petEmoji="🦎" petName="Reptiles" />
                <PetButton petEmoji="🐸" petName="Amphibians" />
            </View>

            <View style={styles.PetRow}>
                <PetButton petEmoji="🐟" petName="Fish" />
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    PetRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 30,
    },
    PetScreen: {
        marginTop: 50,
        height: '100%',
    },
    PetEmojiBlue: {
        backgroundColor: 'skyblue',
        fontSize: 45,
    },
    PetEmojiGreen: {
        backgroundColor: '#37FD12',
        fontSize: 45,
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