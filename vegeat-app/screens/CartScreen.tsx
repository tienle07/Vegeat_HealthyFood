import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import StarRating from 'react-native-star-rating';
import FruitCardCart from '../components/fruitCardCart';
import { cartItems } from '../constants';

export default function CartScreen(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ChevronLeftIcon size={30} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Your <Text style={styles.boldText}>cart</Text></Text>
        <View style={styles.cartItems}>
          {cartItems.map((item, index) => <FruitCardCart fruit={item} key={index} />)}
        </View>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>Total price: <Text style={styles.boldText}>240.70</Text></Text>
        </View>
      </View>
      <View style={styles.paymentButtonContainer}>
        <TouchableOpacity
          style={styles.paymentButton}
          activeOpacity={0.8}
        >
          <Text style={styles.paymentButtonText}>Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'orange',
  },
  header: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    padding: 8,
  },
  cartContainer: {
    marginHorizontal: 5,
    flex: 1,
  },
  cartTitle: {
    color: themeColors.text,
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 30,
  },
  boldText: {
    fontWeight: 'bold',
  },
  cartItems: {
    marginBottom: 10,
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 4,
  },
  totalPriceText: {
    fontSize: 20,
  },
  paymentButtonContainer: {
    marginHorizontal: 7,
    marginBottom: 10,
  },
  paymentButton: {
    backgroundColor: 'orange',
    opacity: 0.8,
    shadowColor: 'orange',
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.4,
    padding: 12,
    borderRadius: 20,
  },
  paymentButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});