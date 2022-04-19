import React, { useEffect } from "react";
import { ScrollView, SafeAreaView, StyleSheet, TextInput, View, Text, Pressable, Image } from "react-native";

const Success = ({ navigation }) => {
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

const styles = StyleSheet.create({
    userInfo: {
        width: '100%',
        height: 170,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    userInfoText: {
        fontSize: 25,
        color: '#219DFF',
        textAlign: 'center',
    },
});

export default Success;