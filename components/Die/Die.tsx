import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface DieProps {
    num: number;
    isHeld: boolean;
    hold: () => void;
}

export const Die = ({ num, isHeld, hold }: DieProps) => {
    return (
        //if isHeld === true then add className "held"
        <TouchableOpacity onPress={hold}>
            <View style={isHeld ? [styles.die, styles.held] : styles.die}>
                <Text style={ styles.dieH1}>{num}</Text>
            </View>
        </TouchableOpacity>
    );
}

