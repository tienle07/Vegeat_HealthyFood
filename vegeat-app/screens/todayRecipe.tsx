import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import axios from 'axios';
import configUrl from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodayRecipe = () => {
    const [username, setUsername] = useState('');
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = await AsyncStorage.getItem('token');

                const config = {
                    headers: {
                        Authorization: `${token}`,
                    },
                };

                const response = await axios.get(`${configUrl.API_BASE_URL}/user/profile`, config);
                const user = response.data.user;
                setUsername(user.username);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserProfile();

    }, []);
    return (
        <View style={styles.homeV1}>
            <LinearGradient
                style={[styles.pagebackground, styles.headerPosition]}
                locations={[0, 1]}
                colors={["#f3f9ff", "#daf2ef"]}
                useAngle={true}
                angle={169.71}
            />
            <View style={styles.content}>
                <View style={styles.carousel}>
                    <View style={[styles.item01, styles.itemLayout1]}>
                        <View style={[styles.cover, styles.itemLayout1]}>
                            <Image
                                style={styles.overlayLayout}
                                resizeMode="cover"
                                source={require("../assets/placeholder7.png")}
                            />
                        </View>
                        <LinearGradient
                            style={[styles.overlay, styles.overlayLayout]}
                            locations={[0, 1]}
                            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
                            useAngle={true}
                            angle={180}
                        />
                        <View style={[styles.ratings, styles.title2Layout]}>
                            <Text style={[styles.nhGi, styles.nhGiTypo]}>Đánh giá</Text>
                            <Image
                                style={styles.starIcon}
                                resizeMode="cover"
                                source={require("../assets/star.png")}
                            />
                            <Image
                                style={[styles.starIcon1, styles.title2Layout]}
                                resizeMode="cover"
                                source={require("../assets/star1.png")}
                            />
                            <Text style={styles.text}>(25)</Text>
                        </View>
                        <Text style={[styles.bngCiXanh, styles.nhGiTypo]}>
                            Bông cải xanh và các loại rau củ chín giòn vừa phải mà không quá
                            mềm...
                        </Text>
                        <View style={[styles.title, styles.titlePosition]}>
                            <LinearGradient
                                style={[styles.bngCiWrapper, styles.wrapperPosition]}
                                locations={[0, 1]}
                                colors={["#3ddaab", "#4bedbc"]}
                                useAngle={true}
                                angle={-90}
                            >
                                <Text style={styles.bngCi}>Bông cải</Text>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={[styles.item02, styles.itemLayout1]}>
                        <View style={[styles.cover, styles.itemLayout1]}>
                            <Image
                                style={styles.overlayLayout}
                                resizeMode="cover"
                                source={require("../assets/placeholder8.png")}
                            />
                        </View>
                        <LinearGradient
                            style={[styles.overlay, styles.overlayLayout]}
                            locations={[0, 1]}
                            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
                            useAngle={true}
                            angle={180}
                        />
                        <View style={[styles.title1, styles.titlePosition]}>
                            <View style={[styles.thtBWrapper, styles.wrapperPosition]}>
                                <Text style={styles.bngCi}>Thịt bò</Text>
                            </View>
                        </View>
                        <Text style={[styles.bngCiXanh, styles.nhGiTypo]}>
                            Bông cải xanh và các loại rau củ chín giòn vừa phải mà không quá
                            mềm...
                        </Text>
                        <View style={[styles.ratings, styles.title2Layout]}>
                            <Text style={[styles.nhGi, styles.nhGiTypo]}>Đánh giá</Text>
                            <Image
                                style={styles.starIcon}
                                resizeMode="cover"
                                source={require("../assets/star.png")}
                            />
                            <Image
                                style={[styles.starIcon1, styles.title2Layout]}
                                resizeMode="cover"
                                source={require("../assets/star1.png")}
                            />
                            <Text style={styles.text}>(10)</Text>
                        </View>
                    </View>

                    <View style={[styles.verticaltabmenu, styles.itemLayout1]}>
                        <Text>Hôm nay ăn gì?</Text>
                    </View>
                </View>
                <View style={styles.othersreceipe}>
                    <View style={[styles.item011, styles.itemLayout]}>
                        <LinearGradient
                            style={styles.background}
                            locations={[0, 1]}
                            colors={["#4bedbc", "#6abfa5"]}
                            useAngle={true}
                            angle={102.58}
                        />
                        <Image
                            style={[styles.btnmoreIcon, styles.btnmoreIconLayout]}
                            resizeMode="cover"
                            source={require("../assets/btnmore.png")}
                        />
                        <View style={[styles.cover2, styles.cover2Layout]}>
                            <View style={[styles.placeholder, styles.placeholderLayout]} />
                        </View>
                        <Text style={styles.mediumSaladItaliano}>
                            Medium Salad Italiano
                        </Text>
                        <Text style={[styles.mins, styles.phtPosition]}>3mins</Text>
                    </View>
                    <View style={[styles.item021, styles.itemLayout]}>
                        <LinearGradient
                            style={styles.background}
                            locations={[0, 1]}
                            colors={["#4bedbc", "#6abfa5"]}
                            useAngle={true}
                            angle={102.58}
                        />
                        <Image
                            style={[styles.btnmoreIcon1, styles.btnmoreIconLayout]}
                            resizeMode="cover"
                            source={require("../assets/btnmore.png")}
                        />
                        <View style={[styles.cover2, styles.cover2Layout]}>
                            <Image
                                style={[styles.placeholderIcon2, styles.placeholderLayout]}
                                resizeMode="cover"
                                source={require("../assets/placeholder.png")}
                            />
                        </View>
                        <Text style={styles.mediumSaladItaliano}>{`Salad trộn sốt cá ngừ`}</Text>
                        <Text style={[styles.pht, styles.phtPosition]}>2,4 phút</Text>
                    </View>
                    <View style={[styles.title2, styles.title2Layout]}>
                        <Text style={[styles.cngThcKhc, styles.choAnhThClr]}>
                            Công thức khác
                        </Text>
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
            </View>
            <View style={[styles.header, styles.headerPosition]}>
                <Image
                    style={[styles.profilepictureIcon, styles.choAnhThPosition]}
                    resizeMode="cover"
                    source={require("../assets/profilepicture.png")}
                />
                <Text style={[styles.buiSngVui, styles.choAnhThClr]}>
                    Buổi chiều vui vẻ
                </Text>
                <Text style={[styles.choAnhTh, styles.choAnhThPosition]}>
                    Chào {username},
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    headerPosition: {
        width: '100%',
        left: 0,
        top: 0,
        position: "absolute",
    },
    itemLayout1: {
        height: 289,
        position: "absolute",
    },
    overlayLayout: {
        borderRadius: Border.br_lg,
        height: 289,
        width: 179,
        left: 0,
        top: 0,
        position: "absolute",
    },
    title2Layout: {
        height: 21,
        position: "absolute",
    },
    nhGiTypo: {
        textAlign: "left",
        color: Color.white,
        fontFamily: FontFamily.sFProLight,
        fontWeight: "300",
        fontSize: FontSize.size_xs,
        position: "absolute",
    },
    titlePosition: {
        height: 29,
        top: 14,
        left: 16,
        position: "absolute",
    },
    wrapperPosition: {
        paddingVertical: Padding.p_8xs,
        paddingHorizontal: Padding.p_lg,
        flexDirection: "row",
        borderRadius: Border.br_31xl,
        left: 0,
        top: 0,
        position: "absolute",
    },
    itemLayout: {
        height: 135,
        top: 47,
        width: 304,
        position: "absolute",
    },
    btnmoreIconLayout: {
        height: 31,
        width: 31,
        top: 86,
        position: "absolute",
    },
    cover2Layout: {
        height: 118,
        width: 118,
        top: 0,
    },
    placeholderLayout: {
        borderRadius: Border.br_41xl,
        position: "absolute",
    },
    phtPosition: {
        top: 98,
        left: 153,
        fontSize: FontSize.size_base,
        textAlign: "left",
        color: Color.white,
        position: "absolute",
    },
    choAnhThClr: {
        color: Color.darkslategray_300,
        textAlign: "left",
    },
    arrowIconLayout: {
        height: 13,
        borderRadius: Border.br_11xs,
        top: 7,
        width: 8,
        position: "absolute",
    },
    choAnhThPosition: {
        top: 63,
        position: "absolute",
    },
    borderPosition: {
        left: "0%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
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
        position: "absolute",
    },
    bottomMenusLayout: {
        height: 70,
        width: 375,
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
        height: 812,
        width: '100%',
    },
    cover: {
        width: 179,
        height: 289,
        top: 0,
        left: 0,
    },
    overlay: {
        // backgroundColor: Color.linear,
    },
    nhGi: {
        left: 71,
        top: 5,
        textAlign: "left",
        color: Color.white,
        fontFamily: FontFamily.sFProLight,
        fontWeight: "300",
        fontSize: FontSize.size_xs,
    },
    starIcon: {
        top: 3,
        left: 15,
        width: 19,
        height: 18,
        position: "absolute",
    },
    starIcon1: {
        width: 23,
        left: 0,
        top: 0,
    },
    text: {
        left: 43,
        fontFamily: FontFamily.sFProSemibold,
        fontWeight: "600",
        textAlign: "left",
        color: Color.white,
        fontSize: FontSize.size_xs,
        top: 5,
        position: "absolute",
    },
    ratings: {
        top: 250,
        width: 121,
        left: 16,
    },
    bngCiXanh: {
        top: 188,
        lineHeight: 16,
        width: 146,
        left: 16,
    },
    bngCi: {
        fontFamily: FontFamily.sFProMedium,
        fontWeight: "500",
        fontSize: FontSize.size_base,
        textAlign: "left",
        color: Color.white,
    },
    bngCiWrapper: {
        // backgroundColor: Color.linear,
    },
    title: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowRadius: 4,
        elevation: 4,
        width: 103,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    item01: {
        left: 61,
        width: 179,
        height: 289,
        top: 0,
    },
    thtBWrapper: {
        backgroundColor: Color.mediumaquamarine_100,
    },
    title1: {
        width: 91,
    },
    item02: {
        left: 260,
        width: 179,
        height: 289,
        top: 0,
    },
    dotactiveIcon: {
        top: 62,
        left: 27,
        height: 8,
        width: 8,
        position: "absolute",
    },
    hmNayN: {
        top: 132,
        left: 1,
        transform: [
            {
                rotate: "-90deg",
            },
        ],
        color: Color.darkslategray_300,
        fontSize: FontSize.size_lg,
        fontFamily: FontFamily.sFProMedium,
        fontWeight: "500",
        textAlign: "left",
        position: "absolute",
    },
    xemGnY: {
        top: 289,
        color: "rgba(64, 180, 144, 0.4)",
        textAlign: "center",
        transform: [
            {
                rotate: "-90deg",
            },
        ],
        fontSize: FontSize.size_lg,
        fontFamily: FontFamily.sFProMedium,
        fontWeight: "500",
        left: 0,
        position: "absolute",
    },
    verticaltabmenu: {
        width: 35,
        top: 1,
        left: 0,
    },
    carousel: {
        left: 306,
        width: 439,
        height: 290,
        top: 0,
        position: "absolute",
    },
    background: {
        top: 25,
        borderRadius: Border.br_base,
        height: 110,
        width: 304,
        // backgroundColor: Color.linear,
        left: 0,
        position: "absolute",
    },
    btnmoreIcon: {
        left: 275,
    },
    placeholder: {
        backgroundColor: Color.silver,
        shadowColor: "rgba(27, 128, 97, 0.87)",
        shadowRadius: 18,
        elevation: 18,
        height: 118,
        width: 118,
        top: 0,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        left: 0,
    },
    cover2: {
        left: 17,
        position: "absolute",
    },
    mediumSaladItaliano: {
        top: 42,
        width: 140,
        fontFamily: FontFamily.sFProRegular,
        left: 153,
        fontSize: FontSize.size_base,
        textAlign: "left",
        color: Color.white,
        position: "absolute",
    },
    mins: {
        fontFamily: FontFamily.mulishRegular,
    },
    item011: {
        left: 0,
    },
    btnmoreIcon1: {
        left: 255,
    },
    placeholderIcon2: {
        top: -8,
        left: -18,
        width: 154,
        height: 154,
    },
    pht: {
        fontFamily: FontFamily.sFProRegular,
    },
    item021: {
        left: 324,
    },
    cngThcKhc: {
        fontSize: FontSize.size_lg,
        color: Color.darkslategray_300,
        fontFamily: FontFamily.sFProSemibold,
        fontWeight: "600",
        left: 0,
        top: 0,
        position: "absolute",
    },
    arrowIcon: {
        left: 311,
    },
    arrowIcon1: {
        left: 302,
    },
    title2: {
        left: 303,
        width: 319,
        top: 0,
    },
    othersreceipe: {
        top: 335,
        width: 628,
        height: 182,
        left: 0,
        position: "absolute",
    },
    content: {
        top: 167,
        left: -275,
        width: 745,
        height: 517,
        position: "absolute",
    },
    profilepictureIcon: {
        left: 288,
        width: 56,
        height: 56,
    },
    buiSngVui: {
        top: 91,
        fontSize: FontSize.size_5xl,
        fontFamily: FontFamily.poppinsSemibold,
        left: 28,
        fontWeight: "600",
        position: "absolute",
    },
    choAnhTh: {
        fontFamily: FontFamily.poppinsRegular,
        left: 28,
        color: Color.darkslategray_300,
        textAlign: "left",
        fontSize: FontSize.size_base,
        top: 63,
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
        width: 17,
        height: 11,
    },
    time: {
        marginTop: -9,
        width: "14.4%",
        top: "50%",
        left: "5.6%",
        fontFamily: FontFamily.sFSubheadlineSemibold,
        color: Color.darkslategray_100,
        fontWeight: "600",
    },
    statusbar: {
        height: 44,
        right: 0,
        left: 0,
        top: 0,
        position: "absolute",
    },
    header: {
        height: 127,
    },
    backgroundIcon: {
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
    background2: {
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
    background3: {
        borderRadius: Border.br_8xl,
        backgroundColor: Color.mediumaquamarine_200,
        left: 0,
        top: 0,
    },
    icHomeIcon: {
        width: "24%",
        right: "76%",
        left: "0%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
    },
    cngThc: {
        color: Color.mediumaquamarine_100,
        left: 28,
        fontFamily: FontFamily.sFProRegular,
        top: 1,
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
    homeV1: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        height: 812,
        backgroundColor: Color.white,
    },
});

export default TodayRecipe;
