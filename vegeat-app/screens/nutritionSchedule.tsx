import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const NutritionSchedule = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.nutritionschedule}>
            <View style={[styles.pagebackground, styles.headerPosition]} />
            <View style={styles.content}>
                <LinearGradient
                    style={[styles.background01, styles.overlayPosition]}
                    locations={[0, 1]}
                    colors={["#fdfeff", "#eafcfa"]}
                    useAngle={true}
                    angle={169.71}
                />
                <View style={styles.graph}>
                    <View style={styles.hour}>
                        <Text style={[styles.text, styles.textTypo1]}>08:00</Text>
                        <Text style={[styles.text1, styles.textTypo1]}>09:00</Text>
                        <Text style={[styles.text2, styles.textTypo1]}>10:00</Text>
                        <Text style={[styles.text3, styles.textTypo1]}>11:00</Text>
                        <Text style={[styles.text4, styles.textTypo1]}>12:00</Text>
                        <Text style={[styles.text5, styles.textTypo1]}>13:00</Text>
                    </View>
                    <View style={styles.lines}>
                        <View style={[styles.line01, styles.lineLayout]} />
                        <View style={[styles.line02, styles.lineLayout]} />
                        <View style={[styles.line03, styles.lineLayout]} />
                        <View style={[styles.line04, styles.lineLayout]} />
                        <View style={[styles.line05, styles.lineLayout]} />
                        <View style={[styles.line06, styles.lineLayout]} />
                    </View>
                    <View style={[styles.data, styles.gPosition]}>
                        <View style={[styles.item01, styles.itemLayout1]}>
                            <View style={[styles.background, styles.backgroundPosition]} />
                            <Text style={styles.cam}>Cam</Text>
                            <Text style={[styles.g, styles.gPosition]}>125 g</Text>
                            <View style={[styles.indicator, styles.indicatorPosition]} />
                        </View>
                        <View style={[styles.item02, styles.itemLayout1]}>
                            <View style={[styles.background1, styles.backgroundPosition]} />
                            <Text style={styles.cam}>Dưa leo</Text>
                            <Text style={[styles.g, styles.gPosition]}>211 g</Text>
                            <View style={[styles.indicator1, styles.indicatorPosition]} />
                        </View>
                        <View style={[styles.item03, styles.itemLayout1]}>
                            <View style={[styles.background2, styles.backgroundPosition]} />
                            <Text style={styles.cam}>Bơ</Text>
                            <Text style={[styles.g, styles.gPosition]}>34 g</Text>
                            <View style={[styles.indicator2, styles.indicatorPosition]} />
                        </View>
                        <View style={[styles.item04, styles.itemLayout1]}>
                            <View style={[styles.background3, styles.backgroundPosition]} />
                            <Text style={styles.cam}>Ngô</Text>
                            <Text style={[styles.g, styles.gPosition]}>234g</Text>
                            <View style={[styles.indicator3, styles.indicatorPosition]} />
                        </View>
                    </View>
                    <View style={styles.tabmenu}>
                        <Text style={[styles.carbo, styles.carboTypo]}>Carbo</Text>
                        <Text style={styles.dinhDng}>Dinh dưỡng</Text>
                        <Image
                            style={styles.dotactiveIcon}
                            resizeMode="cover"
                            source={require("../assets/dotactive.png")}
                        />
                        <Text style={[styles.vitamin, styles.carboTypo]}>Vitamin</Text>
                    </View>
                </View>
                <LinearGradient
                    style={[styles.overlay, styles.overlayPosition]}
                    locations={[0, 1]}
                    colors={["rgba(227, 245, 245, 0)", "#e3f5f5"]}
                    useAngle={true}
                    angle={180}
                />
                <View style={styles.dates}>
                    <View style={[styles.item, styles.itemLayout]}>
                        <View style={[styles.background4, styles.backgroundLayout]} />
                        <Text style={[styles.sun, styles.t2FlexBox]}>Sun</Text>
                        <Text style={[styles.text6, styles.textTypo]}>16</Text>
                    </View>
                    <View style={[styles.item1, styles.itemLayout]}>
                        <View style={[styles.background4, styles.backgroundLayout]} />
                        <Text style={[styles.t2, styles.t2Position]}>T2</Text>
                        <Text style={[styles.text7, styles.textTypo]}>17</Text>
                    </View>
                    <View style={[styles.item2, styles.itemLayout]}>
                        <View style={[styles.background4, styles.backgroundLayout]} />
                        <Text style={[styles.t2, styles.t2Position]}>T3</Text>
                        <Text style={[styles.text6, styles.textTypo]}>18</Text>
                    </View>
                    <View style={[styles.item3, styles.itemLayout]}>
                        <View style={[styles.background7, styles.backgroundLayout]} />
                        <Text style={[styles.t4, styles.t2FlexBox]}>T4</Text>
                        <Text style={[styles.text6, styles.textTypo]}>19</Text>
                    </View>
                    <View style={[styles.item4, styles.itemLayout]}>
                        <View style={[styles.background4, styles.backgroundLayout]} />
                        <Text style={[styles.t2, styles.t2Position]}>T5</Text>
                        <Text style={[styles.text10, styles.textTypo]}>20</Text>
                    </View>
                    <View style={[styles.item5, styles.itemLayout]}>
                        <View style={[styles.background4, styles.backgroundLayout]} />
                        <Text style={[styles.t2, styles.t2Position]}>T6</Text>
                        <Text style={[styles.text7, styles.textTypo]}>21</Text>
                    </View>
                    <View style={[styles.item6, styles.itemLayout]}>
                        <View style={[styles.background4, styles.backgroundLayout]} />
                        <Text style={[styles.t4, styles.t2FlexBox]}>T7</Text>
                        <Text style={[styles.text10, styles.textTypo]}>22</Text>
                    </View>
                    <Image
                        style={styles.dotIcon}
                        resizeMode="cover"
                        source={require("../assets/dot1.png")}
                    />
                </View>
            </View>
            <View style={[styles.header, styles.headerPosition]}>
                <Text style={styles.lchTrnh}>Lịch trình</Text>
                <Image
                    style={[styles.btnoptionIcon, styles.btnbackLayout]}
                    resizeMode="cover"
                    source={require("../assets/btnoption.png")}
                />
                <Pressable
                    style={[styles.btnback, styles.btnbackLayout]}
                    onPress={() => navigation.navigate("Profile")}
                >
                    <View style={[styles.background11, styles.borderBorder]} />
                    <Image
                        style={[styles.arrowIcon, styles.t2Position]}
                        resizeMode="cover"
                        source={require("../assets/arrow2.png")}
                    />
                </Pressable>
            </View>
            <View style={[styles.swipeUp, styles.swipeUpPosition]}>
                <View style={[styles.btnhome, styles.swipeUpPosition]}>
                    <Image
                        style={[styles.backgroundIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/background2.png")}
                    />
                    <View style={styles.view} />
                </View>
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
    overlayPosition: {
        // backgroundColor: Color.linear,
        left: 46,
        width: '100%',
        position: "absolute",
    },
    textTypo1: {
        textAlign: "left",
        fontSize: FontSize.size_sm,
    },
    lineLayout: {
        width: 1,
        backgroundColor: Color.lightgray_100,
        height: 387,
        top: 0,
        position: "absolute",
    },
    gPosition: {
        left: 19,
        position: "absolute",
    },
    itemLayout1: {
        height: 67,
        width: 108,
        position: "absolute",
    },
    backgroundPosition: {
        width: 103,
        borderBottomRightRadius: Border.br_xs,
        borderTopRightRadius: Border.br_xs,
        left: 5,
        height: 67,
        top: 0,
        position: "absolute",
    },
    indicatorPosition: {
        width: 5,
        height: 67,
        left: 0,
        top: 0,
        position: "absolute",
    },
    carboTypo: {
        fontFamily: FontFamily.sFProMedium,
        fontWeight: "500",
        fontSize: FontSize.size_lg,
        textAlign: "left",
        color: Color.darkslategray_400,
        top: 0,
        position: "absolute",
    },
    itemLayout: {
        height: 80,
        width: 53,
        top: 0,
        position: "absolute",
    },
    backgroundLayout: {
        borderRadius: Border.br_sm,
        height: 80,
        width: 53,
        left: 0,
        top: 0,
        position: "absolute",
    },
    t2FlexBox: {
        textAlign: "center",
        color: Color.white,
    },
    textTypo: {
        fontFamily: FontFamily.poppinsSemibold,
        top: 39,
        fontSize: FontSize.size_3xl,
        textAlign: "center",
        color: Color.white,
        fontWeight: "600",
        position: "absolute",
    },
    t2Position: {
        left: 17,
        top: 14,
        position: "absolute",
    },
    btnbackLayout: {
        height: 46,
        width: 46,
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
    iconLayout: {
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
    pagebackground: {
        backgroundColor: Color.mediumaquamarine_100,
        height: 812,
        width: '100%',
    },
    background01: {
        top: 111,
        borderTopLeftRadius: Border.br_9xl,
        borderTopRightRadius: Border.br_9xl,
        shadowColor: "rgba(3, 46, 33, 0.02)",
        shadowOffset: {
            width: 0,
            height: -16,
        },
        shadowRadius: 29,
        elevation: 29,
        shadowOpacity: 1,
        height: 579,
    },
    text: {
        color: Color.darkslategray_400,
        fontFamily: FontFamily.mulishSemibold,
        textAlign: "left",
        fontWeight: "600",
        top: 0,
        position: "absolute",
        left: 0,
    },
    text1: {
        left: 66,
        color: Color.darkslategray_400,
        fontFamily: FontFamily.mulishSemibold,
        textAlign: "left",
        fontWeight: "600",
        top: 0,
        position: "absolute",
    },
    text2: {
        left: 132,
        color: Color.darkslategray_400,
        fontFamily: FontFamily.mulishSemibold,
        textAlign: "left",
        fontWeight: "600",
        top: 0,
        position: "absolute",
    },
    text3: {
        left: 198,
        color: Color.darkslategray_400,
        fontFamily: FontFamily.mulishSemibold,
        textAlign: "left",
        fontWeight: "600",
        top: 0,
        position: "absolute",
    },
    text4: {
        left: 264,
        color: Color.darkslategray_400,
        fontFamily: FontFamily.mulishSemibold,
        textAlign: "left",
        fontWeight: "600",
        top: 0,
        position: "absolute",
    },
    text5: {
        left: 330,
        color: Color.darkslategray_400,
        fontFamily: FontFamily.mulishSemibold,
        textAlign: "left",
        fontWeight: "600",
        top: 0,
        position: "absolute",
    },
    hour: {
        top: 478,
        left: 3,
        width: 367,
        height: 18,
        position: "absolute",
    },
    line01: {
        left: 0,
    },
    line02: {
        left: 67,
    },
    line03: {
        left: 134,
    },
    line04: {
        left: 201,
    },
    line05: {
        left: 268,
    },
    line06: {
        left: 335,
    },
    lines: {
        top: 78,
        width: 336,
        height: 387,
        left: 19,
        position: "absolute",
    },
    background: {
        backgroundColor: "#ffa24b",
    },
    cam: {
        top: 10,
        fontSize: FontSize.size_base,
        color: Color.white,
        fontFamily: FontFamily.sFProRegular,
        left: 19,
        textAlign: "left",
        position: "absolute",
    },
    g: {
        top: 38,
        fontFamily: FontFamily.mulishRegular,
        color: Color.gray_400,
        textAlign: "left",
        fontSize: FontSize.size_sm,
    },
    indicator: {
        backgroundColor: "#e97000",
        opacity: 0.8,
    },
    item01: {
        left: 0,
        top: 0,
    },
    background1: {
        backgroundColor: "#64a92e",
    },
    indicator1: {
        backgroundColor: "#377b01",
    },
    item02: {
        top: 102,
        left: 68,
    },
    background2: {
        backgroundColor: "#89ef94",
    },
    indicator2: {
        backgroundColor: "#47b251",
    },
    item03: {
        top: 221,
        left: 22,
    },
    background3: {
        backgroundColor: "#f8c100",
    },
    indicator3: {
        backgroundColor: "#ba9100",
    },
    item04: {
        top: 304,
        left: 212,
    },
    data: {
        top: 77,
        width: 320,
        height: 371,
    },
    carbo: {
        left: 0,
    },
    dinhDng: {
        left: 78,
        color: Color.darkslategray_300,
        fontFamily: FontFamily.sFProSemibold,
        fontSize: FontSize.size_lg,
        textAlign: "left",
        fontWeight: "600",
        top: 0,
        position: "absolute",
    },
    dotactiveIcon: {
        top: 32,
        left: 125,
        width: 8,
        height: 8,
        position: "absolute",
    },
    vitamin: {
        left: 197,
    },
    tabmenu: {
        width: 263,
        height: 40,
        left: 0,
        top: 0,
        position: "absolute",
    },
    graph: {
        top: 138,
        left: 76,
        width: 370,
        height: 496,
        position: "absolute",
    },
    overlay: {
        top: 601,
        height: 88,
    },
    background4: {
        backgroundColor: Color.gray_500,
    },
    sun: {
        fontFamily: FontFamily.poppinsRegular,
        left: 13,
        top: 14,
        textAlign: "center",
        fontSize: FontSize.size_sm,
        position: "absolute",
    },
    text6: {
        left: 15,
    },
    item: {
        left: 0,
    },
    t2: {
        textAlign: "center",
        color: Color.white,
        fontFamily: FontFamily.sFProRegular,
        fontSize: FontSize.size_sm,
        left: 17,
    },
    text7: {
        left: 16,
    },
    item1: {
        left: 65,
    },
    item2: {
        left: 130,
    },
    background7: {
        backgroundColor: "#2f9676",
    },
    t4: {
        left: 18,
        top: 14,
        textAlign: "center",
        fontSize: FontSize.size_sm,
        position: "absolute",
        fontFamily: FontFamily.sFProRegular,
    },
    item3: {
        left: 195,
    },
    text10: {
        left: 13,
    },
    item4: {
        left: 260,
    },
    item5: {
        left: 325,
    },
    item6: {
        left: 390,
    },
    dotIcon: {
        top: 75,
        left: 216,
        width: 11,
        height: 11,
        position: "absolute",
    },
    dates: {
        width: 443,
        height: 86,
        left: 0,
        top: 0,
        position: "absolute",
    },
    content: {
        top: 123,
        left: -46,
        width: 446,
        height: 690,
        position: "absolute",
    },
    lchTrnh: {
        top: 65,
        left: 139,
        fontSize: FontSize.size_3xl,
        textAlign: "center",
        fontFamily: FontFamily.sFProSemibold,
        color: Color.white,
        fontWeight: "600",
        position: "absolute",
    },
    btnoptionIcon: {
        left: 301,
        top: 55,
        width: 46,
        position: "absolute",
    },
    background11: {
        borderRadius: Border.br_17xl,
        borderColor: "rgba(255, 255, 255, 0.2)",
        height: 46,
        width: 46,
        left: 0,
        top: 0,
    },
    arrowIcon: {
        width: 12,
        height: 18,
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
        lineHeight: 20,
        fontFamily: FontFamily.sFSubheadlineSemibold,
        fontWeight: "600",
        textAlign: "center",
        position: "absolute",
    },
    statusbar: {
        height: 44,
        top: 0,
        position: "absolute",
    },
    header: {
        height: 101,
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
    nutritionschedule: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
        height: 812,
        backgroundColor: Color.white,
    },
});

export default NutritionSchedule;
