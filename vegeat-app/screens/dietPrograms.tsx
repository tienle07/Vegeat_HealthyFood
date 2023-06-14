import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const DietPrograms = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dietprograms}>
      <View style={[styles.pagebackground, styles.contentPosition]} />
      <View style={[styles.content, styles.contentPosition]}>
        <View style={[styles.recentactivity, styles.background02Layout]}>
          <View style={[styles.background02, styles.backgroundPosition2]} />
          <View style={[styles.handler, styles.viewLayout]} />
          <View style={[styles.item, styles.itemLayout3]}>
            <View style={[styles.background, styles.itemLayout3]} />
            <View style={styles.kcalinfo}>
              <Image
                style={styles.backgroundIcon}
                resizeMode="cover"
                source={require("../assets/background3.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>95</Text>
            </View>
            <Text style={[styles.g, styles.gTypo]}>130 g</Text>
            <Text style={[styles.to, styles.toPosition]}>Táo</Text>
            <View style={[styles.image, styles.imageLayout]}>
              <Image
                style={[styles.placeholderIcon, styles.imageLayout]}
                resizeMode="cover"
                source={require("../assets/placeholder5.png")}
              />
            </View>
          </View>
          <View style={[styles.item1, styles.itemLayout3]}>
            <View style={[styles.background, styles.itemLayout3]} />
            <View style={styles.kcalinfo}>
              <Image
                style={styles.backgroundIcon}
                resizeMode="cover"
                source={require("../assets/background3.png")}
              />
              <Text style={[styles.text1, styles.textTypo]}>45</Text>
            </View>
            <Text style={[styles.g, styles.gTypo]}>130 g</Text>
            <Text style={[styles.to, styles.toPosition]}>Avocado</Text>
            <View style={[styles.image, styles.imageLayout]}>
              <Image
                style={[styles.placeholderIcon, styles.imageLayout]}
                resizeMode="cover"
                source={require("../assets/placeholder6.png")}
              />
            </View>
          </View>
          <View style={styles.title}>
            <Text style={[styles.baSng, styles.caloPosition]}>Bữa sáng</Text>
            <View style={styles.sortby}>
              <Text style={[styles.calo, styles.caloPosition]}>412 Calo</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.btnmore, styles.btnmoreLayout]}
          onPress={() => navigation.navigate("NutritionSchedule")}
        >
          <View style={[styles.background2, styles.backgroundPosition1]} />
          <Image
            style={[styles.arrowIcon, styles.arrowIconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow3.png")}
          />
          <Text style={[styles.chiTit, styles.textLayout]}>Chi tiết</Text>
        </Pressable>
        <View style={[styles.card, styles.cardLayout]}>
          <View style={[styles.background3, styles.backgroundPosition]} />
          <Text style={[styles.npVo, styles.npVoPosition]}>Nạp vào</Text>
          <Text style={[styles.lngCalo, styles.npVoPosition]}>
            Lượng Calo đã nạp trong hôm nay
          </Text>
          <View style={[styles.item2, styles.itemLayout2]}>
            <Text style={[styles.text2, styles.textLayout]}>657</Text>
            <View style={styles.progressbar}>
              <View style={[styles.item01, styles.itemLayout1]} />
              <View style={[styles.item02, styles.itemLayout]} />
            </View>
            <Text style={[styles.calo1, styles.kcalTypo]}>Calo</Text>
          </View>
          <View style={[styles.item3, styles.itemLayout2]}>
            <Text style={[styles.text3, styles.textLayout]}>24,6</Text>
            <Text style={[styles.chtBo, styles.kcalTypo]}>Chất béo</Text>
            <View style={styles.progressbar}>
              <View style={[styles.item011, styles.itemLayout1]} />
              <View style={[styles.item021, styles.itemLayout]} />
            </View>
          </View>
        </View>
        <View style={[styles.card1, styles.card1Layout]}>
          <View style={[styles.background4, styles.card1Layout]} />
          <Text style={[styles.text4, styles.textLayout]}>245</Text>
          <Text style={[styles.kcal, styles.kcalTypo]}>Kcal</Text>
          <Image
            style={[styles.chartIcon, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/chart.png")}
          />
          <Text style={[styles.tiuHao, styles.textLayout]}>Tiêu hao</Text>
        </View>
        <View style={[styles.kcalinfo2, styles.kcalinfo2Layout]}>
          <View style={[styles.background5, styles.kcalinfo2Layout]} />
          <Image
            style={[styles.arrowIcon1, styles.calo2Position]}
            resizeMode="cover"
            source={require("../assets/arrow3.png")}
          />
          <Text style={[styles.text5, styles.text5Typo]}>1,536</Text>
          <Text style={[styles.calo2, styles.calo2Position]}>Calo</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
        <Text style={[styles.chnhSa, styles.gTypo]}>Chỉnh sửa</Text>
      </View>
      <View style={[styles.swipeUp, styles.swipeUpPosition]}>
        <View style={[styles.btnhome, styles.swipeUpPosition]}>
          <Image
            style={[styles.backgroundIcon2, styles.swipeUpPosition]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.view, styles.viewLayout]} />
        </View>
      </View>
      
      <Text style={[styles.hmNay23, styles.text5Typo]}>
        Hôm nay, 10 tháng 6
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    width: '100%',
    left: 0,
    position: "absolute",
  },
  background02Layout: {
    height: 323,
    width: '100%',
    left: 0,
    position: "absolute",
  },
  backgroundPosition2: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -18,
    },
    borderTopRightRadius: Border.br_9xl,
    borderTopLeftRadius: Border.br_9xl,
    top: 0,
    backgroundColor: Color.white,
  },
  viewLayout: {
    height: 5,
    position: "absolute",
  },
  itemLayout3: {
    height: 83,
    width: '100%',
    left: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  gTypo: {
    fontWeight: "300",
    position: "absolute",
  },
  toPosition: {
    left: 118,
    position: "absolute",
  },
  imageLayout: {
    height: 61,
    width: 65,
    position: "absolute",
  },
  caloPosition: {
    color: Color.darkslategray_300,
    left: 0,
    top: 0,
    position: "absolute",
  },
  btnmoreLayout: {
    height: 65,
    width: 149,
    position: "absolute",
  },
  backgroundPosition1: {
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
  },
  arrowIconLayout: {
    height: 18,
    width: 12,
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.size_xl,
  },
  cardLayout: {
    height: 225,
    width: 150,
    position: "absolute",
  },
  backgroundPosition: {
    backgroundColor: Color.seagreen_100,
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
  },
  npVoPosition: {
    left: 20,
    fontFamily: FontFamily.sFProRegular,
    textAlign: "left",
    position: "absolute",
  },
  itemLayout2: {
    width: 114,
    position: "absolute",
  },
  itemLayout1: {
    borderRadius: Border.br_6xs,
    height: 4,
    left: 0,
    top: 0,
  },
  itemLayout: {
    width: 48,
    position: "absolute",
  },
  kcalTypo: {
    color: Color.gray_200,
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    textAlign: "center",
    position: "absolute",
  },
  card1Layout: {
    height: 142,
    width: 149,
    position: "absolute",
  },
  kcalinfo2Layout: {
    height: 72,
    width: 319,
    position: "absolute",
  },
  calo2Position: {
    top: 28,
    position: "absolute",
  },
  text5Typo: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  borderPosition: {
    left: "0%",
    position: "absolute",
  },
  timeTypo: {
    letterSpacing: 0,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    lineHeight: 20,
    textAlign: "center",
    position: "absolute",
  },
  swipeUpPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  backgroundLayout: {
    height: 70,
    width: 375,
    left: 0,
    position: "absolute",
  },
  activemenuLayout: {
    height: 45,
    width: 142,
    top: 0,
    position: "absolute",
  },
  pagebackground: {
    backgroundColor: Color.mediumaquamarine_100,
    top: 0,
    height: 812,
    width: '100%',
  },
  background02: {
    shadowColor: "rgba(49, 153, 121, 0.72)",
    shadowRadius: 21,
    elevation: 21,
    height: 323,
    width: '100%',
    left: 0,
    position: "absolute",
  },
  handler: {
    left: 157,
    borderRadius: Border.br_3xl,
    backgroundColor: Color.whitesmoke,
    width: 60,
    top: 15,
  },
  background: {
    top: 0,
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    top: -5,
    left: -9,
    width: 71,
    height: 71,
    position: "absolute",
  },
  text: {
    left: 15,
    textAlign: "center",
    color: Color.white,
    top: 13,
    position: "absolute",
  },
  kcalinfo: {
    left: 294,
    width: 53,
    height: 53,
    top: 15,
    position: "absolute",
  },
  g: {
    top: 48,
    left: 117,
    fontFamily: FontFamily.poppinsLight,
    color: Color.gray_700,
    textAlign: "right",
    fontSize: FontSize.size_sm,
  },
  to: {
    color: Color.black,
    textAlign: "left",
    top: 12,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  placeholderIcon: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  image: {
    left: 29,
    top: 11,
  },
  item: {
    top: 84,
  },
  text1: {
    left: 14,
    textAlign: "center",
    color: Color.white,
    top: 13,
    position: "absolute",
  },
  item1: {
    top: 179,
  },
  baSng: {
    fontFamily: FontFamily.sFProSemibold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  calo: {
    fontFamily: FontFamily.sFProRegular,
    fontSize: FontSize.size_xs,
    textAlign: "right",
  },
  sortby: {
    top: 3,
    left: 267,
    width: 50,
    height: 14,
    position: "absolute",
  },
  title: {
    top: 38,
    left: 30,
    width: 317,
    height: 20,
    position: "absolute",
  },
  recentactivity: {
    top: 405,
  },
  background2: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    height: 65,
    width: 149,
    position: "absolute",
  },
  arrowIcon: {
    top: 24,
    left: 118,
    position: "absolute",
  },
  chiTit: {
    top: 23,
    left: 18,
    fontFamily: FontFamily.sFProRegular,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  btnmore: {
    top: 304,
    left: 220,
  },
  background3: {
    height: 225,
    width: 150,
    position: "absolute",
  },
  npVo: {
    top: 18,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    color: Color.white,
  },
  lngCalo: {
    top: 47,
    lineHeight: 16,
    color: "rgba(255, 255, 255, 0.5)",
    width: 112,
    fontSize: FontSize.size_xs,
  },
  text2: {
    fontFamily: FontFamily.sFProRegular,
    textAlign: "left",
    color: Color.white,
    top: 13,
    position: "absolute",
    left: 0,
  },
  item01: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    width: 114,
    position: "absolute",
  },
  item02: {
    backgroundColor: "#9a81ff",
    borderRadius: Border.br_6xs,
    height: 4,
    left: 0,
    top: 0,
  },
  progressbar: {
    height: 4,
    width: 114,
    left: 0,
    top: 0,
    position: "absolute",
  },
  calo1: {
    top: 16,
    left: 41,
    fontFamily: FontFamily.sFProRegular,
  },
  item2: {
    top: 106,
    height: 36,
    left: 18,
  },
  text3: {
    fontFamily: FontFamily.sFProRegular,
    textAlign: "left",
    color: Color.white,
    top: 15,
    left: 0,
    position: "absolute",
  },
  chtBo: {
    left: 48,
    top: 18,
    fontFamily: FontFamily.sFProRegular,
  },
  item011: {
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    width: 114,
    position: "absolute",
  },
  item021: {
    backgroundColor: "#ff9292",
    borderRadius: Border.br_6xs,
    height: 4,
    left: 0,
    top: 0,
  },
  item3: {
    top: 167,
    height: 38,
    left: 18,
  },
  card: {
    left: 50,
    top: 144,
  },
  background4: {
    backgroundColor: Color.seagreen_100,
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
  },
  text4: {
    top: 72,
    left: 80,
    fontFamily: FontFamily.sFProRegular,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  kcal: {
    top: 90,
    fontFamily: FontFamily.mulishRegular,
    left: 82,
  },
  chartIcon: {
    top: 64,
    height: 49,
    left: 18,
  },
  tiuHao: {
    top: 18,
    left: 18,
    fontFamily: FontFamily.sFProRegular,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  card1: {
    top: 144,
    left: 220,
  },
  background5: {
    backgroundColor: "#4cd0a8",
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
  },
  arrowIcon1: {
    left: 282,
    height: 18,
    width: 12,
  },
  text5: {
    top: 19,
    left: 55,
    fontFamily: FontFamily.poppinsSemibold,
  },
  calo2: {
    left: 116,
    color: Color.gray_600,
    fontFamily: FontFamily.sFProRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  vectorIcon: {
    height: "33.33%",
    width: "6.9%",
    top: "33.33%",
    right: "86.83%",
    bottom: "33.33%",
    left: "6.27%",
    position: "absolute",
  },
  kcalinfo2: {
    top: 46,
    left: 50,
  },
  chnhSa: {
    left: 159,
    fontFamily: FontFamily.sFProLight,
    color: Color.gray_300,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    top: 0,
  },
  content: {
    top: 103,
    height: 728,
  },
  border: {
    width: "90.43%",
    top: "0%",
    right: "9.57%",
    bottom: "0%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    opacity: 0.35,
    height: "100%",
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
    fontFamily: FontFamily.sFSubheadlineSemibold,
    fontWeight: "600",
    color: Color.white,
  },
  header: {
    height: 44,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  backgroundIcon2: {
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
  },
  btnhome: {
    top: 0,
  },
  swipeUp: {
    top: 777,
  },
  background6: {
    shadowColor: "rgba(106, 191, 165, 0.15)",
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -18,
    },
    borderTopRightRadius: Border.br_9xl,
    borderTopLeftRadius: Border.br_9xl,
    top: 0,
    backgroundColor: Color.white,
  },
  homeIcon: {
    height: "44.44%",
    width: "6.25%",
    top: "26.67%",
    right: "93.75%",
    bottom: "28.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wishlistIcon: {
    right: 234,
    width: 24,
    height: 22,
    top: 11,
    position: "absolute",
  },
  background7: {
    borderRadius: Border.br_8xl,
    backgroundColor: Color.mediumaquamarine_200,
    left: 0,
  },
  theoDi: {
    left: 56,
    color: Color.mediumaquamarine_100,
    fontFamily: FontFamily.sFProRegular,
    top: 12,
  },
  activityIcon: {
    height: "46.67%",
    width: "16.2%",
    top: "27.78%",
    right: "68.66%",
    bottom: "25.56%",
    left: "15.14%",
    position: "absolute",
  },
  activemenu: {
    left: 119,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 287,
    top: 4,
    width: 35,
    height: 34,
    position: "absolute",
  },
  homeParent: {
    height: "64.29%",
    width: "85.33%",
    top: "18.57%",
    right: "7.2%",
    bottom: "17.14%",
    left: "7.47%",
    position: "absolute",
  },
  backgroundParent: {
    top: 0,
  },
  bottomMenus: {
    top: 707,
  },
  hmNay23: {
    top: 65,
    left: 82,
    fontFamily: FontFamily.sFProSemibold,
  },
  dietprograms: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default DietPrograms;
