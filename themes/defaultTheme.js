import React from 'react';
import { StyleSheet } from 'react-native'
export const globalStyle = StyleSheet.create({


    /*
    ooo        ooooo                                   
    `88.       .888'                                   
    888b     d'888   .ooooo.  ooo. .oo.   oooo  oooo  
    8 Y88. .P  888  d88' `88b `888P"Y88b  `888  `888  
    8  `888'   888  888ooo888  888   888   888   888  
    8    Y     888  888    .o  888   888   888   888  
    o8o        o888o `Y8bod8P' o888o o888o  `V88V"V8P' 
    */

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
    },
    

/*
  .oooooo.   oooo                           
 d8P'  `Y8b  `888                           
888           888 .oo.    .oooo.   oooo d8b 
888           888P"Y88b  `P  )88b  `888""8P 
888           888   888   .oP"888   888     
`88b    ooo   888   888  d8(  888   888     
 `Y8bood8P'  o888o o888o `Y888""8o d888b    
*/
    
    characterSelectButton: {
        // backgroundColor: 'white',
        flexDirection: 'row',
        
        
    },
    characterSelectIcon: {
        backgroundColor: 'white',
        padding: 15,
        margin: 5,

    },
    characterSelectText: {
        flex: 1,
        alignSelf: 'center',
        color: 'white',
        fontSize: 24,
        fontFamily: 'roboto-bold',
        paddingLeft: 15

    }
});