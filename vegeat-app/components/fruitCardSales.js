import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function FruitCardSales({ fruit }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', { ...fruit, color: fruit.color(1) })} style={styles.imageWrapper}>
      <View style={[styles.circle, { backgroundColor: fruit.color(0.4) }]}>
        <Image source={fruit.image} style={styles.fruitImage} />
      </View>
      <Text style={styles.priceText}>$ {fruit.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  circle: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    elevation: 5,
  },
  fruitImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'visible',
    shadowColor: 'black',
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
  },
  priceText: {
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});