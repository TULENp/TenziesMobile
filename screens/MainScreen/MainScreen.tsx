import React, { useState, useEffect } from 'react';
import { Die } from '../../components/Die/Die';
import { TouchableOpacity, View, Text, Button, Linking } from 'react-native';
import { styles } from './styles';
import { ShakeAnimation } from '../../components/ShakeAnimation';


// todo Save best time to localStorage
// todo add online rating
// todo maybe add timer

export function MainScreen({ navigation }: any): JSX.Element {

    type TDice = {
        id: number,
        num: number,
        isHeld: boolean
    }
    const diffNames = { insane: "insane :)", normal: "normal", hard: "hard" };
    const diffs = { normal: 9, hard: 12, insane: 3 };

    const [isWon, setIsWon] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0)
    const [winText, setWinText] = useState<string>("")
    const [diffName, setDiffName] = useState<string>(diffNames.normal)

    const [shake, setShake] = useState(false)
    let difficulty = diffs.normal;
    const [dice, setDice] = useState<TDice[]>(getRandomDice(difficulty));

    // array of <Die/> components 
    const diceArray: JSX.Element[] = dice.map(die =>
        <Die key={die.id} num={die.num} isHeld={die.isHeld} hold={() => holdDice(die.id)} />)

    // check all dice isHeld and all have the same num. If true - player won
    useEffect(() => {
        const allHeld: boolean = dice.every(die => die.isHeld)
        const allSameNum: boolean = dice.every(die => die.num === dice[0].num)

        if (allHeld && allSameNum) {
            setIsWon(true);
            setWinText((count > 0) ? "You Won!" : "Lucky one!")

            // const score = localStorage.getItem("score");
            // console.log(score);
            // const firstScore = JSON.stringify({ diffName, count });
            // localStorage.setItem("score", score || firstScore); 
        }
    }, [dice]);

    // return array of objects(dice) with random id and number
    function getRandomDice(diff: number): TDice[] {
        let i: number = 0;
        return Array.from({ length: difficulty }, () => {
            return {
                id: i++,
                num: Math.ceil(Math.random() * 6),
                isHeld: false
            }
        });
    }

    // randomize dice numbers whose isHeld prop is false 
    function roll() {
        setShake(!shake);
        if (!isWon) {
            setDice(prev => prev.map((die) => {
                return die.isHeld
                    ? die
                    : { ...die, num: Math.ceil(Math.random() * 6) }
            }))
        } else { // if isWon is true reset game
            setIsWon(false);
            setDice(getRandomDice(difficulty));
            setCount(-1);
            setDiffName(diffNames.normal);
        }
        setCount(prev => prev + 1);
    }

    // change number of dice (5 | 10 | 15) and restart game
    function changeDifficulty() {
        if (!isWon) {
            switch (diffName) {
                case diffNames.insane:
                    difficulty = diffs.normal;
                    setDiffName(diffNames.normal);
                    break;
                case diffNames.normal:
                    difficulty = diffs.hard;
                    setDiffName(diffNames.hard);
                    break;
                case diffNames.hard:
                    difficulty = diffs.insane;
                    setDiffName(diffNames.insane);
                    break;
            }
            setCount(0);
            setDice(getRandomDice(difficulty));
        }
    }

    // flip isHeld prop of Die component
    function holdDice(id: number) {
        setDice(prev => prev.map((die) => {
            return die.id === id
                ? { ...die, isHeld: !die.isHeld }
                : die
        }))
    }

    return (
        <>
            <View style={styles.root}>
                <View style={styles.block}>
                    <View>
                        {isWon
                            ?
                            <>
                                <Text style={styles.h1}>{winText}</Text>
                                <Text style={styles.a} onPress={() => Linking.openURL('https://github.com/TULENp')}>
                                    Check my GitHub for... something interesting
                                </Text>
                            </>
                            :
                            <>
                                <Text style={styles.h1}>How to play:</Text>
                                <Text style={styles.h2}>Roll until all dice are the same.</Text>
                                <Text style={styles.h2}>Press each die to freeze its value.</Text>
                            </>
                        }
                    </View>
                    <ShakeAnimation shake={shake}>
                        <View style={styles.dice}>
                            {diceArray}
                        </View>
                    </ShakeAnimation>
                    <View>
                        <View style={styles.tools}>
                            <TouchableOpacity onPress={changeDifficulty}>
                                <View >
                                    <Text style={styles.h2}>Difficulty: </Text>
                                    <Text style={styles.h2}>{diffName}</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.h2}>Roll counter:</Text>
                                <Text style={styles.h2}>{count}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Score')}>
                                <View style={styles.button2}>
                                    <Text style={styles.button2Text}>My score</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={roll} style={styles.button}>
                            <Text style={styles.buttonText}>{isWon ? "New Game" : "Roll"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.h2} onPress={() => Linking.openURL('https://github.com/TULENp')}>
                    © Created by
                    <Text style={styles.a}> Eugene Kononenko</Text>
                </Text>
            </View>
        </>
    )
}

