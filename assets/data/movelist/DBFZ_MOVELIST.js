import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { MoveList } from '../../../src/Dragonball Fighter Z/MoveList';



export const MOVE_LIST = {
    
    "Videl" : [
        
        {name: "Justice Combination" , command: (<View ><Text>{'⇨ B'}</Text></View>)},
        {name: "Videl Rush" ,          command: (<View ><Text>{'⇩ ⇨ X or Y or B (Performable in air)'}</Text></View>)},
        {name: "Frankensteiner" ,      command: (<View ><Text>{'⇩ ⇦ X or Y or B (Performable in air)'}</Text></View>)},
        {name: "Moonsault Kick" ,      command: (<View ><Text>{'⇩ ⇩ X or Y or B (Performable in air)'}</Text></View>)},
        {name: "Rising Eagle" ,        command: (<View ><Text>{'⇩ ⇦ A'}</Text></View>)},
        {name: "Rainbow Storm" ,       command: (<View ><Text>{'⇩ ⇨ RB'}</Text></View>)},
        {name: "Deffender of Love & Justice, The Great Saiyaman!" , 
                                       command: (<View ><Text>{'⇩ ⇨ RB'}</Text></View>)},
        {name: "Justice Rush" ,        command: (<View ><Text>{'⇩ ⇦ RB or RT'}</Text></View>)},
        {name: "Justice Revenge" ,     command: (<View ><Text>{'Hold RT When Knocked Down or Until you Recover'}</Text></View>)},
    ],

    "Goku GT": [
        
        {name: "Dragon Flurry Fist" ,  command: (<View ><Text>{'⇩ ⇨ X or Y or B (performable in air)'}</Text></View>)},
        {name: "Dragon Flash Fist" ,   command: (<View ><Text>{'⇩ ⇦ X or Y or B (performable in air)'}</Text></View>)},
        {name: "Kamehameha" ,          command: (<View ><Text>{'⇩ ⇨ A (performable in air)'}</Text></View>)},
        {name: "Reverse Kamehameha" ,  command: (<View ><Text>{'⇩ ⇦ A (performable in air)'}</Text></View>)},
        {name: "Super Kamehameha" ,    command: (<View ><Text>{'⇩ ⇨ RB or RT'}</Text></View>)},
        {name: "Dragon Fist Explosion" , command: (<View ><Text>{'⇩ ⇦ RB'}</Text></View>)},
        {name: "Super Ultra Spirit Bomb" , command: (<View ><Text>{'⇩ ⇦ RT'}</Text></View>)},
    ],

    "Android 17": [

        {name: "Sliding Sweep" ,       command: (<View><Text>{'↘️ B'}</Text></View>)},
        {name: "Accel Driver" ,        command: (<View><Text>{'⇩ ⇨ X or Y or B'}</Text></View>)},
        {name: "Finishing Driver" ,    command: (<View><Text>{'⇩ ⇦ X or Y or B'}</Text></View>)},
        {name: "-> Top Gear" ,         command: (<View><Text>{'X or Y'}</Text></View>)},
        {name: "-> Second Gear" ,      command: (<View><Text>{'⇨ X or Y'}</Text></View>)},
        {name: "-> Low Gear" ,         command: (<View><Text>{'⇩ X or Y'}</Text></View>)},
        {name: "-> Fake Out" ,         command: (<View><Text>{'⇦ X or Y'}</Text></View>)},
        {name: "-> Reverse Gear" ,     command: (<View><Text>{'A or B'}</Text></View>)},
        {name: "-> Power Blitz Charge" , command: (<View><Text>{'⇩ A'}</Text></View>)},
        {name: "-> Power Blitz" ,      command: (<View><Text>{'⇩ A  after Power Blitz (Performable in Air)'}</Text></View>)},
        {name: "-> Acrobat Assault" ,  command: (<View><Text>{'⇨ A or ⇦ A (Performable in Air)'}</Text></View>)},
        {name: "Second Gear" ,         command: (<View><Text>{'⇩ ⇨ X or Y or B while in air'}</Text></View>)},
        {name: "Fake Out" ,            command: (<View><Text>{'⇩ ⇦ X or Y or B while in air'}</Text></View>)},
        {name: "End Game" ,            command: (<View><Text>{'⇩ ⇨ RB'}</Text></View>)},
        {name: "Barrier Explosion" ,   command: (<View><Text>{'⇩ ⇨ RT'}</Text></View>)},
        {name: "Super Electric Strike" , command: (<View><Text>{'⇩ ⇦ RB or RT'}</Text></View>)},

    ]
};

