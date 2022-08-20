import React from 'react';
import { View, TextInput } from 'react-native';
import { style_UserInput as styles } from '../StyleSheets/Styles.js';


export const UserInput = ({ containerStyle, inputStyle, changeFunction, submitFunction, inputValue, inputPlaceholder }) => {
    return (
        <View style={styles[containerStyle]}>
            <TextInput
                style={styles[inputStyle]}
                onChangeText={changeFunction}
                onSubmitEditing={submitFunction}
                value={inputValue}
                placeholder={inputPlaceholder}
            />
        </View>
    )
}