import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function ScoreScreen({ navigation }: any) {

    const score = [
        {
            key: 1,
            rolls: 15,
            difficulty: 'normal'
        },
        {
            key: 2,
            rolls: 5,
            difficulty: 'insane :)'
        },
        {
            key: 3,
            rolls: 32,
            difficulty: 'hard'
        },
    ]

    return (
        <View style={styles.root}>
            <FlatList
                data={score}
                renderItem={({ item }) =>
                    <Text>
                        {item.difficulty + '  - ' + item.rolls}
                    </Text>
                }
                ListHeaderComponent={
                    <Text>
                        {'difficulty - rolls number'}
                    </Text>
                }
            />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Back</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}