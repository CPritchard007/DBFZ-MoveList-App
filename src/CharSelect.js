import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Button, SafeAreaView, StyleSheet, StatusBar, Text } from 'react-native'
import { globalStyle } from '../themes/defaultTheme'

export const CharSelect = function ({navigation}) {
    React.useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => (
                <Icon name="settings" size={18} style={{padding:15}} color="#fff" onPress={() => {alert("Hello World")}} />
            ),
            
        })
    })

    const CustomButton = ({title}) => (
        <Text style={globalStyle.mainMenuButton} onPress={() => {alert()}}>{title}</Text>
    );


    return (
        
    <SafeAreaView style={globalStyle.mainContainer}>
        <StatusBar barStyle='light-content' />
        <View padding={30}>
            <Text style={globalStyle.h2} >Welcome To</Text>
            <Text style={globalStyle.h1}>Dragonball FZ</Text>
            <Text style={[globalStyle.h2, {textAlign: 'center'}]}>Companion</Text>
        </View>        
        <CustomButton title="Choose Your Character"/>
        <CustomButton title="About Us"/>
    </SafeAreaView>
    );

    
}