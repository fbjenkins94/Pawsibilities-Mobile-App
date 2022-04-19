import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

const NavMenu = ({ navOne, navTwo, navThree }) => {
    return (
        <View>
            <View style={styles.navBar}>
                <Pressable style={styles.navOption1} onPress={navThree}>
                    <Text style={styles.navIcon}>👤</Text>
                    <Text style={styles.navText}>Profile</Text>
                </Pressable>
                <Pressable style={styles.navOption2} onPress={navTwo}>
                    <Text style={{ fontSize: 55, marginBottom: 10}}>🔎</Text>
                    <Text style={styles.navText}>Search</Text>
                </Pressable>
                <Pressable style={styles.navOption1} onPress={navOne}>
                    <Text style={styles.navIcon}>🗨️</Text>
                    <Text style={styles.navText}>Messages</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        height: 100,
        alignItems: 'flex-end',
    },
    navOption1: {
        flex: 1.5,
        alignItems: 'center',
        backgroundColor: '#66b3ff',
        borderTopWidth: 1,
        borderTopColor: '#339aff',
        shadowRadius: 4,
        shadowColor: '#339aff',
    },
    navOption2: {
        flex: 1.3,
        alignItems: 'center',
        backgroundColor: '#66b3ff',
        borderWidth: 1,
        borderColor: '#339aff',
        shadowRadius: 4,
        shadowColor: '#339aff',
        height: '100%',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        height: 117,
        justifyContent: 'center'
    },
    navText: {
        color: 'white',
        fontSize: 15,
    },
    navIcon: {
        fontSize: 25,
    },
})

export default NavMenu;