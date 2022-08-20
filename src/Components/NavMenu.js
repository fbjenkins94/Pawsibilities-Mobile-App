import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles_NavMenu as styles } from '../StyleSheets/Styles';

export const NavMenu = ({ navOne, navTwo, navThree }) => {
    return (
        <View style={styles.navBar}>
            <Pressable style={styles.navOption1} onPress={navThree}>
                <Text style={styles.navIcon}>👤</Text>
                <Text style={styles.navText}>Profile</Text>
            </Pressable>
            <Pressable style={styles.navOption2} onPress={navTwo}>
                <Text style={styles.navIconBig}>🔎</Text>
                <Text style={styles.navText}>Search</Text>
            </Pressable>
            <Pressable style={styles.navOption1} onPress={navOne}>
                <Text style={styles.navIcon}>🗨️</Text>
                <Text style={styles.navText}>Messages</Text>
            </Pressable>
        </View>
    );
}