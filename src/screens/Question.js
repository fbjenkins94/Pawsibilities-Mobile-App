import React from "react";
import { StyleSheet,  View, Text, Pressable } from "react-native";

const Question = ({ navigation }) => {
    return (
        <View>
            <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>Are you sure you want to delete your profile?</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('Success', { PropText: 'You have successfully deleted your account.' })}>
                <View style={styles.buttons}><Text style={{ color: 'white', fontSize: 20}}>Yes</Text></View>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('UserProfile') }>
                <View style={styles.buttons}><Text style={{ color: 'white', fontSize: 20 }}>No</Text></View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        width: '50%',
        alignSelf: 'center',
        backgroundColor: '#219DFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom : 30,
        padding: 20,
    },

    userInfo: {
        width: '100%',
        height: 170,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
    },

    userInfoText: {
        fontSize: 25,
        color: '#219DFF',
        textAlign: 'center',
    },
});

export default Question;