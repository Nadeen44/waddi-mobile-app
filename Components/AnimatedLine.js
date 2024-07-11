import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const GreyToPurpleLine = () => {
    const [animation] = useState(new Animated.Value(0));
    const [circleColor, setCircleColor] = useState('#929292'); 

    useEffect(() => {
        const startAnimation = setTimeout(() => {
            const animateLine = () => {
                Animated.timing(animation, {
                    toValue: 1, 
                    duration: 1000, 
                    useNativeDriver: false, 
                }).start(() => {
                    setCircleColor('#415BF6');
                });
            };

            animateLine();
        }, 500); 

        return () => {
            clearTimeout(startAnimation); 
            animation.setValue(0); 
        };
    }, []);

    const interpolatedColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#929292', '#415BF6'], 
    });

    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <View style={styles.backgroundLine} />
                <Animated.View
                    style={[
                        styles.foregroundLine,
                        {
                            height: animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0%', '100%'],
                            }),
                        },
                    ]}
                />
                <View style={styles.circleContainer}>
                    <Animated.View
                        style={[
                            styles.circle,
                            {
                                backgroundColor: interpolatedColor, 
                            }
                        ]}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 2, 
        height: 50,
        marginBottom: 60
    },
    progressContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: '#D9D9D9', 
    },
    backgroundLine: {
        width: '100%',
        height: '100%',
        backgroundColor: '#D9D9D9', 
    },
    foregroundLine: {
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: '#01E17B', 
    },
    circleContainer: {
        position: 'absolute',
        top: '100%', 
        width: 32, 
        height: 32, 
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#D9D9D9',
        marginTop: 15,
        borderWidth: 10, 
        borderRadius: 16, 
    },
    circle: {
        width: 12, 
        height: 12, 
        borderRadius: 8, 
    },
});

export default GreyToPurpleLine;