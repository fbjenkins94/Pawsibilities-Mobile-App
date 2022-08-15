import React from 'react';
import { View, TextInput } from 'react-native';
import { style_UserInput as styles } from '../StyleSheets/Styles.js';


const UserInput = ({ inputStyle, changeFunction, submitFunction, inputValue, inputPlaceholder }) => {
    return (
        <View style={styles.userInputContainer}>
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

export default UserInput;


