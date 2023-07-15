import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import configUrl from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const [isOpenDoor, setIsOpenDoor] = useState(false);
    const fridge = useState(new Animated.Value(0))[0];
    const fridgeDoor = useState(new Animated.Value(0))[0];
    const navigation = useNavigation();
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

        const fetchIngredients = async () => {
            try {

                const token = await AsyncStorage.getItem('token');

                const config = {
                    headers: {
                        Authorization: `${token}`,
                    },
                };

                const response = await axios.get(`${configUrl.API_BASE_URL}/ingredients/getAllIngredient/`, config);
                console.log(response);
                const data = response.data;
                setIngredients(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserProfile();
        fetchIngredients();

    }, []);

    const openFridge = () => {
        Animated.timing(fridge, {
            toValue: -70,
            duration: 1000,
            useNativeDriver: true
        }).start();

        Animated.timing(fridgeDoor, {
            toValue: 180,
            duration: 1000,
            useNativeDriver: true
        }).start();

        setTimeout(() => {
            setIsOpenDoor(true);
        }, 470);
    }

    const closeFridge = () => {
        Animated.timing(fridge, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start();

        Animated.timing(fridgeDoor, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start();

        setTimeout(() => {
            setIsOpenDoor(false);
        }, 470);
    }

    const handleDrawerPress = (order: number) => {
        console.log(order);
    }

    const renderIngredient = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
            <Image
                style={[styles.groupItem, styles.homeChildLayout]}
                resizeMode="cover"
                source={require("../assets/group-45.png")}
            />
            <Image
                style={styles.groupInner}
                resizeMode="cover"
                source={require("../assets/ellipse-16.png")}
            />
            <Text style={[styles.text, styles.tmClr]}>_</Text>
        </View>
    );

    return (
        <View style={styles.homeV1}>
            <LinearGradient
                style={[styles.pagebackground, styles.headerPosition]}
                locations={[0, 1]}
                colors={["#f3f9ff", "#daf2ef"]}
                useAngle={true}
                angle={169.71}
            />
            <View style={[styles.homeV1Child, styles.pressableShadowBox]} />
            <View style={[styles.header, styles.headerPosition]}>
                <Text style={[styles.buiSngVui, styles.choAnhThPosition]}>
                    Buổi chiều vui vẻ
                </Text>
                <Text style={[styles.choAnhTh, styles.choAnhThPosition]}>
                    Chào {username},
                </Text>
            </View>
            <View style={styles.swipeUp}>
                <View style={styles.viewPosition}>
                    <View style={[styles.view, styles.viewPosition]} />
                </View>
            </View>
            {/* <Image
                style={styles.homeV1Item}
                resizeMode="cover"
                source={require("../assets/ellipse-12.png")}
            />
            <LinearGradient
                style={[styles.homeV1Inner, styles.homeLayout]}
                locations={[0, 0.9, 1]}
                colors={["#40b490", "#28a67f", "#008e62"]}
                useAngle={true}
                angle={180}
            />
            <View style={styles.rectangleView} />
            <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={require("../assets/ellipse-10.png")}
            />
            <View style={[styles.homeV1Child1, styles.homeLayout]} />
            <Image
                style={[styles.groupIcon, styles.groupIconPosition]}
                resizeMode="cover"
                source={require("../assets/group.png")}
            />
            <Image
                style={[styles.groupIcon1, styles.groupIconPosition]}
                resizeMode="cover"
                source={require("../assets/group1.png")}
            /> */}
            <View style={styles.container}>
                <Animated.View style={[
                    styles.fridgeFrame,
                    {
                        transform: [{ translateX: fridge }],
                    }
                ]}>
                    <Image
                        style={styles.fridge}
                        source={require('./assets/images/fridge_back.png')}
                    />
                    {/* Place food inside fridge here */}
                    <View style={styles.freezerLeft}>
                    </View>
                    <View style={styles.freezerRight}>
                    </View>
                    <View style={styles.fridgeCompartment1}>
                    </View>
                    <View style={styles.fridgeCompartment2}>
                    </View>
                    <View style={styles.fridgeCompartment3}>
                    </View>
                    <View style={styles.fridgeCompartment4}>
                    </View>
                    <Image
                        style={styles.fridgeFront}
                        source={require('./assets/images/fridge_front.png')}
                    />
                    <Animated.View
                        style={[
                            styles.fridgeDoorFrame,
                            {
                                transform: [
                                    {
                                        rotateY: fridgeDoor.interpolate({
                                            inputRange: [0, 180],
                                            outputRange: ['0deg', '180deg']
                                        })
                                    }
                                ]
                            }
                        ]}>
                        <Image style={[
                            styles.fridgeDoor,
                            {
                                opacity: isOpenDoor ? 0 : 1
                            }
                        ]}
                            source={require('./assets/images/fridge_door.png')}
                        />
                        <Image
                            style={[
                                styles.fridgeDoorOpen,
                                {
                                    opacity: isOpenDoor ? 1 : 0
                                }
                            ]}
                            source={require('./assets/images/fridge_door_open.png')}
                        />
                        {/* Place food in fridge door here */}
                        <Image
                            style={[
                                styles.frideDoorOpen_,
                                {
                                    opacity: isOpenDoor ? 1 : 0
                                }
                            ]}
                            source={require('./assets/images/fridge_door_open_.png')}
                        />
                        <Pressable
                            style={{ top: 160, left: 36, width: 48, height: 50, position: 'absolute' }}
                            onPress={isOpenDoor ? closeFridge : openFridge}
                        />
                    </Animated.View>
                    <Pressable pointerEvents={isOpenDoor ? 'auto' : 'none'} style={styles.freezerLeft} onPress={() => isOpenDoor && handleDrawerPress(0)} />
                    <Pressable pointerEvents={isOpenDoor ? 'auto' : 'none'} style={styles.freezerRight} onPress={() => isOpenDoor && handleDrawerPress(1)} />
                    <Pressable pointerEvents={isOpenDoor ? 'auto' : 'none'} style={styles.fridgeCompartment1} onPress={() => isOpenDoor && handleDrawerPress(2)} />
                    <Pressable pointerEvents={isOpenDoor ? 'auto' : 'none'} style={styles.fridgeCompartment2} onPress={() => isOpenDoor && handleDrawerPress(3)} />
                    <Pressable pointerEvents={isOpenDoor ? 'auto' : 'none'} style={styles.fridgeCompartment3} onPress={() => isOpenDoor && handleDrawerPress(4)} />
                    <Pressable pointerEvents={isOpenDoor ? 'auto' : 'none'} style={styles.fridgeCompartment4} onPress={() => isOpenDoor && handleDrawerPress(5)} />
                </Animated.View>
            </View >
            <View style={styles.groupParent}>
                <View style={[styles.rectangleParent, styles.wrapperPosition]}>
                    <View style={[styles.groupChild, styles.wrapperPosition]} />
                    <Text style={[styles.nhpKhiLng, styles.tmPosition]}>
                        Nhập khối lượng
                    </Text>
                    <Text style={[styles.gram, styles.tmPosition]}>gram</Text>
                    <LinearGradient
                        style={[styles.wrapper, styles.wrapperPosition]}
                        locations={[0, 1]}
                        colors={["#3ddaab", "#4bedbc"]}
                        useAngle={true}
                        angle={-90}
                    >
                        <Pressable
                            style={[styles.pressable, styles.pressableShadowBox]}
                        //   onPress={() => navigation.navigate("HomeV21")}
                        >
                            <Text style={[styles.tm, styles.tmClr]} onPress={() => navigation.navigate('ListRecipe')}>Tìm</Text>
                        </Pressable>
                    </LinearGradient>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    freezerLeft: {
        top: 30,
        left: 98,
        width: 88,
        height: 64,
        position: "absolute",
    },
    freezerRight: {
        top: 51,
        left: 191,
        width: 58,
        height: 43,
        position: "absolute",
    },
    fridgeCompartment1: {
        top: 102,
        left: 90,
        width: 168,
        height: 60,
        position: "absolute",
    },
    fridgeCompartment2: {
        top: 167,
        left: 90,
        width: 168,
        height: 60,
        position: "absolute",
    },
    fridgeCompartment3: {
        bottom: 116,
        left: 90,
        width: 168,
        height: 60,
        position: "absolute",
    },
    fridgeCompartment4: {
        bottom: 50,
        left: 90,
        width: 168,
        height: 60,
        position: "absolute",
    },
    container: {
        top: "20%",
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
        width: "400%",
        position: 'absolute',
    },
    fridgeFrame: {
        height: 406,
        alignItems: 'center',
    },
    fridge: {
        width: 343,
        height: 406,
    },
    fridgeFront: {
        top: 32,
        left: 84,
        width: 181,
        height: 329,
        position: 'absolute',
    },
    fridgeDoorFrame: {
        left: 57,
        bottom: 20,
        width: 237 * 1.85,
        height: 390,
        position: 'absolute',
    },
    fridgeDoor: {
        width: 237,
    },
    fridgeDoorOpen: {
        top: 18,
        left: 75,
        width: 139,
        height: 359,
        transform: [{ rotateY: '180deg' }],
        position: 'absolute',
    },
    frideDoorOpen_: {
        top: 52,
        left: 87,
        width: 141,
        height: 314,
        transform: [{ rotateY: '180deg' }],
        position: 'absolute',
    },
    headerPosition: {
        width: "100%",
        position: "absolute",
    },
    pressableShadowBox: {
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: -4,
        },
    },
    choAnhThPosition: {
        color: Color.darkslategray_300,
        left: 28,
        textAlign: "left",
        position: "absolute",
    },
    viewPosition: {
        bottom: 0,
        marginLeft: -67,
        height: 5,
        width: 134,
        left: "50%",
        position: "absolute",
    },
    homeLayout: {
        borderRadius: Border.br_xl,
        position: "absolute",
    },
    groupIconPosition: {
        top: "23.96%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    thmTypo: {
        color: Color.seagreen_300,
        fontFamily: FontFamily.sFProRegular,
        textAlign: "left",
        position: "absolute",
    },
    hnhTypo: {
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.sFProRegular,
        textAlign: "center",
        position: "absolute",
    },
    wrapperPosition: {
        height: 45,
        top: 0,
        position: "absolute",
    },
    tmPosition: {
        top: 10,
        fontSize: FontSize.size_base,
    },
    tmClr: {
        color: Color.white,
        textAlign: "left",
        position: "absolute",
    },
    handlerLayout: {
    },
    homeChildLayout: {
        height: 62,
        position: "absolute",
    },
    pagebackground: {
        // backgroundColor: Color.linear,
        top: 0,
        height: 812,
        width: "100%",
    },
    homeV1Child: {
        top: 600,
        borderRadius: Border.br_9xl,
        shadowColor: "rgba(0, 0, 0, 0.06)",
        shadowRadius: 10,
        elevation: 10,
        height: 282,
        width: "100%",
        left: 0,
        position: "absolute",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        backgroundColor: Color.white,
    },
    buiSngVui: {
        top: 91,
        fontSize: FontSize.size_5xl,
        fontFamily: FontFamily.poppinsSemibold,
        textAlign: "left",
        fontWeight: "600",
        color: Color.darkslategray_300,
        left: 28,
    },
    choAnhTh: {
        top: 63,
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_base,
        textAlign: "left",
        color: Color.darkslategray_300,
        left: 28,
    },
    border: {
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
        height: "100%",
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
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
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
        fontSize: FontSize.sFSubheadlineSemibold_size,
        letterSpacing: 0,
        lineHeight: 20,
        fontFamily: FontFamily.sFSubheadlineSemibold,
        color: Color.darkslategray_100,
        textAlign: "center",
        fontWeight: "600",
        position: "absolute",
    },
    statusbar: {
        right: 0,
        height: 44,
        left: 0,
        top: 0,
        position: "absolute",
    },
    header: {
        height: 127,
        top: 0,
    },
    view: {
        backgroundColor: Color.gainsboro,
    },
    swipeUp: {
        marginLeft: -66.5,
        bottom: 9,
        height: 5,
        width: 134,
        left: "50%",
        position: "absolute",
    },
    homeV1Item: {
        top: 552,
        width: 343,
        height: 33,
        left: 0,
        position: "absolute",
    },
    homeV1Inner: {
        top: 181,
        left: 18,
        width: 210,
        height: 394,
        // backgroundColor: Color.linear,
    },
    rectangleView: {
        top: 566,
        left: 41,
        borderTopLeftRadius: Border.br_xl,
        borderTopRightRadius: Border.br_xl,
        backgroundColor: Color.seagreen_200,
        width: 165,
        height: 9,
        position: "absolute",
    },
    ellipseIcon: {
        top: 331,
        left: 32,
        width: 23,
        height: 41,
        position: "absolute",
    },
    homeV1Child1: {
        top: 324,
        left: 42,
        backgroundColor: Color.mediumaquamarine_100,
        height: 10,
        transform: [
            {
                rotate: "90deg",
            },
        ],
        width: 54,
    },
    groupIcon: {
        height: "43.11%",
        width: "52.43%",
        right: "41.03%",
        bottom: "32.93%",
        left: "6.54%",
    },
    groupIcon1: {
        height: "44.09%",
        width: "40.31%",
        right: "3.73%",
        bottom: "31.95%",
        left: "55.96%",
    },
    thm: {
        left: 67,
        fontSize: FontSize.size_base,
        top: 0,
    },
    trngVt: {
        top: 44,
        fontSize: FontSize.size_xs,
        color: Color.seagreen_300,
        textAlign: "center",
        left: 0,
    },
    hnhL: {
        left: 132,
        top: 44,
        fontSize: FontSize.size_xs,
        color: Color.seagreen_300,
        textAlign: "center",
    },
    hnhL1: {
        left: 204,
        top: 44,
        fontSize: FontSize.size_xs,
        color: Color.seagreen_300,
        textAlign: "center",
    },
    thmParent: {
        top: 81,
        left: 116,
        width: 247,
        height: 58,
        position: "absolute",
    },
    groupChild: {
        backgroundColor: Color.mintcream_100,
        width: 215,
        borderRadius: Border.br_81xl,
        left: 0,
    },
    nhpKhiLng: {
        left: 19,
        color: Color.seagreen_300,
        fontFamily: FontFamily.sFProRegular,
        textAlign: "left",
        position: "absolute",
    },
    gram: {
        left: 155,
        color: Color.mediumaquamarine_100,
        fontFamily: FontFamily.sFProRegular,
        top: 13,
        textAlign: "left",
        position: "absolute",
    },
    tm: {
        left: 29,
        fontWeight: "500",
        fontFamily: FontFamily.sFProMedium,
        zIndex: 0,
        top: 13,
        fontSize: FontSize.size_base,
    },
    pressable: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowRadius: 4,
        elevation: 4,
        flexDirection: "row",
        paddingHorizontal: Padding.p_lg,
        paddingVertical: Padding.p_8xs,
        borderRadius: Border.br_81xl,
        height: "100%",
        // backgroundColor: Color.linear,
        width: "100%",
        shadowOffset: {
            width: 0,
            height: -4,
        },
    },
    wrapper: {
        borderRadius: Border.br_81xl,
        left: 228,
        width: 88,
    },
    rectangleParent: {
        width: 316,
        left: 0,
    },
    groupParent: {
        top: 631,
        left: 34,
        width: 363,
        height: 139,
        position: "absolute",
    },
    handler: {
        top: 609,
        left: 157,
        borderRadius: Border.br_3xl,
        backgroundColor: Color.whitesmoke,
        height: 5,
    },
    homeV1Child2: {
        left: 273,
        width: 62,
        height: 62,
        top: 695,
    },
    homeV1Child3: {
        left: 343,
        top: 695,
        width: 54,
    },
    homeV1Child4: {
        left: 143,
        width: 62,
        height: 62,
        top: 695,
    },
    trngG: {
        top: 71,
        left: 2,
        color: "#319979",
        textAlign: "left",
    },
    groupItem: {
        top: 10,
        left: -4,
        width: 62,
        height: 62,
    },
    groupInner: {
        top: 5,
        left: 40,
        width: 20,
        height: 20,
        position: "absolute",
    },
    text: {
        left: 46,
        fontSize: FontSize.size_sm,
        fontWeight: "700",
        fontFamily: FontFamily.sFProBold,
        top: 0,
    },
    trngGParent: {
        height: 100,
    },
    homeV1: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        height: 812,
        width: "100%",
        backgroundColor: Color.white,
    },
});

export default Home;