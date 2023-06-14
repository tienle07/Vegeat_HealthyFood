import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Blog = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeV2}>
      <LinearGradient
        style={[styles.pagebackground, styles.pagebackgroundPosition]}
        locations={[0, 1]}
        colors={["#f3f9ff", "#daf2ef"]}
        useAngle={true}
        angle={169.71}
      />
      <Image
        style={styles.homeV2Child}
        resizeMode="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <View style={[styles.content, styles.contentLayout]}>
        <View style={[styles.searchbox, styles.contentLayout]}>
          <View style={[styles.background, styles.contentLayout]} />
          <Text style={styles.tmBiVit}>Tìm bài viết...</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/search.png")}
          />
        </View>
      </View>
    
      <Text style={[styles.cngNg, styles.cngNgTypo]}>Cộng đồng</Text>
      <View style={styles.homeV2Item} />
      <Image
        style={styles.homeV2Inner}
        resizeMode="cover"
        source={require("../assets/group-38.png")}
      />
      <Text style={[styles.nguynAnhTh, styles.phtTrcPosition]}>
        Nguyễn Anh Thư
      </Text>
      <Text style={[styles.phtTrc, styles.phtTrcPosition]}>11 phút trước</Text>
      <Text
        style={[styles.miMiNgi, styles.cngNg1Typo]}
      >{`Mời mọi người thử ngay công thức bánh Flan mới của Thư nha!!! `}</Text>
      <Image
        style={styles.vietnameseCremeCaramelFlanIcon}
        resizeMode="cover"
        source={require("../assets/vietnamesecremecaramelflanbanhflanfoodphotographysq-1.png")}
      />
      <Image
        style={styles.rectangleViewLayout}
        resizeMode="cover"
        source={require("../assets/ubelecheflancakerecipewithcustard4-1.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={styles.text}>+13</Text>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <Pressable
          style={[styles.xemCngThcParent, styles.groupChildLayout]}
        //   onPress={() => navigation.navigate("HomeV13")}
        >
          <Text style={[styles.xemCngThc, styles.cngClr]}>Xem công thức</Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-32.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.borderPosition]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={styles.dotIcon}
          resizeMode="cover"
          source={require("../assets/dot.png")}
        />
      </View>
      <View style={[styles.activemenu, styles.activemenuLayout]}>
        <View style={[styles.background1, styles.activemenuLayout]} />
      </View>
      <Image
        style={[styles.vectorStrokeIcon, styles.groupParentLayout]}
        resizeMode="cover"
        source={require("../assets/vector-stroke.png")}
      />
      <Image
        style={[styles.notificationIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/notification.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pagebackgroundPosition: {
    width: '100%',
    left: 0,
    position: "absolute",
  },
  contentLayout: {
    height: 57,
    width: 319,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  borderPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.sFSubheadlineSemibold_size,
  },
  swipeUpPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  cngNgTypo: {
    color: Color.darkslategray_300,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  phtTrcPosition: {
    left: 110,
    textAlign: "left",
    position: "absolute",
  },
  cngNg1Typo: {
    fontFamily: FontFamily.sFProRegular,
    left: 58,
  },
  rectangleViewLayout: {
    width: 111,
    borderRadius: Border.br_xl,
    left: 235,
    height: 132,
    top: 350,
    position: "absolute",
  },
  groupParentLayout: {
    height: 22,
    position: "absolute",
  },
  groupChildLayout: {
    height: 14,
    position: "absolute",
  },
  cngClr: {
    color: Color.mediumaquamarine_100,
    position: "absolute",
  },
  activemenuLayout: {
    height: 45,
    width: 142,
    position: "absolute",
  },
  pagebackground: {
    // backgroundColor: Color.linear,
    top: 0,
    height: 812,
    width: '100%',
  },
  homeV2Child: {
    top: 579,
    left: 40,
    width: 327,
    height: 326,
    borderRadius: Border.br_9xl,
    position: "absolute",
  },
  background: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.lightcyan,
    left: 0,
    top: 0,
  },
  tmBiVit: {
    top: 19,
    left: 19,
    fontFamily: FontFamily.sFProSemibold,
    color: Color.seagreen_300,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  searchIcon: {
    height: "42.11%",
    width: "7.52%",
    top: "28.07%",
    right: "7.53%",
    bottom: "29.82%",
    left: "84.95%",
    position: "absolute",
  },
  searchbox: {
    left: 0,
    top: 0,
  },
  content: {
    top: 150,
    left: 40,
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    left: "0%",
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
    position: "absolute",
    fontWeight: "600",
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
  },
  cngNg: {
    top: 77,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 50,
    position: "absolute",
  },
  homeV2Item: {
    top: 232,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 319,
    left: 40,
    height: 326,
    borderRadius: Border.br_9xl,
    position: "absolute",
    backgroundColor: Color.white,
  },
  homeV2Inner: {
    top: 249,
    width: 37,
    height: 37,
    left: 60,
    position: "absolute",
  },
  nguynAnhTh: {
    top: 244,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  phtTrc: {
    top: 272,
    fontWeight: "300",
    fontFamily: FontFamily.sFProLight,
    color: Color.gray_700,
    fontSize: FontSize.size_xs,
  },
  miMiNgi: {
    top: 301,
    fontSize: FontSize.size_sm,
    width: 251,
    color: Color.darkslategray_100,
    position: "absolute",
    textAlign: "left",
  },
  vietnameseCremeCaramelFlanIcon: {
    borderRadius: Border.br_3xs,
    width: 165,
    height: 132,
    top: 350,
    left: 58,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.gray,
  },
  text: {
    top: 401,
    left: 259,
    fontSize: FontSize.size_xl,
    color: Color.white,
    fontFamily: FontFamily.poppinsSemibold,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  xemCngThc: {
    fontWeight: "500",
    fontFamily: FontFamily.sFProMedium,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
  },
  groupChild: {
    left: 96,
    width: 23,
    top: 0,
  },
  xemCngThcParent: {
    top: 8,
    left: 163,
    width: 119,
  },
  vectorIcon: {
    width: "6.74%",
    right: "60.64%",
    left: "32.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "113.64%",
    width: "8.87%",
    top: "-6.82%",
    right: "74.29%",
    bottom: "-6.82%",
    left: "16.84%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "109.09%",
    width: "9.57%",
    top: "-4.55%",
    right: "90.78%",
    bottom: "-4.55%",
    left: "-0.35%",
    position: "absolute",
  },
  dotIcon: {
    top: -2,
    left: 65,
    width: 12,
    height: 12,
    position: "absolute",
  },
  groupParent: {
    top: 515,
    left: 58,
    width: 282,
  },
  background1: {
    borderRadius: Border.br_8xl,
    backgroundColor: Color.mediumaquamarine_200,
    left: 0,
    top: 0,
  },
  cngNg1: {
    top: 12,
    fontFamily: FontFamily.sFProRegular,
    left: 58,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.sFSubheadlineSemibold_size,
  },
  activemenu: {
    top: 721,
    left: 73,
  },
  vectorStrokeIcon: {
    top: 733,
    right: 264,
    width: 24,
  },
  notificationIcon: {
    height: "3.11%",
    width: "6.2%",
    top: "9.73%",
    right: "7.13%",
    bottom: "87.16%",
    left: "86.67%",
    position: "absolute",
  },
  homeV2: {
    width: "100%",
    display: "flex",
    alignItems: "center", 
    justifyContent: "center", 
    overflow: "hidden",
    backgroundColor: Color.white,
    height: 812,
  },
});

export default Blog;