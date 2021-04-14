import React, {useRef} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { Animated, View, Button, SafeAreaView, ScrollView, StatusBar, Text, Dimensions, TouchableOpacity } from 'react-native'
import { globalStyle } from '../themes/defaultTheme'

export const MainMenu = function ({navigation}) {
    React.useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => (
                <Icon name="ellipsis-v" size={18} style={{padding:15}} color="#fff" onPress={() => {alert("Hello World")}} />
            ),
            
        })
    });
    const screen = Dimensions.get('screen');
    const marginSpace = 3
    const width = screen.width / 2 - marginSpace * 2
    
    const CustomBlockButton = ({title, pushTo, disabled}) => (
        <TouchableOpacity disabled={disabled} onPress={() => navigation.navigate(pushTo)}>
            <View style={{width: width , height: width, backgroundColor: '#999', margin: marginSpace, position: 'relative'}} >
                <View style={{position: 'absolute',top: 0, left: 0, bottom: 0, right: 0, backgroundColor: disabled? "#333b" : "#0000"}} onPress={() => alert(pushTo)}></View>
                <Text style={{position: 'absolute', bottom: 0, right: 0, backgroundColor: "#1117", padding: 5, color: 'white'}}>{title}</Text>
                <FontistoIcon name="locked" size={30} color="#999" style={{position: 'absolute', top:20, left: 20}}/>
            </View>
        </TouchableOpacity>
    );

    return (
    <SafeAreaView style={globalStyle.mainContainer}>
        <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        {/* <View style={{height: 30, backgroundColor: 'black'}}><Animated.Text  style={{ marginLeft: scrollingTextAnim,   color: 'white', fontSize: 20, alignItems: 'center', paddingTop: 5, fontFamily: "Roboto-Bold", color: 'yellow', paddingLeft: 10, paddingRight: 10}}></Animated.Text></View> */}
        <View padding={30}>
            <Text style={globalStyle.h2} >Welcome To The</Text>
            <Text style={globalStyle.h1}>Universal Combat</Text>
            <Text style={[globalStyle.h2, {textAlign: 'center'}]}>Companion</Text>
        </View>        
        <ScrollView style={{marginBottom: 40}}>
            <View style={{flexWrap: 'wrap', flexDirection: 'row',}}>
                <CustomBlockButton title="Dragonball FighterZ" pushTo="dragonballFighterZ/CharacterSelect"/>
                <CustomBlockButton title="Smash Brothers Ultimate" disabled/>
                <CustomBlockButton title="Guilty Gear: Strive" disabled/>
                <CustomBlockButton title="BlazBlue Cross Tag Battle" disabled/>
                <CustomBlockButton title="Street Fighter V" disabled/>
            </View>
        </ScrollView>
        <Text style={{position: 'absolute', bottom: 0, color: "#eee", paddingLeft: 10, paddingRight: 10, backgroundColor: "#111"}}>all content is made abailable for user availability, I do not own any of these properties.</Text>
        </View>
    </SafeAreaView>
    );

    
}