import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


const HomeButtons = ({ isShelter, nextScreen }) => {
    return (
        <Pressable style={isShelter ? styles.shelterButton : styles.adoptButton} onPress={ nextScreen }>
            <View>
                <Text style={isShelter ? styles.shelterText : styles.adoptText}>
                    {isShelter ? 'Paws for Shelters' : 'Adopt a Pet' }
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    adoptButton: {
        backgroundColor: '#3633FF',
        color: 'white',
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
        width: '75%',
        alignItems: 'center',
    },

    adoptText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },

    shelterButton: {
        borderRadius: 20,
        padding: 15,
        width: '75%',
        alignItems: 'center',
    },

    shelterText: {
        fontSize: 20,
        color: '#3633FF',
        fontWeight: "bold",
    },

 })

export default HomeButtons;