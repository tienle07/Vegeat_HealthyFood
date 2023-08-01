import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import StarRating from 'react-native-star-rating';

export default function ProductScreen(props) {
  let fruit = props.route.params;
  const navigation = useNavigation();
  console.log('fruit: ', fruit);
  return (
    <ScrollView  nestedScrollEnabled={true} style={{ width: "100%", flex: 1, backgroundColor: fruit.color }}>
      <SafeAreaView>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonWrapper}>
            <ChevronLeftIcon size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image source={fruit.image} style={styles.fruitImage} />
        </View>
      </SafeAreaView>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}>{fruit.name}</Text>
        
        <View style={styles.infoRow}>
        <Text style={styles.nameEng}>{fruit.nameEng}</Text>
        <Text style={styles.soldCount}>
    Viewed: <Text style={styles.soldCountValue}>{fruit.view}</Text>
            </Text>
          </View>

        <StarRating
                disabled={true}
                starSize={18}
                containerStyle={{width: 120}}
                maxStars={5}
                rating={fruit.stars}
                emptyStarColor="lightgray"
                emptyStar={require('../assets/images/emptyStar.png')}
                fullStar={require('../assets/images/fullStar.png')}
            />

        <Text style={styles.mota}>Mô tả</Text>
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            {fruit.desc}
          </Text>
        </View>
        <Text style={styles.recipe}>Công thức</Text>
        <FlatList
          data={fruit.recipe}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.descriptionText}>{item}</Text>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 20,
  },
  backButtonWrapper: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    paddingBottom: 10,
    shadowColor: 'black',
    shadowRadius: 50,
    shadowOffset: { width: 0, height: 50 },
    shadowOpacity: 0.7,
  },
  fruitImage: {
    width: 350,
    height: 290,
    borderRadius: 12,
  
  },
  productInfoContainer: {
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.8)',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingTop: 20,
  },
  productName: {
    color: themeColors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  nameEng: {
    color: '#888',
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
  },
  mota: {
    marginTop: 8,
    color: '#888',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recipe: {
    color: '#888',
    fontWeight: 'bold',
  },
  soldCount: {
    color: '#888',
    fontWeight: 'bold',
  },
  soldCountValue: {
    color: themeColors.text,
    fontWeight: 'bold',
  },
  starRatingContainer: {
    width: 120,
  },
  descriptionContainer: {
    height: 165,
  },
  descriptionText: {
    color: themeColors.text,
    paddingVertical: 3,
  },
  addToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: 'black',
    opacity: 0.6,
    shadowColor: 'black',
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addToCartButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});