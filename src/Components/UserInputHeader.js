import React from 'react';
import { View, Text } from 'react-native';
import { style_UserInput as styles } from '../StyleSheets/Styles.js';

export const UserInputHeader = ({ header, headerTwo }) => {
    return (
        <View style={headerTwo ? styles.errorNamesContainer : styles.errorNamesContainer2}>
            <View style={headerTwo ? styles.errorTextBoxes : {}}>
                <Text style={styles.headerText}>{header}</Text>
            </View>
            {headerTwo ?
                <View style={styles.errorTextBoxes}>
                    <Text style={styles.headerText}>{headerTwo}</Text>
                </View> :
                null
            }
        </View>
    )
}