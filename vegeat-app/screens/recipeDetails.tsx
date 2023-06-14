import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import axios from 'axios';
import configUrl from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipeDetail = ({ route }) => {
    const navigation = useNavigation();
    const [recipe, setRecipe] = useState(null);

    const { recipeId } = route.params;
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const token = await AsyncStorage.getItem('token');

                const config = {
                    headers: {
                        Authorization: `${token}`,
                    },
                };

                const response = await axios.get(`${configUrl.API_BASE_URL}/recipes/${recipeId}`, config);
                setRecipe(response.data);
                console.log("=========");
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipe();
    }, [recipeId]);

    return (
        <View style={styles.recipedetail}>
            <Image
                style={styles.cookiesCreamCheeseCake1Icon}
                resizeMode="cover"
                source={require("../assets/cookiescreamcheesecake-1.png")}
            />
            <View style={[styles.recipedetailChild, styles.recipedetailLayout]} />
            <View style={[styles.pagebackground, styles.backgroundPosition]} />
            <View style={styles.content}>
                <LinearGradient
                    style={[styles.background01, styles.overlayBg]}
                    locations={[0, 1]}
                    colors={["#f3f9ff", "#daf2ef"]}
                    useAngle={true}
                    angle={169.71}
                />
                <View style={[styles.infos, styles.infosLayout]}>
                    <View style={[styles.background, styles.infosLayout]} />
                    <View style={[styles.item01, styles.itemPosition]}>
                        <Text style={[styles.protein, styles.sauFlexBox]}>Protein</Text>
                        <Text style={[styles.g, styles.gTypo]}>{recipe?.nutrition?.protein} g</Text>
                    </View>
                    <View style={[styles.item02, styles.itemPosition]}>
                        <Text style={[styles.protein, styles.sauFlexBox]}>Carbs</Text>
                        <Text style={[styles.g, styles.gTypo]}>{recipe?.nutrition?.carbs} g</Text>
                    </View>
                    <View style={[styles.item03, styles.itemPosition]}>
                        <Text style={[styles.protein, styles.sauFlexBox]}>Calo</Text>
                        <Text style={[styles.g, styles.gTypo]}>{recipe?.nutrition?.calories} g</Text>
                    </View>
                    <View style={[styles.item04, styles.itemPosition]}>
                        <Text style={[styles.protein, styles.sauFlexBox]}>Béo</Text>
                        <Text style={[styles.g, styles.gTypo]}>{recipe?.nutrition?.fat} g</Text>
                    </View>
                </View>
                <View style={styles.ratings}>
                    <Image
                        style={styles.starsIcon}
                        resizeMode="cover"
                        source={require("../assets/stars.png")}
                    />
                    <Text style={[styles.text2, styles.textTypo]}>4</Text>
                    <Text style={[styles.text3, styles.textTypo]}>/5</Text>
                </View>
                <Text style={[styles.bnhKemPh, styles.gTypo]}>{recipe?.title}</Text>
                <View style={[styles.image02, styles.imageLayout]}>
                    <Image
                        style={[styles.placeholderIcon, styles.placeholderIconLayout]}
                        resizeMode="cover"
                        source={require("../assets/placeholder10.png")}
                    />
                </View>
                <View style={[styles.image01, styles.imageLayout]}>
                    <Image
                        style={[styles.placeholderIcon1, styles.placeholderIconLayout]}
                        resizeMode="cover"
                        source={require("../assets/placeholder11.png")}
                    />
                </View>
                <View style={styles.mainimage}>
                    <Image
                        style={styles.placeholderIcon2}

                        resizeMode="contain"
                        source={{ uri: recipe?.image }}
                    />
                </View>
            </View>
            <LinearGradient
                style={[styles.overlay, styles.overlayBg]}
                locations={[0, 1]}
                colors={["rgba(227, 245, 245, 0)", "#e3f5f5"]}
                useAngle={true}
                angle={180}
            />
            <View style={styles.header}>
                <Text style={[styles.chiTit, styles.thcTypo]}>Chi tiết</Text>
                <Image
                    style={[styles.btnoptionIcon, styles.btnbackLayout]}
                    resizeMode="cover"
                    source={require("../assets/btnoption.png")}
                />
                <Pressable
                    style={[styles.btnback, styles.btnbackLayout]}
                    onPress={() => navigation.navigate("ListRecipe")}
                >
                    <View style={[styles.background1, styles.borderBorder]} />
                    <Image
                        style={styles.arrowIcon}
                        resizeMode="cover"
                        source={require("../assets/arrow2.png")}
                    />
                </Pressable>

            </View>
            <View style={[styles.swipeUp, styles.swipeUpPosition]}>
                <View style={[styles.btnhome, styles.swipeUpPosition]}>
                    <Image
                        style={[styles.backgroundIcon, styles.iconLayout3]}
                        resizeMode="cover"
                        source={require("../assets/background2.png")}
                    />
                    <View style={styles.view} />
                </View>
            </View>
            <View style={styles.recipedetailInner}>
                <View style={styles.khuPhnBtMBtBnhBngParent}>
                    {recipe?.steps.map((step, index) => (
                        <Text key={index} style={[styles.khuPhnBt]}>
                            {step}
                        </Text>
                    ))}
                    <Text style={styles.mnBnhThm}>
                        Món ngon nức mũi và cực kỳ hấp dẫn. Nguyên
                        liệu dễ kiếm và cách thực hiện cũng khá đơn giản đấy.
                    </Text>
                    <Text style={[styles.cngThc, styles.thcTypo]}>Công thức</Text>
                    <Text style={[styles.hngDnThc, styles.thcTypo]}>
                        Hướng dẫn thực hiện
                    </Text>
                </View>
            </View>
            <Image
                style={[styles.recipedetailItem, styles.recipedetailLayout]}
                resizeMode="cover"
                source={require("../assets/group-40.png")}
            />
        </View >
    );
};

const styles = StyleSheet.create({
    recipedetailLayout: {
        width: 375,
        position: "absolute",
    },
    backgroundPosition: {
        backgroundColor: Color.mediumaquamarine_100,
        left: 0,
        top: 0,
    },
    overlayBg: {
        // backgroundColor: Color.linear,

        position: "absolute",
    },
    infosLayout: {
        height: 84,
        width: 340,
        position: "absolute",
    },
    itemPosition: {
        height: 46,
        top: 17,
        position: "absolute",
    },
    sauFlexBox: {
        textAlign: "left",
        left: 0,
    },
    gTypo: {
        fontFamily: FontFamily.poppinsSemibold,
        fontWeight: "600",
        position: "absolute",
    },
    textTypo: {
        fontFamily: FontFamily.mulishSemibold,
        fontSize: FontSize.size_base,
        fontWeight: "600",
        textAlign: "left",
        top: 0,
        position: "absolute",
    },
    imageLayout: {
        height: 110,
        width: 110,
        top: 63,
        position: "absolute",
    },
    placeholderIconLayout: {
        height: 158,
        top: -16,
        borderRadius: Border.br_164xl,
        width: 110,
        position: "absolute",
    },
    thcTypo: {
        fontFamily: FontFamily.sFProSemibold,
        fontWeight: "600",
        position: "absolute",
    },
    btnbackLayout: {
        width: 46,
        height: 46,
    },
    borderBorder: {
        borderWidth: 1,
        borderStyle: "solid",
        position: "absolute",
    },
    statusbarPosition: {
        right: 0,
        left: 0,
    },
    iconLayout3: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    swipeUpPosition: {
        bottom: 0,
        right: 0,
        left: 0,
        position: "absolute",
    },
    bc1Typo: {
        color: Color.gray_100,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        fontFamily: FontFamily.sFProRegular,
        lineHeight: 20,
        left: 0,
        position: "absolute",
    },
    sauTypo: {
        fontFamily: FontFamily.sFProLight,
        fontWeight: "300",
        color: Color.gray_100,
        fontSize: FontSize.size_sm,
        lineHeight: 20,
        position: "absolute",
    },
    iconLayout1: {
        height: 102,
        width: 143,
        position: "absolute",
    },
    iconLayout: {
        width: 142,
        left: 0,
    },
    iconPosition3: {
        left: 152,
        width: 143,
    },
    iconPosition2: {
        top: 1199,
        height: 101,
        position: "absolute",
    },
    iconPosition1: {
        top: 1442,
        height: 101,
        position: "absolute",
    },
    iconPosition: {
        top: 1660,
        width: 142,
        height: 101,
        position: "absolute",
    },
    cookiesCreamCheeseCake1Icon: {
        width: 522,
        height: 376,
        left: 0,
        top: 0,
        position: "absolute",
    },
    recipedetailChild: {
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        height: 227,
        width: "100%"
    },
    pagebackground: {
        display: "none",
        width: 375,
        position: "absolute",
        height: 812,
    },
    background01: {
        top: 108,
        borderTopLeftRadius: Border.br_9xl,
        borderTopRightRadius: Border.br_9xl,
        height: 585,
        shadowOpacity: 1,
        elevation: 29,
        shadowRadius: 29,
        shadowOffset: {
            width: 0,
            height: -16,
        },
        shadowColor: "rgba(3, 46, 33, 0.02)",
        width: "100%"
    },
    background: {
        borderRadius: Border.br_sm,
        shadowOpacity: 1,
        elevation: 29,
        shadowRadius: 29,
        shadowOffset: {
            width: 0,
            height: -16,
        },
        shadowColor: "rgba(3, 46, 33, 0.02)",
        backgroundColor: Color.mediumaquamarine_100,
        left: 0,
        top: 0,
    },
    protein: {
        fontSize: FontSize.size_xs,
        color: Color.gray_400,
        fontFamily: FontFamily.sFProRegular,
        lineHeight: 20,
        textAlign: "left",
        top: 0,
        position: "absolute",
    },
    g: {
        top: 26,
        color: Color.white,
        fontSize: FontSize.size_xl,
        textAlign: "left",
        lineHeight: 20,
        left: 0,
    },
    item01: {
        left: 23,
        width: 60,
    },
    item02: {
        left: 113,
        width: 60,
    },
    item03: {
        left: 196,
        width: 60,
    },
    item04: {
        left: 268,
        width: 60,
    },
    infos: {
        top: 345,
        left: 91,
    },
    starsIcon: {
        top: 5,
        width: 80,
        height: 11,
        left: 0,
        position: "absolute",
    },
    text2: {
        left: 90,
        color: "#ff9052",
    },
    text3: {
        left: 100,
        color: "rgba(255, 144, 82, 0.4)",
    },
    ratings: {
        top: 305,
        left: 193,
        width: 115,
        height: 20,
        position: "absolute",
    },
    bnhKemPh: {
        top: 261,
        left: 92,
        fontSize: FontSize.size_5xl,
        width: 317,
        textAlign: "center",
        color: Color.darkslategray_100,
    },
    placeholderIcon: {
        left: -24,
    },
    image02: {
        left: 402,
    },
    placeholderIcon1: {
        left: 63,
    },
    image01: {
        left: 0,
    },
    placeholderIcon2: {
        top: -9,
        left: -5,
        width: 250,
        height: 250,
        borderRadius: Border.br_164xl,
        position: "absolute",
    },
    mainimage: {
        left: 138,
        width: 236,
        height: 236,
        top: 0,
        position: "absolute",
    },
    content: {
        top: 119,
        width: 512,
        height: 693,
        position: "absolute",
    },
    overlay: {
        top: 724,
        height: 88,
        left: 0,
    },
    chiTit: {
        top: 65,
        left: 150,
        fontSize: FontSize.size_3xl,
        textAlign: "center",
        color: Color.white,
    },
    btnoptionIcon: {
        left: 301,
        top: 55,
        width: 46,
        position: "absolute",
    },
    background1: {
        borderRadius: Border.br_17xl,
        borderColor: "rgba(255, 255, 255, 0.2)",
        width: 46,
        height: 46,
        left: 0,
        top: 0,
    },
    arrowIcon: {
        top: 14,
        left: 17,
        width: 12,
        height: 18,
        position: "absolute",
    },
    btnback: {
        left: 30,
        top: 55,
        width: 46,
        position: "absolute",
    },
    border: {
        height: "100%",
        width: "90.43%",
        top: "0%",
        right: "9.57%",
        bottom: "0%",
        left: "0%",
        borderRadius: 3,
        borderColor: "#fff",
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
    },
    capacity: {
        height: "64.71%",
        width: "73.99%",
        top: "17.65%",
        right: "17.79%",
        bottom: "17.65%",
        left: "8.22%",
        borderRadius: 1,
        position: "absolute",
        backgroundColor: Color.white,
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
        width: 17,
        height: 11,
    },
    time: {
        marginTop: -9,
        width: "14.4%",
        top: "50%",
        left: "5.6%",
        fontSize: FontSize.sFSubheadlineSemibold_size,
        letterSpacing: 0,
        fontFamily: FontFamily.sFSubheadlineSemibold,
        textAlign: "center",
        color: Color.white,
        fontWeight: "600",
        lineHeight: 20,
        position: "absolute",
    },
    statusbar: {
        height: 44,
        top: 0,
        position: "absolute",
    },
    header: {
        height: 101,
        left: 0,
        top: 0,
        position: "absolute",
    },
    backgroundIcon: {
        bottom: -777,
        top: 777,
        right: 0,
        left: 0,
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
    khuPhnBt: {
        top: 110,
        width: 177,
    },
    chunBTt: {
        top: 428,
        textAlign: "left",
        left: 0,
        width: 319,
    },
    sauKhiXay: {
        top: 712,
        textAlign: "left",
        left: 0,
        width: 319,
    },
    tipTheo: {
        top: 916,
        textAlign: "left",
        left: 0,
        width: 319,
    },
    sauCho: {
        top: 1120,
        textAlign: "left",
        left: 0,
        width: 319,
    },
    ctThnhCc: {
        top: 1343,
        textAlign: "left",
        left: 0,
        width: 319,
    },
    ngiMiM: {
        top: 1586,
        textAlign: "left",
        left: 0,
        width: 319,
    },
    bc1: {
        top: 404,
    },
    bc2: {
        top: 688,
    },
    bc3: {
        top: 892,
    },
    bc4: {
        top: 1096,
    },
    bc5: {
        top: 1319,
    },
    bc6: {
        top: 1562,
    },
    chn150Chn: {
        top: 162,
        left: 142,
        textAlign: "right",
        width: 177,
    },
    mnBnhThm: {
        top: 39,
        color: Color.darkslategray_100,
        fontSize: FontSize.size_base,
        textAlign: "left",
        fontFamily: FontFamily.sFProRegular,
        lineHeight: 20,
        width: 319,
        left: 0,
        position: "absolute",
    },
    cngThc: {
        color: Color.darkslategray_100,
        fontSize: FontSize.size_xl,
        textAlign: "left",
        lineHeight: 20,
        left: 0,
        width: 319,
        top: 0,
    },
    hngDnThc: {
        top: 365,
        color: Color.darkslategray_100,
        fontSize: FontSize.size_xl,
        textAlign: "left",
        lineHeight: 20,
        left: 0,
        width: 319,
    },
    image3Icon: {
        top: 567,
        height: 102,
        width: 143,
        left: 0,
    },
    image4Icon: {
        left: 153,
        top: 567,
        height: 102,
        width: 143,
    },
    image5Icon: {
        top: 771,
        left: 0,
    },
    image6Icon: {
        top: 975,
        height: 102,
        position: "absolute",
    },
    image7Icon: {
        top: 975,
        height: 102,
        position: "absolute",
    },
    image8Icon: {
        width: 142,
        left: 0,
    },
    image9Icon: {
        left: 152,
        width: 143,
    },
    image10Icon: {
        width: 142,
        left: 0,
    },
    image11Icon: {
        left: 149,
        width: 140,
    },
    image12Icon: {
        left: 151,
    },
    image13Icon: {
        left: 0,
    },
    khuPhnBtMBtBnhBngParent: {
        height: 1761,
        width: 319,
        left: 0,
        top: 0,
        position: "absolute",
    },
    recipedetailInner: {
        top: 582,
        left: 27,
        height: 230,
        width: 319,
        position: "absolute",
        overflow: "hidden",
    },
    recipedetailItem: {
        top: 697,
        height: 115,
        left: 30,
    },
    recipedetail: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
        height: 812,
        backgroundColor: Color.white,
    },
});

export default RecipeDetail;