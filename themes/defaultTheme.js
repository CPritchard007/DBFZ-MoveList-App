import React from 'react';
import { StyleSheet } from 'react-native'
export const globalStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#8f4917"
    },

    h2: {
        
        fontSize: 28,
        color:"white",
        fontWeight: 'bold',
        fontFamily: 'Roboto-Regular',
        margin: -10,
    },
    h1: {
        fontFamily: 'PermanentMarker-Regular',
        fontSize: 36,
        color:"wheat",
        fontWeight: 'bold',
        textAlign: 'center',
        shadowColor: "red",
        
    },

    mainMenuButton: {
        fontFamily: 'Roboto-Bold',
        color: 'black',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        backgroundColor: 'white',
        margin: 10
    }
});