import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5DB075',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    loginButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
        position: 'relative',
        width: 353,
        height: 76,
        elevation: 9,
        borderRadius: 100,
        backgroundColor: '#F2F2F2'
    },

    loginVegetableSvg: {
        margin: '10%',
        alignSelf: 'center'
    },

    textButtonLogin: {
        fontWeight: 'bold',
        fontSize: 36,
        textAlign: 'center',
        color: '#333333',
    }

})

export default styles;