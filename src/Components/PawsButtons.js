import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { style_PawsButtons as styles } from '../StyleSheets/Styles.js'

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

/*
 * 1) Swap isShelter for a styling object
 * 2) add optional callback function
 * 3) add button text argument
 */

const PawsButtons = ({ buttonStyle, textStyle, buttonText, clickFunction }) => {
    return (
        <Pressable style={styles[buttonStyle]} onPress={ clickFunction }>
            <View>
                <Text style={ styles[textStyle] }>
                    { buttonText }
                </Text>
            </View>
        </Pressable>
    )
}

export default PawsButtons;