import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Statist = () => {
  return (
    <View style={styles.homeV3}>
      <LinearGradient
        style={[styles.pagebackground, styles.backgroundPosition]}
        locations={[0, 1]}
        colors={["#f3f9ff", "#daf2ef"]}
        useAngle={true}
        angle={169.71}
      />
      <View style={styles.content}>
        <View style={[styles.background01, styles.backgroundShadowBox]} />
        <View style={[styles.background02, styles.backgroundShadowBox]} />
        <View style={styles.numbersinfo}>
          <View style={[styles.number01, styles.numberLayout]}>
            <View style={[styles.background, styles.numberLayout]} />
            <Text style={[styles.text, styles.textTypo]}>1</Text>
          </View>
          <View style={[styles.number02, styles.bar02Position]}>
            <View style={[styles.background, styles.numberLayout]} />
            <Text style={[styles.text1, styles.textTypo]}>2</Text>
          </View>
          <View style={[styles.number03, styles.bar03Position]}>
            <View style={[styles.background, styles.numberLayout]} />
            <Text style={[styles.text2, styles.textTypo]}>3</Text>
          </View>
          <View style={[styles.number04, styles.bar04Position]}>
            <View style={[styles.background, styles.numberLayout]} />
            <Text style={[styles.text2, styles.textTypo]}>4</Text>
          </View>
          <View style={[styles.number05, styles.bar05Position]}>
            <View style={[styles.background, styles.numberLayout]} />
            <Text style={[styles.text2, styles.textTypo]}>5</Text>
          </View>
          <View style={[styles.number06, styles.bar06Position]}>
            <View style={[styles.background, styles.numberLayout]} />
            <Text style={[styles.text2, styles.textTypo]}>6</Text>
          </View>
          <View style={[styles.number07, styles.bar07Position]}>
            <View style={[styles.background, styles.numberLayout]} />
            <Text style={[styles.text1, styles.textTypo]}>7</Text>
          </View>
        </View>
        <View style={styles.linegraph}>
          <View style={[styles.bar01, styles.barItemLayout]}>
            <View style={[styles.item01, styles.itemPosition]} />
            <View style={[styles.item02, styles.itemBg]} />
          </View>
          <View style={[styles.bar02, styles.barItemLayout]}>
            <View style={[styles.item01, styles.itemPosition]} />
            <View style={[styles.item021, styles.itemBg]} />
          </View>
          <View style={[styles.bar03, styles.barItemLayout]}>
            <View style={[styles.item01, styles.itemPosition]} />
            <View style={[styles.item022, styles.itemBg]} />
          </View>
          <View style={[styles.bar04, styles.barItemLayout]}>
            <View style={[styles.item01, styles.itemPosition]} />
            <View style={[styles.item02, styles.itemBg]} />
          </View>
          <View style={[styles.bar05, styles.barItemLayout]}>
            <View style={[styles.item01, styles.itemPosition]} />
            <View style={[styles.item021, styles.itemBg]} />
          </View>
          <View style={[styles.bar06, styles.barItemLayout]}>
            <View style={[styles.item01, styles.itemPosition]} />
            <View style={[styles.item025, styles.itemBg]} />
          </View>
          <View style={[styles.bar07, styles.barItemLayout]}>
            <View style={[styles.item01, styles.itemPosition]} />
            <View style={[styles.item022, styles.itemBg]} />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={[styles.trungBnh, styles.tinhBtPosition]}>
            Trung bình
          </Text>
          <View style={[styles.sortby, styles.sortbyLayout]}>
            <View style={[styles.background7, styles.borderBorder]} />
            <Image
              style={styles.arrowIcon}
              resizeMode="cover"
              source={require("../assets/arrow.png")}
            />
            <Text style={styles.tun}>Tuần</Text>
          </View>
        </View>
        <View style={styles.chartsummary}>
          <View style={[styles.data, styles.dataLayout]}>
            <View style={[styles.list01, styles.listLayout]}>
              <Text style={[styles.protein, styles.tinhBtPosition]}>
                Protein
              </Text>
              <Text style={[styles.g, styles.gTypo]}>160 g</Text>
              <View style={[styles.progressbar, styles.itemLayout1]}>
                <View style={[styles.item017, styles.itemLayout1]} />
                <View style={[styles.item027, styles.itemLayout1]} />
              </View>
            </View>
            <View style={[styles.list02, styles.listLayout]}>
              <Text style={[styles.tinhBt, styles.tinhBtPosition]}>
                Tinh bột
              </Text>
              <Text style={[styles.g1, styles.gTypo]}>214 g</Text>
              <View style={[styles.progressbar, styles.itemLayout1]}>
                <View style={[styles.item017, styles.itemLayout1]} />
                <View style={[styles.item028, styles.itemLayout1]} />
              </View>
            </View>
            <View style={[styles.list03, styles.listLayout]}>
              <Text style={[styles.protein, styles.tinhBtPosition]}>
                Chất béo
              </Text>
              <Text style={[styles.g2, styles.gTypo]}>63 g</Text>
              <View style={[styles.progressbar, styles.itemLayout1]}>
                <View style={[styles.item017, styles.itemLayout1]} />
                <View style={[styles.item029, styles.itemLayout1]} />
              </View>
            </View>
            <View style={[styles.chart, styles.dataLayout]}>
              <Text style={styles.lngCaloHin}>Lượng Calo hiện tại</Text>
              <Text style={[styles.text7, styles.gTypo1]}>2145</Text>
              <Image
                style={styles.circle01Icon}
                resizeMode="cover"
                source={require("../assets/circle01.png")}
              />
              <Image
                style={styles.circle02Icon}
                resizeMode="cover"
                source={require("../assets/circle02.png")}
              />
            </View>
          </View>
          <View style={[styles.title1, styles.listLayout]}>
            <Text style={[styles.sLiuThng, styles.tinhBtPosition]}>
              Số liệu thống kê
            </Text>
            <Image
              style={[styles.arrowIcon1, styles.arrowIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow1.png")}
            />
            <Image
              style={[styles.arrowIcon2, styles.arrowIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow2.png")}
            />
          </View>
        </View>
        <View style={styles.categories}>
          <View style={styles.item0110}>
            <View style={styles.imagePosition}>
              <View style={[styles.placeholder, styles.imagePosition]} />
            </View>
            <View style={[styles.image1, styles.imageLayout]}>
              <Image
                style={styles.placeholderIcon}
                resizeMode="cover"
                source={require("../assets/placeholder.png")}
              />
            </View>
            <Text style={[styles.bpCi, styles.gTypo]}>Bắp cải</Text>
          </View>
          <View style={[styles.item0210, styles.itemLayout]}>
            <View style={[styles.image2, styles.imageLayout]}>
              <Image
                style={[styles.placeholderIcon1, styles.imageLayout]}
                resizeMode="cover"
                source={require("../assets/placeholder1.png")}
              />
            </View>
            <Text style={[styles.uLc, styles.bTypo]}>Đậu lạc</Text>
          </View>
          <View style={[styles.item03, styles.itemLayout]}>
            <View style={[styles.image3, styles.imageLayout]}>
              <Image
                style={styles.placeholderIcon}
                resizeMode="cover"
                source={require("../assets/placeholder2.png")}
              />
            </View>
            <Text style={[styles.b, styles.bTypo]}>Bí đỏ</Text>
          </View>
          <View style={[styles.item04, styles.itemLayout]}>
            <View style={[styles.image2, styles.imageLayout]}>
              <Image
                style={[styles.placeholderIcon1, styles.imageLayout]}
                resizeMode="cover"
                source={require("../assets/placeholder.png")}
              />
            </View>
            <Text style={[styles.cTm, styles.bTypo]}>Cà tím</Text>
          </View>
        </View>
      </View>
      
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
      <View style={[styles.backgroundParent, styles.backgroundLayout]}>
        <View style={[styles.background8, styles.backgroundLayout]} />
        <View style={styles.homeParent}>
          <Image
            style={[styles.homeIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/home.png")}
          />
          <Image
            style={styles.wishlistIcon}
            resizeMode="cover"
            source={require("../assets/wishlist.png")}
          />
          <View style={[styles.activemenu, styles.activemenuLayout]}>
            <View style={[styles.background9, styles.activemenuLayout]} />
            <Text style={[styles.theoDi, styles.timeTypo]}>Theo dõi</Text>
            <Image
              style={[styles.activityIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/activity.png")}
            />
          </View>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/group-38.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    width: "100%",
    left: 0,
    position: "absolute",
  },
  backgroundShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -16,
    },
    borderTopRightRadius: Border.br_9xl,
    borderTopLeftRadius: Border.br_9xl,
  },
  numberLayout: {
    width: 21,
    height: 21,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  bar02Position: {
    left: 44,
    top: 0,
  },
  bar03Position: {
    left: 88,
    top: 0,
  },
  bar04Position: {
    left: 132,
    top: 0,
  },
  bar05Position: {
    left: 176,
    top: 0,
  },
  bar06Position: {
    left: 220,
    top: 0,
  },
  bar07Position: {
    left: 264,
    top: 0,
  },
  barItemLayout: {
    width: 6,
    position: "absolute",
  },
  itemPosition: {
    borderRadius: Border.br_6xs,
    left: 0,
    top: 0,
  },
  itemBg: {
    backgroundColor: Color.lightcoral,
    borderRadius: Border.br_6xs,
    left: 0,
  },
  tinhBtPosition: {
    textAlign: "left",
    lineHeight: 20,
    left: 0,
    position: "absolute",
  },
  sortbyLayout: {
    width: 96,
    height: 36,
    top: 0,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  dataLayout: {
    height: 109,
    position: "absolute",
  },
  listLayout: {
    height: 20,
    position: "absolute",
  },
  gTypo: {
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  itemLayout1: {
    height: 4,
    position: "absolute",
  },
  gTypo1: {
    fontFamily: FontFamily.sFProSemibold,
    fontWeight: "600",
  },
  arrowIconLayout: {
    height: 13,
    width: 8,
    top: 4,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  imagePosition: {
    height: 79,
    width: 79,
    left: 0,
    top: 0,
    position: "absolute",
  },
  imageLayout: {
    height: 72,
    width: 72,
    left: 0,
    position: "absolute",
  },
  itemLayout: {
    height: 102,
    width: 72,
    top: 7,
    position: "absolute",
  },
  bTypo: {
    top: 85,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sFProRegular,
    textAlign: "center",
    color: Color.darkslategray_200,
    position: "absolute",
  },
  borderPosition: {
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  timeTypo: {
    letterSpacing: 0,
    // fontSize: FontSize.componentsButtonLarge_size,
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
  choAnhThPosition: {
    color: Color.darkslategray_400,
    left: 28,
    textAlign: "left",
    position: "absolute",
  },
  backgroundLayout: {
    height: 70,
    width: "100%",
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
    backgroundColor: "transparent",
    top: 0,
    height: 812,
    width: "100%",
  },
  background01: {
    top: 148,
    backgroundColor: Color.mediumaquamarine_100,
    shadowColor: "rgba(3, 46, 33, 0.02)",
    shadowRadius: 29,
    elevation: 29,
    height: 475,
    width: 375,
    left: 0,
    position: "absolute",
  },
  background02: {
    top: 373,
    shadowColor: "rgba(49, 153, 121, 0.72)",
    shadowRadius: 21,
    elevation: 21,
    height: 250,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.primaryContrast,
  },
  background: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.darkslategray_500,
    left: 0,
    top: 0,
  },
  text: {
    left: 8,
    textAlign: "center",
    color: Color.darkslategray_200,
    fontSize: FontSize.size_xs,
    top: 2,
    fontFamily: FontFamily.poppinsSemibold,
    position: "absolute",
  },
  number01: {
    left: 0,
    top: 0,
  },
  text1: {
    left: 7,
    textAlign: "center",
    color: Color.darkslategray_200,
    fontSize: FontSize.size_xs,
    top: 2,
    fontFamily: FontFamily.poppinsSemibold,
    position: "absolute",
  },
  number02: {
    width: 21,
    height: 21,
    position: "absolute",
  },
  text2: {
    left: 6,
    textAlign: "center",
    color: Color.darkslategray_200,
    fontSize: FontSize.size_xs,
    top: 2,
    fontFamily: FontFamily.poppinsSemibold,
    position: "absolute",
  },
  number03: {
    width: 21,
    height: 21,
    position: "absolute",
  },
  number04: {
    width: 21,
    height: 21,
    position: "absolute",
  },
  number05: {
    width: 21,
    height: 21,
    position: "absolute",
  },
  number06: {
    width: 21,
    height: 21,
    position: "absolute",
  },
  number07: {
    width: 21,
    height: 21,
    position: "absolute",
  },
  numbersinfo: {
    top: 524,
    left: 45,
    width: 285,
    height: 21,
    position: "absolute",
  },
  item01: {
    backgroundColor: Color.mistyrose,
    width: 6,
    position: "absolute",
    height: 78,
  },
  item02: {
    height: 25,
    top: 53,
    width: 6,
    position: "absolute",
  },
  bar01: {
    height: 78,
    left: 0,
    top: 0,
  },
  item021: {
    height: 71,
    top: 7,
    width: 6,
    position: "absolute",
  },
  bar02: {
    height: 78,
    left: 44,
    top: 0,
  },
  item022: {
    top: 35,
    height: 43,
    width: 6,
    position: "absolute",
  },
  bar03: {
    height: 78,
    left: 88,
    top: 0,
  },
  bar04: {
    height: 78,
    left: 132,
    top: 0,
  },
  bar05: {
    height: 78,
    left: 176,
    top: 0,
  },
  item025: {
    top: 16,
    height: 62,
    width: 6,
    position: "absolute",
  },
  bar06: {
    height: 78,
    left: 220,
    top: 0,
  },
  bar07: {
    height: 78,
    left: 264,
    top: 0,
  },
  linegraph: {
    top: 437,
    left: 52,
    width: 270,
    height: 78,
    position: "absolute",
  },
  trungBnh: {
    fontFamily: FontFamily.sFProSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    top: 8,
    color: Color.darkslategray_200,
  },
  background7: {
    borderRadius: 6,
    borderColor: "#40b490",
    width: 96,
    height: 36,
    top: 0,
    position: "absolute",
    left: 0,
  },
  arrowIcon: {
    top: 17,
    left: 71,
    width: 11,
    height: 7,
    position: "absolute",
  },
  tun: {
    top: 13,
    left: 21,
    textAlign: "right",
    fontFamily: FontFamily.sFProRegular,
    color: Color.darkslategray_200,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  sortby: {
    left: 224,
  },
  title: {
    top: 386,
    height: 36,
    width: 320,
    left: 27,
    position: "absolute",
  },
  protein: {
    color: Color.primaryContrast,
    fontFamily: FontFamily.sFProRegular,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  g: {
    left: 142,
    color: Color.primaryContrast,
    textAlign: "right",
    fontFamily: FontFamily.sFProSemibold,
    fontWeight: "600",
    lineHeight: 20,
    top: 0,
  },
  item017: {
    width: 77,
    height: 4,
    borderRadius: Border.br_6xs,
    left: 0,
    top: 0,
    backgroundColor: Color.primaryContrast,
  },
  item027: {
    width: 48,
    backgroundColor: Color.lightcoral,
    borderRadius: Border.br_6xs,
    left: 0,
    top: 0,
  },
  progressbar: {
    left: 57,
    width: 77,
    height: 4,
    top: 8,
  },
  list01: {
    width: 181,
    left: 138,
    height: 20,
    top: 11,
  },
  tinhBt: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.primaryContrast,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  g1: {
    left: 143,
    color: Color.primaryContrast,
    textAlign: "right",
    fontFamily: FontFamily.sFProSemibold,
    fontWeight: "600",
    lineHeight: 20,
    top: 0,
  },
  item028: {
    width: 70,
    backgroundColor: Color.lightcoral,
    borderRadius: Border.br_6xs,
    left: 0,
    top: 0,
  },
  list02: {
    top: 45,
    width: 181,
    left: 138,
    height: 20,
  },
  g2: {
    left: 150,
    color: Color.primaryContrast,
    textAlign: "right",
    lineHeight: 20,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    top: 0,
  },
  item029: {
    width: 25,
    backgroundColor: Color.lightcoral,
    borderRadius: Border.br_6xs,
    left: 0,
    top: 0,
  },
  list03: {
    top: 79,
    width: 181,
    left: 138,
    height: 20,
  },
  lngCaloHin: {
    top: 32,
    left: 16,
    fontSize: 10,
    lineHeight: 12,
    width: 71,
    color: Color.primaryContrast,
    fontFamily: FontFamily.sFProRegular,
    textAlign: "center",
    position: "absolute",
  },
  text7: {
    top: 59,
    color: Color.primaryContrast,
    textAlign: "right",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.sFProSemibold,
    left: 27,
    position: "absolute",
  },
  circle01Icon: {
    top: 3,
    width: 103,
    height: 103,
    left: 0,
    position: "absolute",
  },
  circle02Icon: {
    left: 5,
    width: 102,
    borderRadius: Border.br_11xs,
    height: 109,
    top: 0,
    position: "absolute",
  },
  chart: {
    width: 106,
    left: 0,
    top: 0,
  },
  data: {
    left: 1,
    width: 319,
    top: 53,
  },
  sLiuThng: {
    color: Color.primaryContrast,
    fontFamily: FontFamily.sFProSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    top: 0,
  },
  arrowIcon1: {
    left: 307,
  },
  arrowIcon2: {
    left: 298,
  },
  title1: {
    width: 315,
    left: 0,
    top: 0,
  },
  chartsummary: {
    top: 174,
    height: 162,
    width: "100%",
    left: 27,
    position: "absolute",
  },
  placeholder: {
    borderRadius: Border.br_lg,
  },
  placeholderIcon: {
    top: -3,
    left: -3,
    width: 78,
    borderRadius: Border.br_lg,
    height: 78,
    position: "absolute",
  },
  image1: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 72,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -16,
    },
    top: 7,
  },
  bpCi: {
    top: 92,
    left: 12,
    fontFamily: FontFamily.sFProRegular,
    textAlign: "center",
    color: Color.darkslategray_200,
  },
  item0110: {
    width: 79,
    height: 109,
    left: 0,
    top: 0,
    position: "absolute",
  },
  placeholderIcon1: {
    borderRadius: Border.br_lg,
    top: 0,
  },
  image2: {
    top: 0,
  },
  uLc: {
    left: 10,
  },
  item0210: {
    left: 101,
  },
  image3: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 72,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -16,
    },
    top: 0,
  },
  b: {
    left: 19,
  },
  item03: {
    left: 200,
  },
  cTm: {
    left: 15,
  },
  item04: {
    left: 296,
  },
  categories: {
    width: 368,
    left: 12,
    height: 109,
    top: 0,
    position: "absolute",
  },
  content: {
    top: 60,
    width: "100%",
    height: 623,
    left: 20,
    position: "absolute",
  },
  border: {
    height: "100%",
    width: "90.43%",
    top: "0%",
    right: "9.57%",
    bottom: "0%",
    borderRadius: 3,
    borderColor: "#384144",
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
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
    backgroundColor: Color.darkslategray_200,
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
    color: Color.darkslategray_200,
    fontWeight: "600",
    letterSpacing: 0,
    // fontSize: FontSize.componentsButtonLarge_size,
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
    width: "100%",
    overflow: "hidden",
    top: 0,
  },
  view: {
    marginLeft: -66.5,
    bottom: 9,
    left: "50%",
    backgroundColor: "rgba(228, 228, 228, 0.58)",
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
  profilepictureIcon: {
    left: 288,
    width: 56,
    height: 56,
    top: 63,
    position: "absolute",
  },
  buiSngVui: {
    top: 91,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  choAnhTh: {
    fontSize: FontSize.size_base,
    top: 63,
    fontFamily: FontFamily.poppinsRegular,
  },
  background8: {
    shadowColor: "rgba(106, 191, 165, 0.15)",
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -16,
    },
    borderTopRightRadius: Border.br_9xl,
    borderTopLeftRadius: Border.br_9xl,
    top: 0,
    backgroundColor: Color.primaryContrast,
  },
  homeIcon: {
    height: "44.44%",
    width: "6.25%",
    top: "26.67%",
    right: "93.75%",
    bottom: "28.89%",
    left: "0%",
    position: "absolute",
  },
  wishlistIcon: {
    right: 234,
    width: 24,
    height: 22,
    top: 11,
    position: "absolute",
  },
  background9: {
    borderRadius: 27,
    backgroundColor: "rgba(64, 180, 144, 0.1)",
    left: 0,
  },
  theoDi: {
    top: 12,
    left: 56,
    color: Color.mediumaquamarine_100,
    fontFamily: FontFamily.sFProRegular,
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
  groupChild: {
    left: 287,
    width: 35,
    height: 34,
    top: 4,
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
    top: 707,
  },
  homeV3: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.primaryContrast,
  },
});

export default Statist;
