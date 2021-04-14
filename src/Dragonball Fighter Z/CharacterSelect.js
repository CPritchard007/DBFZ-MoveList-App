import React from 'react';
import { FlatList, SafeAreaView, ScrollView, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/AntDesign'
import { globalStyle } from '../../themes/defaultTheme';
import FontistoIcon from 'react-native-vector-icons/Fontisto'


const moveData = require('../../assets/data/movelist/DBFZ_MOVELIST').MOVE_LIST;
const characterList = require('../../assets/data/characters.json');

export const FlatCharSelect = ({navigation}) => {
    React.useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => (
                <FontIcon name="ellipse-v" size={18} style={{padding:15}} color="#fff" onPress={() => {alert("Hello World")}} />
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


export const GridCharacterSelect = ({navigation}) => {
    React.useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => (
                <FontIcon name="ellipsis-v" size={18} style={{padding:15}} color="#fff" onPress={() => {alert("Hello World")}} />
            ),  
        })
    });

    var items = [];
    for (const character of characterList) {
        const screenWidth = Dimensions.get('screen').width;
        const numberOfCells = 3;
        const cellMargin = 3;
        var itemWidth = screenWidth / numberOfCells - cellMargin * 2;
        
        if (moveData[character.name] == undefined){
            items.push (
                <TouchableOpacity disabled={true} ><View style={{backgroundColor: '#333', width:itemWidth, height: itemWidth, margin: cellMargin, position: 'relative'}}><Text style={{color: 'white', position: 'absolute', bottom: 0, right: 0, padding: 5, backgroundColor: "#333"}}>{character.name}</Text><FontistoIcon name="locked" color="" size={30} style={{position: 'absolute', top: 10, left: 15}} /></View></TouchableOpacity>
            )
        } else {
            items.unshift(
                <TouchableOpacity onPress={()=>navigation.navigate("dragonballFighterZ/MoveList", {character: character})} ><View style={{backgroundColor: '#666', width:itemWidth, height: itemWidth, margin: cellMargin, position: 'relative'}}><Text style={{color: 'white', position: 'absolute', bottom: 0, right: 0, padding: 5, backgroundColor: "#333"}}>{character.name}</Text></View></TouchableOpacity>
            )
        }
    }
    return (
        <SafeAreaView style={globalStyle.mainContainer}>
            <ScrollView>
                <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
                    {items}
                </View>
            </ScrollView>
        </SafeAreaView>
        );
} 