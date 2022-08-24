import React from "react";
import { ScrollView, View } from "react-native";
import pawsAPI from '../API/PawsBack.js';
import { ProfileBanner } from '../Components/ProfileBanner.js';
import { UserInput } from '../Components/UserInput.js';
import { UserInputHeader } from '../Components/UserInputHeader.js';
import { UserInputError } from '../Components/UserInputError.js';
import { PawsButtons } from '../Components/PawsButtons.js';
import { style_EditProfile as styles } from '../StyleSheets/Styles.js';

export const EditProfile = ({ navigation }) => {
    const [email, onEmail] = React.useState("forestbreeze94@gmail.com");
    const [emailError, onEmailError] = React.useState("");
    const [firstName, onFirstName] = React.useState("Forest");
    const [firstNameError, onFirstNameError] = React.useState("");
    const [lastName, onLastName] = React.useState("Jenkins");
    const [lastNameError, onLastNameError] = React.useState("");

    const checkCredentials = async () => {
        try {
            onFirstNameError(!firstName ? 'Enter your first name' : '');
            onLastNameError(!lastName ? 'Enter your last name' : '');
            onEmailError(!/.+@.+\..+/.test(email) ? 'Enter a valid email' : '');
            if (!firstNameError && !lastNameError && !emailError) navigation.navigate('UserProfile');
        } catch (e) { }
    };

    return (
        <View style={styles.editProfileContainer}>
            <ScrollView>
                <ProfileBanner
                    image={'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg'}
                    edit={true} />
                <UserInputHeader
                    header={'First Name'}
                    headerTwo={'Last Name'} />
                <View style={styles.namesContainer}>
                    <UserInput
                        containerStyle={'smallContainerLeft'}
                        inputStyle={!firstNameError ? 'textBoxes' : 'textBoxes2'}
                        changeFunction={onFirstName}
                        inputValue={firstName}
                        inputPlaceholder={"First Name"} />
                    <UserInput
                        containerStyle={'smallContainerRight'}
                        inputStyle={!lastNameError ? 'textBoxes' : 'textBoxes2'}
                        changeFunction={onLastName}
                        inputValue={lastName}
                        inputPlaceholder={"Last Name"} />
                </View>
                <UserInputError
                    error={firstNameError}
                    errorTwo={lastNameError} />
                <View style={styles.blankSpace}></View>
                <UserInputHeader
                    header={'Email'} />
                <UserInput
                    containerStyle={'userInputContainer'}
                    inputStyle={!emailError ? 'inputTextBox' : 'errorUserInputContainer'}
                    changeFunction={onEmail}
                    inputValue={email}
                    inputPlaceholder={"Your Email"} />
                <UserInputError
                    error={emailError} />
                <View style={styles.scrollSpace}></View>
            </ScrollView>
            <PawsButtons
                buttonStyle={'nextButton'}
                textStyle={'nextText'}
                buttonText={'SAVE EDITS'}
                clickFunction={checkCredentials} />
        </View>
    );
};