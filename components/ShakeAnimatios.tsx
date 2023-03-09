import React, { useState, useEffect, useRef } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';

interface IShakeWrapper {
    children: React.ReactNode;
    shake: boolean;
}
export const ShakeAnimation = ({ children, shake }: IShakeWrapper) => {
    const [shakeAnim] = useState(new Animated.Value(0));
    const animatedViewRef = useRef(null);

    useEffect(() => {
            Animated.sequence([
                Animated.timing(shakeAnim, {
                    toValue: 1,
                    duration: 100,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(shakeAnim, {
                    toValue: -1,
                    duration: 100,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(shakeAnim, {
                    toValue: 0,
                    duration: 100,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
            ]).start();
    }, [shake]);

    const animatedStyle = {
        transform: [
            {
                translateX: shakeAnim.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [-5, 5],
                }),
            },
        ],
    };

    return (
        <>
            <TouchableOpacity >
                <Animated.View ref={animatedViewRef} style={animatedStyle}>
                    {children}
                </Animated.View>
            </TouchableOpacity>
        </>
    );
};
