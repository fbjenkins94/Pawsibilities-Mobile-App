import React from 'react';
import { View, Text } from 'react-native';
import { style_UserInput as styles } from '../StyleSheets/Styles.js';


const UserInputError = ({ inputStyle, changeFunction, submitFunction, inputValue, inputPlaceholder }) => {
    return (
        <View style={styles.errorNamesContainer2}>
            <View style={styles.errorTextBoxes}>
                <Text style={{ fontSize: 18, color: 'red' }}>{error}</Text>
            </View>
            {!singleError ?
                <View style={styles.errorTextBoxes}>
                    <Text style={{ fontSize: 18, color: 'red' }}>{error}</Text>
                </View> :
                null
            }
        </View>
    )
}

export default UserInputError;