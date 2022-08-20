import React from "react";
import { View } from "react-native";
import { Divider } from '../Components/Divider.js';
import { PawsButtons } from '../Components/PawsButtons.js';
import { UserInput } from '../Components/UserInput.js';
import { UserInputError } from '../Components/UserInputError.js';
import { style_SignIn as styles } from '../StyleSheets/Styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import pawsAPI from '../API/PawsBack.js';

export const SignIn = ({ navigation }) => {
    const [email, onEmail] = React.useState("");
    const [password, onPassword] = React.useState("");
    const [error, onError] = React.useState("");
    const shelterSignIn = navigation.getParam('shelterSignIn');

    const checkCredentials = async () => {
        try {
            const response = await pawsAPI.post('user/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            if (shelterSignIn) navigation.navigate("ShelterScreen");
            navigation.navigate('PetsScreen');
        } catch (e) { onError('Trouble Connecting to API'); }
    };

    return (
        <View style={styles.signInContainer}>
            <PawsButtons
                buttonStyle={'signUpButton'}
                textStyle={'signUpText'}
                buttonText={'New to the app? Sign up'}
                clickFunction={() => navigation.navigate(shelterSignIn ? 'SignUp_Shelters' : 'SignUp_Adoptions')} />
            <Divider
                dividerText={'Sign In'} />
            <UserInput
                containerStyle={'userInputContainer'}
                inputStyle={!error ? 'inputTextBox' : 'errorUserInputContainer'}
                changeFunction={onEmail}
                inputValue={email}
                inputPlaceholder={"Your Email"} />
            <UserInputError />
            <UserInput
                containerStyle={'userInputContainer'}
                inputStyle={!error ? 'inputTextBox' : 'errorUserInputContainer'}
                changeFunction={onPassword}
                inputValue={password}
                inputPlaceholder={"Your Password"} />
            <UserInputError
                error={error} />
            <PawsButtons
                buttonStyle={'nextButton'}
                textStyle={'nextText'}
                buttonText={'SIGN IN'}
                clickFunction={checkCredentials} />
        </View>
    );
};