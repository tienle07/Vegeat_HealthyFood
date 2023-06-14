// import * as React from "react";
// import { StyleSheet, View, Image, Text } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

// const UserProfile = () => {
//   return (
//     <View style={styles.homeV2}>
//       <LinearGradient
//         style={[styles.pagebackground, styles.background01Position]}
//         locations={[0, 1]}
//         colors={["#f3f9ff", "#daf2ef"]}
//         useAngle={true}
//         angle={169.71}
//       />
//       <View style={[styles.swipeUp, styles.swipeUpPosition]}>
//         <View style={[styles.btnhome, styles.swipeUpPosition]}>
//           <Image
//             style={[styles.backgroundIcon, styles.iconLayout]}
//             resizeMode="cover"
//             source={require("../assets/background.png")}
//           />
//           <View style={styles.view} />
//         </View>
//       </View>
//       <View style={[styles.homeV2Child, styles.headerPosition]} />
//       <LinearGradient
//         style={[styles.background01, styles.backgroundPosition]}
//         locations={[0, 1]}
//         colors={["#fdfeff", "#eafcfa"]}
//         useAngle={true}
//         angle={169.71}
//       />
//       <Image
//         style={styles.profilepictureIcon}
//         resizeMode="cover"
//         source={require("../assets/profilepicture1.png")}
//       />
//       <View style={[styles.header, styles.headerPosition]}>
//         <Text style={[styles.tiKhon, styles.anhThTypo]}>Tài khoản</Text>
//         <Image
//           style={[styles.btnoptionIcon, styles.btnbackLayout]}
//           resizeMode="cover"
//           source={require("../assets/btnoption.png")}
//         />
//         <View style={[styles.btnback, styles.btnbackLayout]}>
//           <View style={[styles.background, styles.borderBorder]} />
//           <Image
//             style={styles.arrowIcon}
//             resizeMode="cover"
//             source={require("../assets/arrow2.png")}
//           />
//         </View>
//         <View style={styles.statusbar}>
//           <View style={styles.battery}>
//             <View style={[styles.border, styles.borderPosition]} />
//             <Image
//               style={[styles.capIcon, styles.iconLayout]}
//               resizeMode="cover"
//               source={require("../assets/cap1.png")}
//             />
//             <View style={styles.capacity} />
//           </View>
//           <Image
//             style={styles.wifiIcon}
//             resizeMode="cover"
//             source={require("../assets/wifi1.png")}
//           />
//           <Image
//             style={styles.cellularConnectionIcon}
//             resizeMode="cover"
//             source={require("../assets/cellular-connection1.png")}
//           />
//           <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
//         </View>
//       </View>
//       <View style={[styles.bottomMenus, styles.bottomMenusLayout]}>
//         <View style={[styles.background1, styles.bottomMenusLayout]} />
//         <Image
//           style={[styles.activityIcon, styles.iconLayout]}
//           resizeMode="cover"
//           source={require("../assets/activity.png")}
//         />
//         <Image
//           style={styles.wishlistIcon}
//           resizeMode="cover"
//           source={require("../assets/vector-stroke.png")}
//         />
//         <View style={[styles.activemenu, styles.activemenuLayout]}>
//           <View style={[styles.background2, styles.activemenuLayout]} />
//           <View style={styles.icHomeParent}>
//             <Image
//               style={[styles.icHomeIcon, styles.borderPosition]}
//               resizeMode="cover"
//               source={require("../assets/ic-home.png")}
//             />
//             <Text style={[styles.cngThc, styles.timeTypo]}>Công thức</Text>
//           </View>
//         </View>
//         <Image
//           style={styles.placeholderIcon}
//           resizeMode="cover"
//           source={require("../assets/placeholder3.png")}
//         />
//       </View>
//       <View style={styles.form}>
//         <Image
//           style={[styles.inputIcon, styles.inputLayout]}
//           resizeMode="cover"
//           source={require("../assets/input.png")}
//         />
//         <View style={[styles.input, styles.inputLayout]}>
//           <View style={[styles.borderbottom, styles.inputLayout]} />
//         </View>
//         <View style={[styles.input1, styles.inputLayout]}>
//           <View style={[styles.borderbottom, styles.inputLayout]} />
//         </View>
//         <View style={[styles.input2, styles.inputPosition]}>
//           <View style={[styles.borderbottom, styles.inputLayout]} />
//         </View>
//         <View style={[styles.input3, styles.inputPosition]}>
//           <View style={[styles.borderbottom, styles.inputLayout]} />
//         </View>
//         <View style={styles.anhThWrapper}>
//           <Text style={[styles.anhTh, styles.anhThTypo]}>Anh Thư</Text>
//         </View>
//       </View>
//       <Text style={[styles.tiKhonCa, styles.uIVTypo]}>Tài khoản của tôi</Text>
//       <Text style={[styles.uIV, styles.uIVTypo]}>Ưu đãi và tiết kiệm</Text>
//       <Text style={[styles.uICho, styles.ciTTypo]}>Ưu đãi cho thành viên</Text>
//       <Text style={[styles.yuThch, styles.ciTTypo]}>Yêu thích</Text>
//       <Text style={[styles.giPremium, styles.ciTTypo]}>Gói premium</Text>
//       <Text style={[styles.ciT, styles.ciTTypo]}>Cài đặt</Text>
//       <Text style={[styles.phngThcThanh, styles.ciTTypo]}>
//         Phương thức thanh toán
//       </Text>
//       <Image
//         style={[styles.homeV2Item, styles.homeLayout]}
//         resizeMode="cover"
//         source={require("../assets/group-32.png")}
//       />
//       <Image
//         style={[styles.homeV2Inner, styles.homeLayout]}
//         resizeMode="cover"
//         source={require("../assets/group-32.png")}
//       />
//       <Image
//         style={[styles.groupIcon, styles.homeLayout]}
//         resizeMode="cover"
//         source={require("../assets/group-32.png")}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   background01Position: {
//     backgroundColor: Color.linear,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   swipeUpPosition: {
//     bottom: 0,
//     right: 0,
//     left: 0,
//     position: "absolute",
//   },
//   iconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   headerPosition: {
//     width: 375,
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   backgroundPosition: {
//     borderTopRightRadius: Border.br_9xl,
//     borderTopLeftRadius: Border.br_9xl,
//   },
//   anhThTypo: {
//     textAlign: "center",
//     fontFamily: FontFamily.poppinsSemibold,
//     fontWeight: "600",
//   },
//   btnbackLayout: {
//     height: 46,
//     width: 46,
//     position: "absolute",
//   },
//   borderBorder: {
//     borderWidth: 1,
//     borderStyle: "solid",
//   },
//   borderPosition: {
//     left: "0%",
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//     position: "absolute",
//   },
//   timeTypo: {
//     lineHeight: 20,
//     letterSpacing: 0,
//     fontSize: FontSize.sFSubheadlineSemibold_size,
//     textAlign: "center",
//     position: "absolute",
//   },
//   bottomMenusLayout: {
//     height: 70,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   activemenuLayout: {
//     height: 45,
//     width: 125,
//     position: "absolute",
//   },
//   inputLayout: {
//     width: 349,
//     height: 45,
//     left: 0,
//     position: "absolute",
//   },
//   inputPosition: {
//     left: 1,
//     width: 349,
//     height: 45,
//     position: "absolute",
//   },
//   uIVTypo: {
//     height: 21,
//     color: Color.black,
//     fontSize: FontSize.size_sm,
//     left: 14,
//     textAlign: "center",
//     fontFamily: FontFamily.poppinsSemibold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   ciTTypo: {
//     fontFamily: FontFamily.poppinsLight,
//     fontWeight: "300",
//     left: 20,
//     height: 21,
//     color: Color.black,
//     fontSize: FontSize.size_sm,
//     textAlign: "center",
//     position: "absolute",
//   },
//   homeLayout: {
//     height: 14,
//     width: 23,
//     left: 325,
//     position: "absolute",
//   },
//   pagebackground: {
//     top: 0,
//     height: 812,
//     backgroundColor: Color.linear,
//   },
//   backgroundIcon: {
//     bottom: 0,
//     right: 0,
//     left: 0,
//     position: "absolute",
//     top: 0,
//   },
//   view: {
//     marginLeft: -66.5,
//     bottom: 9,
//     left: "50%",
//     backgroundColor: Color.gainsboro,
//     width: 134,
//     height: 5,
//     position: "absolute",
//   },
//   btnhome: {
//     top: 0,
//   },
//   swipeUp: {
//     top: 777,
//   },
//   homeV2Child: {
//     backgroundColor: Color.mediumaquamarine_100,
//     height: 316,
//   },
//   background01: {
//     top: 222,
//     shadowColor: "rgba(3, 46, 33, 0.02)",
//     shadowOffset: {
//       width: 0,
//       height: -16,
//     },
//     shadowRadius: 29,
//     elevation: 29,
//     shadowOpacity: 1,
//     height: 503,
//     backgroundColor: Color.linear,
//     width: 375,
//     left: 0,
//     position: "absolute",
//   },
//   profilepictureIcon: {
//     top: 133,
//     left: 99,
//     width: 178,
//     height: 178,
//     position: "absolute",
//   },
//   tiKhon: {
//     top: 65,
//     left: 133,
//     fontSize: FontSize.size_3xl,
//     color: Color.white,
//     position: "absolute",
//   },
//   btnoptionIcon: {
//     left: 301,
//     top: 55,
//     width: 46,
//   },
//   background: {
//     borderRadius: Border.br_17xl,
//     borderColor: "rgba(255, 255, 255, 0.2)",
//     height: 46,
//     width: 46,
//     position: "absolute",
//     left: 0,
//     top: 0,
//   },
//   arrowIcon: {
//     top: 14,
//     left: 17,
//     width: 12,
//     height: 18,
//     position: "absolute",
//   },
//   btnback: {
//     left: 30,
//     top: 55,
//     width: 46,
//   },
//   border: {
//     width: "90.43%",
//     right: "9.57%",
//     borderRadius: 3,
//     borderColor: "#fff",
//     opacity: 0.35,
//     borderWidth: 1,
//     borderStyle: "solid",
//   },
//   capIcon: {
//     height: "35.29%",
//     width: "5.46%",
//     top: "32.35%",
//     right: "0%",
//     bottom: "32.35%",
//     left: "94.54%",
//     opacity: 0.4,
//     position: "absolute",
//   },
//   capacity: {
//     height: "64.71%",
//     width: "73.99%",
//     top: "17.65%",
//     right: "17.79%",
//     bottom: "17.65%",
//     left: "8.22%",
//     borderRadius: 1,
//     position: "absolute",
//     backgroundColor: Color.white,
//   },
//   battery: {
//     height: "25.76%",
//     width: "6.49%",
//     top: "39.39%",
//     right: "3.82%",
//     bottom: "34.85%",
//     left: "89.69%",
//     position: "absolute",
//   },
//   wifiIcon: {
//     width: 15,
//     height: 11,
//   },
//   cellularConnectionIcon: {
//     width: 17,
//     height: 11,
//   },
//   time: {
//     marginTop: -9,
//     width: "14.4%",
//     top: "50%",
//     left: "5.6%",
//     fontFamily: FontFamily.sFSubheadlineSemibold,
//     color: Color.white,
//     fontWeight: "600",
//     lineHeight: 20,
//     letterSpacing: 0,
//     fontSize: FontSize.sFSubheadlineSemibold_size,
//   },
//   statusbar: {
//     height: 44,
//     right: 0,
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   header: {
//     height: 101,
//   },
//   background1: {
//     backgroundColor: Color.gray_600,
//     borderTopRightRadius: Border.br_9xl,
//     borderTopLeftRadius: Border.br_9xl,
//     top: 0,
//   },
//   activityIcon: {
//     height: "30%",
//     width: "6.13%",
//     top: "35%",
//     right: "26.53%",
//     bottom: "35%",
//     left: "67.33%",
//     position: "absolute",
//   },
//   wishlistIcon: {
//     top: 24,
//     right: 163,
//     width: 24,
//     height: 22,
//     position: "absolute",
//   },
//   background2: {
//     borderRadius: Border.br_8xl,
//     backgroundColor: Color.mediumaquamarine_200,
//     left: 0,
//     top: 0,
//   },
//   icHomeIcon: {
//     width: "24%",
//     right: "76%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   cngThc: {
//     top: 1,
//     fontFamily: FontFamily.sFProRegular,
//     color: Color.mediumaquamarine_100,
//     left: 28,
//   },
//   icHomeParent: {
//     height: "53.33%",
//     width: "80%",
//     top: "24.44%",
//     right: "10.4%",
//     bottom: "22.22%",
//     left: "9.6%",
//     position: "absolute",
//   },
//   activemenu: {
//     top: 13,
//     left: 28,
//   },
//   placeholderIcon: {
//     top: 19,
//     left: 315,
//     width: 32,
//     height: 32,
//     position: "absolute",
//   },
//   bottomMenus: {
//     top: 707,
//   },
//   inputIcon: {
//     top: 112,
//   },
//   borderbottom: {
//     borderRadius: Border.br_3xs,
//     backgroundColor: Color.whitesmoke_100,
//     top: 0,
//   },
//   input: {
//     top: 165,
//   },
//   input1: {
//     top: 218,
//   },
//   input2: {
//     top: 301,
//   },
//   input3: {
//     top: 354,
//   },
//   anhTh: {
//     fontSize: FontSize.size_9xl,
//     color: Color.darkslategray_200,
//     width: 234,
//   },
//   anhThWrapper: {
//     left: 48,
//     flexDirection: "row",
//     padding: 10,
//     top: 0,
//     position: "absolute",
//   },
//   form: {
//     top: 315,
//     left: 13,
//     width: 350,
//     height: 399,
//     position: "absolute",
//   },
//   tiKhonCa: {
//     top: 398,
//     width: 133,
//   },
//   uIV: {
//     top: 589,
//     width: 140,
//   },
//   uICho: {
//     top: 439,
//     width: 175,
//   },
//   yuThch: {
//     top: 492,
//     width: 80,
//   },
//   giPremium: {
//     top: 628,
//     width: 93,
//   },
//   ciT: {
//     top: 681,
//     width: 51,
//   },
//   phngThcThanh: {
//     top: 545,
//     width: 179,
//   },
//   homeV2Item: {
//     top: 496,
//   },
//   homeV2Inner: {
//     top: 549,
//   },
//   groupIcon: {
//     top: 632,
//   },
//   homeV2: {
//     flex: 1,
//     width: "100%",
//     overflow: "hidden",
//     height: 812,
//     backgroundColor: Color.white,
//   },
// });

// export default UserProfile;
