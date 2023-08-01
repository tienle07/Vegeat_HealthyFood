import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, Pressable, TouchableOpacity, Alert, ScrollView, FlatList, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import axios from 'axios';
import configUrl from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListRecipe = () => {
    const navigation = useNavigation();
    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            const config = {
                headers: {
                    Authorization: `${token}`,
                },
            };

            const recipesResponse = await axios.get(`${configUrl.API_BASE_URL}/recipes/searchByRecipes?title=${query}`, config);
            const recipesData = recipesResponse.data;
            setRecipes(recipesData);

        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Thông báo', 'Không có công thức phù hợp với nguyên liệu của bạn');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');

                const config = {
                    headers: {
                        Authorization: `${token}`,
                    },
                };

                // Gọi API localhost:3100/api/ingredients để lấy danh sách nguyên liệu
                const ingredientsResponse = await axios.get(`${configUrl.API_BASE_URL}/ingredients`, config);
                const ingredients = ingredientsResponse.data;

                if (ingredients.length > 0) {
                    // Lấy _id của nguyên liệu đầu tiên
                    const ingredientId = ingredients[0]._id;

                    // Gọi API localhost:3100/api/recipes/searchByRecipes?ingredients={ingredientId} để lấy danh sách công thức nấu ăn
                    const recipesResponse = await axios.get(`${configUrl.API_BASE_URL}/recipes/searchByRecipes?ingredients=${ingredientId}`, config);
                    const recipesData = recipesResponse.data;
                    console.log(recipesData);
                    setRecipes(recipesData);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    // Hàm xử lý khi nhấn vào recipe
    const handleRecipePress = async (item) => {
        if (item.premium) {
            try {
                const token = await AsyncStorage.getItem('token');

                const config = {
                    headers: {
                        Authorization: `${token}`,
                    },
                };

                const response = await axios.get(`${configUrl.API_BASE_URL}/user/profile`, config);
                const user = response.data.user;
                console.log("======thông tin user=====");
                console.log(user);
                if (user.status === "premium") {
                    navigation.navigate('RecipeDetail', { recipeId: item._id });
                } else {
                    Alert.alert(
                        'Thông báo',
                        'Bạn cần thanh toán để xem công thức này, bạn có muốn mua gói premium của chúng tôi',
                        [
                            {
                                text: 'Hủy',
                                style: 'cancel',
                                onPress: () => {
                                    // Xử lý khi nhấn nút "Hủy"
                                },
                            },
                            {
                                text: 'OK',
                                onPress: () => {
                                    // Xử lý khi nhấn nút "OK" (navigate qua trang pricingPlan)
                                    navigation.navigate('PricingPlan');
                                },
                            },
                        ],
                    );
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            navigation.navigate('RecipeDetail', { recipeId: item._id });
        }
    };

    

    const renderRecipeItem = ({ item }) => (
        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Pressable
                onPress={() => handleRecipePress(item)}
            >
                <Image
                    style={{ width: 150, height: 260 }}
                    resizeMode="contain"
                    source={{ uri: item.image }}
                />
                <Text style={{ textAlign: 'center', paddingBottom: 10, paddingTop: 10 }}>{item.title} {item.premium ? "(Premium)" : "(Free)"}</Text>
            </Pressable>
        </View>
    );

    return (
        <View style={styles.homeV2}>
            <LinearGradient
                style={styles.pagebackground}
                locations={[0, 1]}
                colors={["#f3f9ff", "#daf2ef"]}
                useAngle={true}
                angle={169.71}
            />
            <View style={[styles.content, styles.contentLayout]}>
                <View style={[styles.trendingrecipe]}>
                    <View style={{ flex: 1 }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 30, marginBottom: 100 }}>
                            <FlatList
                                data={recipes}
                                numColumns={2}
                                keyExtractor={(item) => item._id}
                                renderItem={renderRecipeItem}
                                contentContainerStyle={{ paddingVertical: 10 }}
                            />
                        </ScrollView>
                    </View>
                    <View style={styles.title4}>
                        <Text style={[styles.ktQu, styles.ktQuTypo]}>{`Kết quả `}</Text>
                        <Image
                            style={[styles.arrowIcon, styles.arrowIconLayout]}
                            resizeMode="cover"
                            source={require("../assets/arrow.png")}
                        />
                        <Image
                            style={[styles.arrowIcon1, styles.arrowIconLayout]}
                            resizeMode="cover"
                            source={require("../assets/arrow1.png")}
                        />
                    </View>
                </View>
                <View style={styles.searchboxPosition}>
                    <View style={[styles.background12, styles.searchboxPosition]} />
                    <TextInput
                        style={[styles.tmCngThc, styles.textTypo]}
                        placeholder="Tìm công thức..."
                        value={query}
                        onChangeText={(text) => setQuery(text)}
                    />
                    <TouchableOpacity onPress={handleSearch}>
                        <Image
                            style={[styles.searchIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/search.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.swipeUp, styles.swipeUpPosition]}>
                <View style={[styles.btnhome, styles.swipeUpPosition]}>
                    <Image
                        style={[styles.backgroundIcon4, styles.swipeUpPosition]}
                        resizeMode="cover"
                        source={require("../assets/background.png")}
                    />
                    <View style={styles.view} />
                </View>
            </View>
            
            <Text style={[styles.nguynLiu, styles.ktQuTypo]} onPress={() => navigation.navigate("Home")}>Nguyên liệu</Text>
            <Image
                style={styles.titleIcon}
                resizeMode="cover"
                source={require("../assets/title.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contentLayout: {
        width: 322,
        position: "absolute",
    },
    itemLayout: {
        height: 254,
        width: 150,
        left: 0,
        position: "absolute",
    },
    backgroundLayout: {
        height: 76,
        borderBottomLeftRadius: Border.br_lg,
        borderBottomRightRadius: Border.br_lg,
        width: 150,
        // backgroundColor: Color.linear,
        left: 0,
        position: "absolute",
    },
    textTypo: {
        textAlign: "left",
        fontWeight: "600",
        position: "absolute",
    },
    titleLayout1: {
        width: 90,
        position: "absolute",
    },
    bnhTypo: {
        textAlign: "center",
        fontFamily: FontFamily.sFProMedium,
        fontWeight: "500",
        color: Color.white,
        fontSize: FontSize.size_sm,
        left: 0,
        top: 0,
    },
    titleLayout: {
        width: 105,
        position: "absolute",
    },
    itemPosition: {
        left: 172,
        height: 254,
        width: 150,
        position: "absolute",
    },
    ktQuTypo: {
        color: Color.darkslategray_300,
        fontFamily: FontFamily.poppinsSemibold,
        fontSize: FontSize.size_lg,
        textAlign: "left",
        fontWeight: "600",
        position: "absolute",
    },
    arrowIconLayout: {
        height: 13,
        width: 8,
        borderRadius: Border.br_11xs,
        top: 7,
        position: "absolute",
    },
    searchboxPosition: {
        height: 57,
        width: 319,
        left: 0,
        top: 0,
        position: "absolute",
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    borderPosition: {
        left: "0%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
    },
    timeTypo: {
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.sFSubheadlineSemibold_size,
        textAlign: "center",
        position: "absolute",
    },
    swipeUpPosition: {
        bottom: 0,
        right: 0,
        left: 0,
        width: "100%",
        position: "absolute",
    },
    bottomMenusLayout: {
        height: 70,
        width: "100%",
        left: 0,
        position: "absolute",
    },
    activemenuLayout: {
        height: 45,
        width: 125,
        position: "absolute",
    },
    pagebackground: {
        // backgroundColor: Color.linear,
        width: "100%",
        left: 0,
        top: 0,
        position: "absolute",
        height: 812,
    },
    backgroundIcon: {
        borderRadius: Border.br_lg,
        top: 0,
    },
    background1: {
        top: 76,
    },
    background2: {
        top: 178,
    },
    btnmoreIcon: {
        top: -7,
        left: 79,
        width: 53,
        height: 53,
        position: "absolute",
    },
    ratingsChild: {
        height: 15,
        width: 17,
        left: 0,
        top: 0,
        position: "absolute",
    },
    text: {
        left: 24,
        color: Color.white,
        textAlign: "left",
        fontFamily: FontFamily.mulishSemibold,
        fontSize: FontSize.size_sm,
        top: 0,
    },
    text1: {
        left: 34,
        color: Color.gray_300,
        fontFamily: FontFamily.mulishSemibold,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        top: 0,
    },
    ratingsShadowBox: {
        height: 18,
        width: 47,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        top: 7,
        left: 0,
        position: "absolute",
    },
    lowerinfo: {
        top: 209,
        left: 14,
        width: 121,
        height: 31,
        position: "absolute",
    },
    bnhKemPh: {
        width: 90,
        position: "absolute",
    },
    title: {
        left: 30,
        height: 34,
        top: 17,
        width: 90,
    },
    item01: {
        top: 42,
    },
    bnhFlan: {
        textAlign: "center",
        fontFamily: FontFamily.sFProMedium,
        fontWeight: "500",
        color: Color.white,
        fontSize: FontSize.size_sm,
        left: 0,
        top: 0,
    },
    title1: {
        height: 17,
        left: 22,
        width: 105,
        top: 17,
    },
    item011: {
        top: 316,
    },
    title2: {
        left: 22,
        width: 105,
        top: 17,
        height: 34,
    },
    item012: {
        top: 316,
    },
    item013: {
        top: 42,
    },
    ktQu: {
        left: 0,
        top: 0,
    },
    arrowIcon: {
        left: 311,
    },
    arrowIcon1: {
        left: 302,
    },
    title4: {
        height: 27,
        width: 319,
        left: 0,
        top: 0,
        position: "absolute",
    },
    trendingrecipe: {
        top: 75,
        height: 570,
        left: 0,
    },
    background12: {
        borderRadius: Border.br_sm,
        backgroundColor: Color.lightcyan,
    },
    tmCngThc: {
        top: 4,
        left: 19,
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.sFProSemibold,
        color: Color.seagreen_300,
    },
    searchIcon: {
        top: 17,
        right: "7.53%",
        bottom: "29.82%",
        left: "84.95%",
        position: "absolute",
    },
    content: {
        top: 150,
        height: 645,
    },
    border: {
        width: "90.43%",
        right: "9.57%",
        borderRadius: 3,
        borderStyle: "solid",
        borderColor: "#384144",
        borderWidth: 1,
        opacity: 0.35,
    },
    capIcon: {
        height: "35.29%",
        width: "5.46%",
        top: "32.35%",
        right: "0%",
        bottom: "32.35%",
        left: "94.54%",
        opacity: 0.4,
        position: "absolute",
    },
    capacity: {
        height: "64.71%",
        width: "73.99%",
        top: "17.65%",
        right: "17.79%",
        bottom: "17.65%",
        left: "8.22%",
        borderRadius: 1,
        backgroundColor: Color.darkslategray_100,
        position: "absolute",
    },
    battery: {
        height: "25.76%",
        width: "6.49%",
        top: "39.39%",
        right: "3.82%",
        bottom: "34.85%",
        left: "89.69%",
        position: "absolute",
    },
    wifiIcon: {
        width: 15,
        height: 11,
    },
    cellularConnectionIcon: {
        height: 11,
        width: 17,
    },
    time: {
        marginTop: -9,
        width: "14.4%",
        top: "50%",
        left: "5.6%",
        fontFamily: FontFamily.sFSubheadlineSemibold,
        color: Color.darkslategray_100,
        fontWeight: "600",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.sFSubheadlineSemibold_size,
    },
    header: {
        height: 44,
        right: 0,
        left: 0,
        top: 0,
        position: "absolute",
    },
    backgroundIcon4: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        top: 0,
    },
    view: {
        marginLeft: -66.5,
        bottom: 9,
        left: "50%",
        backgroundColor: Color.gainsboro,
        width: 134,
        height: 5,
        position: "absolute",
    },
    btnhome: {
        top: 0,
    },
    swipeUp: {
        top: 777,
    },
    background13: {
        borderTopLeftRadius: Border.br_9xl,
        borderTopRightRadius: Border.br_9xl,
        top: 0,
        backgroundColor: Color.white,
        height: 70,
    },
    notificationIcon: {
        height: "36.07%",
        width: "6.2%",
        top: "30%",
        right: "9.07%",
        bottom: "33.93%",
        left: "84.73%",
        position: "absolute",
    },
    activityIcon: {
        height: "30%",
        width: "6.13%",
        top: "35%",
        right: "26.53%",
        bottom: "35%",
        left: "67.33%",
        position: "absolute",
    },
    wishlistIcon: {
        top: 24,
        right: 163,
        width: 24,
        height: 22,
        position: "absolute",
    },
    background14: {
        borderRadius: Border.br_8xl,
        backgroundColor: Color.mediumaquamarine_200,
        left: 0,
        top: 0,
    },
    icHomeIcon: {
        width: "24%",
        right: "76%",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    cngThc: {
        top: 1,
        fontFamily: FontFamily.sFProRegular,
        color: Color.mediumaquamarine_100,
        left: 28,
    },
    icHomeParent: {
        height: "53.33%",
        width: "80%",
        top: "24.44%",
        right: "10.4%",
        bottom: "22.22%",
        left: "9.6%",
        position: "absolute",
    },
    activemenu: {
        top: 13,
        left: 28,
    },
    bottomMenus: {
        top: 707,
    },
    nguynLiu: {
        top: 77,
        left: 57,
    },
    titleIcon: {
        top: 84,
        width: 23,
        height: 14,
        left: 28,
        position: "absolute",
    },
    homeV2: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
        height: 812,
        backgroundColor: Color.white,
    },
});

export default ListRecipe;
