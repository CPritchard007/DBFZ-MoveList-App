import React from 'react';
import { FlatList, SafeAreaView, ScrollView, View, Text } from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/AntDesign'
import { globalStyle } from '../themes/PinkinTheme';

const characterList = require('../assets/data/characters.json');

export const CharSelect = ({navigation}) => {
    React.useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => (
                <MatIcon name="settings" size={18} style={{padding:15}} color="#fff" onPress={() => {alert("Hello World")}} />
            ),  
        })
    });
    return (
    <SafeAreaView style={globalStyle.mainContainer}>
            <FlatList data={characterList} renderItem={({item}) => (
                <View style={globalStyle.characterSelectButton}><Icon size={40} style={globalStyle.characterSelectIcon} name="user" /><Text style={globalStyle.characterSelectText}>{item.name}</Text></View>
            )}/>
    </SafeAreaView>
    );
}