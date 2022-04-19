import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import HomeButtons from '../Components/HomeScreen_Buttons.js';

const HomeScreen = ({ navigation }) => {
    const [show, setShow] = useState(false);

    useEffect(async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            //if (token) navigation.navigate('PetsScreen');
        } catch (e) { console.log(e); }
        setTimeout(() => {
            setShow(true);
        }, 700);
    }, []);

    return (
        <View style={styles.appScreen}>
            <Text style={{ fontWeight: 'bold', fontSize: 32, color: "#219DFF", marginBottom: 60}}>Pawsibilities</Text>
            {show ? <HomeButtons isShelter={false} nextScreen={() => navigation.navigate("SignIn") }/> : null}
            {show ? <HomeButtons isShelter={true}/> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    appScreen: {
        alignItems: 'center',
        backgroundColor: 'white',
        bottom: 0,
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
    },

    logoBox: {
        alignItems: 'center',
        height: '75%',
        justifyContent: 'center',
        paddingTop: 10,
        width: '100%',
    },
});

export default HomeScreen;
