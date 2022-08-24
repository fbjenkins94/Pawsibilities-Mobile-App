import React from "react";
import { ScrollView, View, Text } from "react-native";
import { style_ChangePassword as styles } from '../StyleSheets/Styles.js';
import { UserInput } from '../Components/UserInput.js';
import { UserInputError } from '../Components/UserInputError.js';
import { PawsButtons } from '../Components/PawsButtons.js';

export const ChangePassword = ({ navigation }) => {
    const [currentPassword, onCurrentPassword] = React.useState("");
    const [newPassword, onNewPassword] = React.useState("");
    const [newPasswordError, onNewPasswordError] = React.useState("");

    const checkPassword = async () => {
        onNewPasswordError(newPassword.length < 8 ||
            !/[a-z]/.test(newPassword) ||
            !/[A-Z]/.test(newPassword) ||
            !/\d/.test(newPassword) ||
            !/\W/.test(newPassword) ?
            'Something went wrong. Please enter your passwords again.' :
            '');
        try {
            console.log('newPasswordError : ' + newPasswordError);
            if (!newPasswordError) { } navigation.navigate('Success', { PropText: 'You have successfully changed your password! 🎉' });
        } catch (e) { }
    }

    return (
        <View style={styles.changePasswordContainer}>
            <ScrollView>
                <View style={styles.userInfo}>
                    <Text style={styles.directions}>Enter your current password and new password below</Text>
                </View>
                <UserInputError />
                <UserInput
                    containerStyle={'userInputContainer'}
                    inputStyle={!newPasswordError ? 'inputTextBox' : 'errorUserInputContainer'}
                    changeFunction={onCurrentPassword}
                    inputValue={currentPassword}
                    inputPlaceholder={"Current Password"} />
                <UserInputError />
                <UserInput
                    containerStyle={'userInputContainer'}
                    inputStyle={!newPasswordError ? 'inputTextBox' : 'errorUserInputContainer'}
                    changeFunction={onNewPassword}
                    inputValue={newPassword}
                    inputPlaceholder={"New Password"} />
                <View style={styles.scrollView}></View>
            </ScrollView>
            <PawsButtons
                buttonStyle={'nextButton'}
                textStyle={'nextText'}
                buttonText={'CHANGE PASSWORD'}
                clickFunction={checkPassword} />
        </View>
    );
};