import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, StyleSheet } from 'react-native';
import HomeButtons from '../Components/HomeScreen_Buttons.js';
import { style_HomeScreen as styles } from '../StyleSheets/Styles.js';

/*
 * This is the first screen of the app. It features the app's title and two buttons: one button 
 * leads shelter workers to a section of the app specifically for listing and tracking their
 * shelter pets; the other button leads adopters to a section of the app for finding shelter pets
 * within a given radius.
 * 
 * @param {Object} navigation - this object comes from the createStackNavigator object we imported
 *      in App.js; it allows us to navigate the user between files/screens
 */

const HomeScreen = ({ navigation }) => {
    const [render, setRender] = useState(false); // render is used to render the screen after 700 ms

    /* We execte on the first render and navigate to the main screen if we are logged in, as 
    * evidenced by the existence of a cached token. Otherwise, this screen renders after a delay of
    * 700 ms. */
    useEffect(async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) navigation.navigate('PetsScreen');
        } catch (e) {}
        setTimeout(() => { setRender(true); }, 700);
    }, []);

    return (
        <View style={styles.appScreen}>
            <Text style={styles.pawsLogo}>Pawsibilities</Text>
            {render ? <HomeButtons isShelter={false} nextScreen={() => navigation.navigate("SignIn") }/> : null}
            {render ? <HomeButtons isShelter={true}/> : null}
        </View>
    );
}

export default HomeScreen;
