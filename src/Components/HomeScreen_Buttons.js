import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { style_HomeScreen_Button as styles } from '../StyleSheets/Styles.js'

/*
 * This component renders a button on the Home screen that navigates to different sides of the app
 * depending on whether we are users intending to adopt, or shelters intending to list pets.
 * 
 * @param {Boolean} isShelter - true if we want to render the button for shelters, false if we want
 *      to render the button for pet adoptions
 * @param {String} nextScreen  - this text names the next screen we want to navigate to when the 
 *      button is pressed
 *
 */

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

export default HomeButtons;