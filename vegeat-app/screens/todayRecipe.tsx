import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import FruitCard from '../components/fruitCard';
import { useNavigation } from '@react-navigation/native';
import FruitCardSales from '../components/fruitCardSales';
import { featuredFruits, categories } from '../constants';

export default function TodayRecipe() {
  const [activeCategory, setActiveCategory] = useState('Oranges');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* top bar */}
      <View style={styles.topBar}>
        <Bars3CenterLeftIcon size={30} color="black" />
      </View>

      {/* categories */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Seasonal</Text>
        <Text style={styles.categoriesSubtitle}>Hôm này ăn gì ?</Text>
        {/* <ScrollView style={styles.categoriesScrollView} horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => {
            const isActive = category === activeCategory;
            const textStyle = { ...styles.categoryText, ...(isActive ? styles.activeCategoryText : {}) };
            return (
              <TouchableOpacity onPress={() => setActiveCategory(category)} key={index} style={styles.categoryButton}>
                <Text style={textStyle}>{category}</Text>
                {isActive && <Text style={styles.activeIndicator}>__ _</Text>}
              </TouchableOpacity>
            );
          })}
        </ScrollView> */}
      </View>

      {/* carousel */}
      <View style={styles.carousel}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((fruit, index) => (
            <FruitCard fruit={fruit} key={index} />
          ))}
        </ScrollView>
      </View>

      {/* hot sales */}
      <View style={styles.hotSales}>
        <Text style={styles.hotSalesTitle}>Hot Sales</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.salesScrollView}>
          {[...featuredFruits].reverse().map((fruit, index) => (
            <FruitCardSales key={index} fruit={fruit} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  cartButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'orange',
  },
  categoriesContainer: {
    marginTop: 10,
  },
  categoriesTitle: {
    color: themeColors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  categoriesSubtitle: {
    color: themeColors.text,
    fontSize: 34,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  categoriesScrollView: {
    marginTop: 8,
    paddingHorizontal: 5,
  },
  categoryButton: {
    marginRight: 8,
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  categoryText: {
    color: themeColors.text,
    fontSize: 18,
  },
  activeCategoryText: {
    fontWeight: 'bold',
  },
  activeIndicator: {
    fontWeight: 'bold',
    marginTop: -3,
    marginLeft: 2,
    color: 'orange',
  },
  carousel: {
    marginTop: 25,
  },
  hotSales: {
    marginTop: 30,
    paddingLeft: 5,
  },
  hotSalesTitle: {
    color: themeColors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  salesScrollView: {
    overflow: 'visible',
    paddingLeft: 12,
    marginTop: 20,
  },
});