import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styles_Success as styles } from '../StyleSheets/Styles.js';

export const Success = ({ navigation }) => {
    const textDisplay = navigation.getParam('PropText');

    useEffect(async () => {
        setTimeout(() => {
            navigation.navigate(/delete/.test(textDisplay) ? 'HomeScreen' : 'UserProfile');
        }, 3000);
    }, []);

    return (
        <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>{textDisplay}</Text>
        </View>
    );
};