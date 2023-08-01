import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { HeartIcon } from 'react-native-heroicons/solid';

export default function FruitCard({ fruit }) {
    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <View style={[styles.container, { backgroundColor: fruit.color(1) }]}>
            <View style={styles.iconContainer}>
                <TouchableOpacity
                    onPress={() => setIsFavourite(!isFavourite)}
                    style={[styles.heartButton, { backgroundColor: 'rgba(255,255,255,0.3)' }]}
                >
                    <HeartIcon size={25} color={isFavourite ? fruit.shadow : 'white'} />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image source={fruit.image} style={styles.fruitImage} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.fruitName}>{fruit.name}</Text>
                <Text style={styles.fruitPrice}>$ {fruit.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 270,
        height: 400,
        borderRadius: 20,
        marginHorizontal: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    heartButton: {
        padding: 12,
        borderRadius: 50,
        marginRight: 12,
        marginTop: 12,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 50 },
        shadowOpacity: 0.6,
        shadowRadius: 40,
    },
    fruitImage: {
        marginTop: 5,
        width: 210,
        height: 250,
        borderRadius: 20,
    },
    textContainer: {
        marginLeft: 16,
        marginTop: 16,
    },
    fruitName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textShadowRadius: 10,
        textShadowOffset: { width: 0, height: 4 },
    },
    fruitPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textShadowRadius: 10,
        textShadowOffset: { width: 0, height: 4 },
    },
});