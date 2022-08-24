import React from "react";
import { ScrollView, View, Text } from "react-native";
import { style_ChangePassword as styles } from '../StyleSheets/Styles.js';
import { UserInput } from '../Components/UserInput.js';
import { UserInputError } from '../Components/UserInputError.js';
import { PawsButtons } from '../Components/PawsButtons.js';

export const DeleteProfile = ({ navigation }) => {
    const [passwordOne, onPasswordOne] = React.useState("");
    const [passwordTwo, onPasswordTwo] = React.useState("");
    const [passwordError, onPasswordError] = React.useState("");

    const comparePasswords = async () => {
        onPasswordError(passwordOne !== passwordTwo ?
            'Something went wrong. Please enter your password again.' :
            '');
        try {
            if (!passwordError) { } navigation.navigate('Question');
        } catch (e) { }
    }

    return (
        <View style={styles.changePasswordContainer}>
            <ScrollView>
                <View style={styles.userInfo}>
                    <Text style={styles.directions}>Enter your password twice below to delete your profile</Text>
                </View>
                <UserInputError />
                <UserInput
                    containerStyle={'userInputContainer'}
                    inputStyle={!passwordError ? 'inputTextBox' : 'errorUserInputContainer'}
                    changeFunction={onPasswordOne}
                    inputValue={passwordOne}
                    inputPlaceholder={"Password"} />
                <UserInputError />
                <UserInput
                    containerStyle={'userInputContainer'}
                    inputStyle={!passwordError ? 'inputTextBox' : 'errorUserInputContainer'}
                    changeFunction={onPasswordTwo}
                    inputValue={passwordTwo}
                    inputPlaceholder={"Password"} />
                <View style={styles.scrollView}></View>
            </ScrollView>
            <PawsButtons
                buttonStyle={'nextButton'}
                textStyle={'nextText'}
                buttonText={'DELETE PROFILE'}
                clickFunction={comparePasswords} />
        </View>
    );
};