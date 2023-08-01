import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid';

export default function FruitCardCart({ fruit }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.imageWrapper}>
                    <Image source={fruit.image} style={styles.fruitImage} />
                </TouchableOpacity>

                <View style={[styles.circle, { backgroundColor: fruit.color(0.4) }]} />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.fruitName}>{fruit.name}</Text>
                <Text style={styles.fruitPrice}>$ {fruit.price}</Text>
            </View>

            <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton}>
                    <PlusIcon size={15} color="white" />
                </TouchableOpacity>
                <Text>{fruit.qty}</Text>
                <TouchableOpacity style={styles.quantityButton}>
                    <MinusIcon size={15} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 4,
        marginHorizontal: 16,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -10,
        marginLeft: -10,
        elevation: 5,
    },
    fruitImage: {
        height: 65,
        width: 65,
        borderRadius: 35,
        overflow: 'visible',
        shadowColor: 'black',
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.4,
    },
    circle: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginLeft: 10,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    fruitName: {
        color: themeColors.text,
        fontSize: 18,
        fontWeight: 'bold',
    },
    fruitPrice: {
        color: '#FFD700',
        fontWeight: 'bold',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    quantityButton: {
        backgroundColor: '#BDBDBD',
        padding: 4,
        borderRadius: 8,
    },
});