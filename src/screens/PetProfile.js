import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import NavMenu from '../Components/NavMenu.js';

const YourApp = () => {
    return (
        <View style={styles.screen}>
            <Pressable style={styles.petBox}>
                <Image
                    style={styles.petImage}
                    source={{
                        uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg',
                    }}
                />
            </Pressable>

            <View style={styles.card}>
                <View style={styles.buttons}>
                    <Pressable style={styles.button}>
                        <View><Text style={styles.text}>Adopt</Text></View>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <View><Text style={styles.text}>Post</Text></View>
                    </Pressable>
                </View>

                <Text style={styles.petName}>Frodo</Text>
                <Text style={styles.details}>Poway, CA</Text>
                <View style={styles.dash}></View>
                <Text style={styles.details}>Adult, Male</Text>
                <View style={styles.dash}></View>
                <Text style={styles.details}>
                    Hi, my name is timmy! I am a good boy:)
                    Hi, my name is timmy! I am a good boy:)
                    Hi, my name is timmy! I am a good boy:)
                    Hi, my name is timmy! I am a good boy:)
                </Text>
                <View>
                    <Text></Text>
                    <Text></Text>
                </View>
            </View>

            <View style={{ height: 1000 }}></View>
            <NavMenu
                navOne={() => navigation.navigate('Success', { PropText: 'This page is currently under construction. Check back later!' })}
                navTwo={() => navigation.navigate('PetsScreen')}
                navThree={() => navigation.navigate('UserProfile')} />
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    petImage: {
        width: '100%',
        height: 200,
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    },
    button: {
        backgroundColor: 'skyblue',
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
    },
    petName: {
        fontWeight: 'bold',
        marginLeft: 12,
        fontSize: 20,
    },
    details: {
        color: 'skyblue',
        marginLeft: 12,
        fontSize: 15,
    },
    dash: {
        borderColor: 'skyblue',
        width: '95%',
        borderBottomWidth: 1,
        alignSelf: 'center',
        marginVertical: 8,
    },
    screen: {
        width: '100%',
        height: '100%',
        backgroundColor: 'skyblue',
    },
    card: {
        backgroundColor: 'white',
        width: '95%',
        height: '95%',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})
export default YourApp;