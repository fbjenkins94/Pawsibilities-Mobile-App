import React from 'react';
import { View, Text } from 'react-native';
import { style_UserInput as styles } from '../StyleSheets/Styles.js';


const UserInputError = ({ error, errorTwo }) => {
    return (
        <View style={errorTwo ? styles.errorNamesContainer : styles.errorNamesContainer2}>
            <View style={errorTwo ? styles.errorTextBoxes : {}}>
                <Text style={{ fontSize: 12, color: 'red' }}>{error}</Text>
            </View>
            {errorTwo ?
                <View style={styles.errorTextBoxes}>
                    <Text style={{ fontSize: 12, color: 'red' }}>{errorTwo}</Text>
                </View> :
                null
            }
        </View>
    )
}

export default UserInputError;