import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { PawsButtons } from '../Components/PawsButtons.js';
import { style_Home as styles } from '../StyleSheets/Styles.js';

/*
 * This is the first screen of the app. It features the app's title and two buttons: one button 
 * leads shelter workers to a section of the app specifically for listing and tracking their
 * shelter pets; the other button leads adopters to a section of the app for finding shelter pets
 * within a given radius.
 * 
 * @param {Object} navigation - this object comes from the createStackNavigator object we imported
 *      in App.js; it allows us to navigate the user between files/screens
 */

export const Home = ({ navigation }) => {
    const [render, setRender] = useState(false); // render is used to render the screen after 700 ms

    /* We execte on the first render and navigate to the main screen if we are logged in, as 
    * evidenced by the existence of a cached token. Otherwise, this screen renders after a delay of
    * 700 ms. */
    useEffect(async () => {
        try {
            const token = ''; /*await AsyncStorage.getItem('token');*/
            if (token) navigation.navigate('PetsScreen');
        } catch (e) {}
        setTimeout(() => { setRender(true); }, 700);
    }, []);

    return (
        <View style={styles.appScreen}>
            <Text style={styles.pawsLogo}>Pawsibilities</Text>
            {render ?
                <PawsButtons
                    buttonStyle={'adoptButton'}
                    textStyle={'adoptText'}
                    buttonText={'Adopt a Pet'}
                    clickFunction={() => navigation.navigate("SignIn", { shelterSignIn: false })} /> :
                null}
            {render ?
                <PawsButtons
                    buttonStyle={'shelterButton'}
                    textStyle={'shelterText'}
                    buttonText={'Paws for Shelters'}
                    clickFunction={() => { navigation.navigate("SignIn", { shelterSignIn: true }) }} /> :
                null}
        </View>
    );
}