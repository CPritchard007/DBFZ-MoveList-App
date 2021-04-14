import React from 'react';
import { View, Text, SafeAreaView, Dimensions, FlatList } from 'react-native';
import { globalStyle } from '../../themes/defaultTheme.js';

const moveData = require("../../assets/data/movelist/DBFZ_MOVELIST").MOVE_LIST;

export const MoveList = ({navigation, route}) => {
    //FOR REFERENCE : {MoveList['Videl'][0].name}
    
    const {character} = route.params;
    const moveDisplay = []

    const MoveList = moveData[character.name]
    console.log(moveData)

    const screenWidth = Dimensions.get("screen").width
    return (
        <SafeAreaView style={globalStyle.mainContainer}>
           <FlatList data={MoveList} renderItem={(move)=>(
               <View style={{width: screenWidth, height: 300}}>
                   <Text></Text>
               </View>
           )}/>
        </SafeAreaView>
    )

}