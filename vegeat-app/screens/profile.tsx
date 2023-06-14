import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import axios from 'axios';
import configUrl from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState('');
    const [premium, setPremium] = useState(false);

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
                if (user.status === "premium") {
                    setPremium(true);
                }
                setUser(user);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserProfile();

    }, []);
    return (
        <View style={styles.homeV1}>
            <LinearGradient
                style={[styles.pagebackground, styles.pagebackgroundPosition]}
                locations={[0, 1]}
                colors={["#f3f9ff", "#daf2ef"]}
                useAngle={true}
                angle={169.71}
            />
            <View style={[styles.swipeUp, styles.swipeUpPosition]}>
                <View style={[styles.btnhome, styles.swipeUpPosition]}>
                    <Image
                        style={[styles.backgroundIcon, styles.swipeUpPosition]}
                        resizeMode="cover"
                        source={require("../assets/background.png")}
                    />
                    <View style={styles.view} />
                </View>
            </View>
            <Image
                style={[styles.bottomMenusIcon, styles.pagebackgroundLayout]}
                resizeMode="cover"
                source={require("../assets/bottom-menus1.png")}
            />
            <View style={[styles.activemenu, styles.activemenuLayout]}>
                <View style={[styles.background, styles.activemenuLayout]} />
            </View>
            <Image
                style={styles.homeV1Child}
                resizeMode="cover"
                source={require("../assets/ellipse-13.png")}
            />
            <Text style={styles.tiKhon}>Tài khoản</Text>
            <Image
                style={[styles.homeV1Item, styles.thngPosition]}
                resizeMode="cover"
                source={{uri: user.image}}
            />
            <Text style={styles.nguynAnhTh}>{user.username}</Text>
            <View style={styles.title}>
                <LinearGradient
                    style={[styles.giCaoCpWrapper, styles.backgroundLayout]}
                    locations={[0, 1]}
                    colors={["#fcd9a0", "#e7c200"]}
                    useAngle={true}
                    angle={-88.69}
                >
                    <Text style={[styles.giCaoCp, styles.textTypo]}>
                        {premium ? 'Gói cao cấp' : 'Gói thông thường'}
                    </Text>
                </LinearGradient>
            </View>
            <Text style={[styles.thngTinC, styles.thngTypo]}>Thông tin cá nhân</Text>
            <Text style={[styles.thngBo, styles.thngTypo]}   onPress={() => navigation.navigate("PricingPlan")}>Gói hiện tại</Text>
            <Pressable
                style={[styles.giHinTiContainer, styles.thngPosition]}
                onPress={() => navigation.navigate("NutritionSchedule")}
            >
                <Text style={styles.thngTypo}>Lịch trình</Text>
            </Pressable>
            <Pressable
                style={[styles.trGip]}
                onPress={() => navigation.navigate("DietPrograms")}
            >
            <Text style={[styles.thngTypo]}>Thông kê số liệu</Text>
            </Pressable>
            <Pressable
                style={[styles.iuKhonS]}
                onPress={() => navigation.navigate("Statist")}
            >
            <Text style={[styles.thngTypo]}>Theo dõi calo</Text>
            </Pressable>
            <View style={[styles.homeV1Inner, styles.homeV1InnerLayout]}>
                <View style={[styles.btnsigninParent, styles.homeV1InnerLayout]}>

                    <Pressable
                        style={[styles.btnsignin1, styles.btnsigninLayout]}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <View style={[styles.background2, styles.btnsigninLayout]} />
                        <Text style={[styles.ngXut, styles.ngXutTypo]}>đăng xuất</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.kcalinfo}>
                <Image
                    style={styles.backgroundIcon1}
                    resizeMode="cover"
                    source={require("../assets/background4.png")}
                />
                <Text style={[styles.text, styles.textTypo]}>18</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pagebackgroundPosition: {
        // backgroundColor: Color.linear,
        top: 0,
        position: "absolute",
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    timeFlexBox: {
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
    pagebackgroundLayout: {
        width: "100%",
        left: 0,
    },
    activemenuLayout: {
        height: 45,
        width: 125,
        position: "absolute",
    },
    thngPosition: {
        left: 28,
        position: "absolute",
    },
    backgroundLayout: {
        borderRadius: Border.br_31xl,
        left: 0,
    },
    textTypo: {
        fontWeight: "500",
        fontSize: FontSize.size_xs,
        color: Color.white,
    },
    thngTypo: {
        color: Color.dimgray,
        fontSize: FontSize.size_lg,
        textAlign: "left",
        fontFamily: FontFamily.sFProRegular,
    },
    homeV1InnerLayout: {
        height: 46,
        width: 295,
        position: "absolute",
    },
    btnsigninLayout: {
        width: 139,
        height: 46,
        top: 0,
        position: "absolute",
    },
    ngXutTypo: {
        textTransform: "uppercase",
        fontSize: FontSize.size_base,
        top: 13,
        fontFamily: FontFamily.sFProRegular,
        textAlign: "center",
        position: "absolute",
    },
    pagebackground: {
        width: "100%",
        left: 0,
        height: 812,
        // backgroundColor: Color.linear,
    },
    border: {
        height: "100%",
        width: "90.43%",
        top: "0%",
        right: "9.57%",
        bottom: "0%",
        left: "0%",
        borderRadius: 3,
        borderStyle: "solid",
        borderColor: "#384144",
        borderWidth: 1,
        opacity: 0.35,
        position: "absolute",
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
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.sFSubheadlineSemibold_size,
        textAlign: "center",
    },
    header: {
        height: 44,
        right: 0,
        left: 0,
        top: 0,
        position: "absolute",
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
    bottomMenusIcon: {
        top: 707,
        height: 70,
        position: "absolute",
    },
    background: {
        borderRadius: Border.br_8xl,
        backgroundColor: Color.mediumaquamarine_200,
        left: 0,
        top: 0,
    },
    activemenu: {
        top: 720,
        left: 213,
    },
    homeV1Child: {
        top: 75,
        left: 24,
        width: 83,
        height: 83,
        position: "absolute",
    },
    tiKhon: {
        top: 732,
        left: 290,
        color: Color.mediumaquamarine_100,
        fontFamily: FontFamily.sFProRegular,
        textAlign: "center",
        lineHeight: 20,
        letterSpacing: 0,
        fontSize: FontSize.sFSubheadlineSemibold_size,
        position: "absolute",
    },
    homeV1Item: {
        top: 80,
        width: 74,
        height: 74,
    },
    nguynAnhTh: {
        top: 87,
        fontSize: FontSize.size_xl,
        fontFamily: FontFamily.poppinsSemibold,
        color: Color.darkslategray_300,
        textAlign: "left",
        left: 121,
        fontWeight: "600",
        position: "absolute",
    },
    giCaoCp: {
        fontFamily: FontFamily.sFProMedium,
        color: Color.white,
        textAlign: "left",
    },
    giCaoCpWrapper: {
        flexDirection: "row",
        paddingHorizontal: Padding.p_lg,
        paddingVertical: Padding.p_8xs,
        // backgroundColor: Color.linear,
        top: 0,
        position: "absolute",
    },
    title: {
        top: 125,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        width: 150,
        height: 24,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        left: 121,
        position: "absolute",
    },
    thngTinC: {
        top: 201,
        left: 28,
        position: "absolute",
    },
    thngBo: {
        top: 258,
        left: 28,
        position: "absolute",
    },
    giHinTiContainer: {
        top: 315,
    },
    trGip: {
        top: 372,
        left: 28,
        position: "absolute",
    },
    iuKhonS: {
        top: 429,
        left: 28,
        position: "absolute",
    },
    background1: {
        backgroundColor: Color.mintcream_100,
        borderRadius: Border.br_31xl,
        left: 0,
    },
    iTiKhon: {
        left: 6,
        width: 127,
        color: Color.mediumaquamarine_100,
    },
    btnsignin: {
        left: 156,
        shadowColor: "rgba(0, 0, 0, 0.05)",
        width: 139,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    background2: {
        backgroundColor: "#ff9090",
        borderRadius: Border.br_31xl,
        left: 0,
    },
    ngXut: {
        left: 20,
        width: 98,
        color: Color.white,
    },
    btnsignin1: {
        shadowColor: "rgba(0, 0, 0, 0.05)",
        width: 139,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        left: 0,
    },
    btnsigninParent: {
        left: 0,
        top: 0,
    },
    homeV1Inner: {
        top: 501,
        left: 25,
    },
    backgroundIcon1: {
        top: -5,
        left: -9,
        width: 55,
        height: 55,
        position: "absolute",
    },
    text: {
        top: 10,
        left: 10,
        fontFamily: FontFamily.poppinsMedium,
        width: 16,
        height: 19,
        color: Color.white,
        textAlign: "center",
        position: "absolute",
    },
    kcalinfo: {
        top: 250,
        left: 310,
        width: 37,
        height: 37,
        position: "absolute",
    },
    homeV1: {
        backgroundColor: Color.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
        height: 812,
    },
});

export default Profile;
