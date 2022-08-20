import React from "react";
import { View, Text } from "react-native";
import { PawsButtons } from '../Components/PawsButtons.js';
import { styles_Question as styles } from '../StyleSheets/Styles.js';

export const Question = ({ navigation }) => {
    return (
        <View>
            <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>Are you sure you want to delete your profile?</Text>
            </View>
            <PawsButtons
                buttonStyle={'yesNoButtons'}
                textStyle={'yesNoText'}
                buttonText={'Yes'}
                clickFunction={() => navigation.navigate('Success', { PropText: 'You have successfully deleted your account.' })} />
            <PawsButtons
                buttonStyle={'yesNoButtons'}
                textStyle={'yesNoText'}
                buttonText={'No'}
                clickFunction={() => navigation.navigate('UserProfile')} />
        </View>
    );
};