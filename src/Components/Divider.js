import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { style_Divider as styles } from '../StyleSheets/Styles.js';


const Divider = ({ dividerText }) => {
    return (
        <View style={styles.dividerContainer}>
            <View style={styles.line}></View>
            <Text style={styles.styleDividerText}> {dividerText} </Text>
            <View style={styles.line}></View>
        </View>
    )
}

export default Divider;