import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

const YourApp = () => {
    return (
        <View style={{ backgroundColor: 'black', height: '100%' }}>
            <View style={styles.navBar}>
                <Pressable style={styles.navOption1}>
                    <Text style={styles.navIcon}>🐾</Text>
                    <Text style={styles.navText}>Sign In</Text>
                </Pressable>
                <Pressable style={styles.navOption2}>
                    <Text style={{ fontSize: 50, }}>🔎</Text>
                    <Text style={styles.navText}>Search</Text>
                </Pressable>
                <Pressable style={styles.navOption1}>
                    <Text style={styles.navIcon}>🐶</Text>
                    <Text style={styles.navText}>Profile</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        flexDirection: 'row',
        height: 90,
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
        borderTopWidth: 1,
        borderTopColor: '#339aff',
        shadowRadius: 4,
        shadowColor: '#339aff',
        height: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
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

export default YourApp;