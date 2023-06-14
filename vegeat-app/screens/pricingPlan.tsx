import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image, TouchableOpacity, Alert, Linking } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import axios from 'axios';
import configUrl from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PricingPlan = () => {
  const navigation = useNavigation();
  const [selectedView, setSelectedView] = useState(null);

  const handleViewPress = (viewName) => {
    console.log(viewName);
    setSelectedView(viewName);
  };

  const handleContinue = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };

      // Gọi API "payment"
      const response = await axios.post(`${configUrl.API_BASE_URL}/payment/pay`, {
        price: '6.92', // Giá trị thanh toán
        description: 'Product description', // Mô tả sản phẩm
        return_url: 'http://your-website.com/success', // URL trả về khi thanh toán thành công
        cancel_url: 'http://your-website.com/cancel', // URL trả về khi hủy thanh toán
      }, config);

      // Lấy approvalUrl và accessToken từ phản hồi
      const { approvalUrl, accessToken } = response.data;

      // Gọi API để lấy thông tin người dùng
      const profileResponse = await axios.get(`${configUrl.API_BASE_URL}/user/profile`, config);

      // Lấy thông tin người dùng
      const { user } = profileResponse.data;
      const { _id, status } = user;

      if(status === "premium"){
        Alert.alert('Thông báo', 'Bạn đã là hội viên của chúng tôi');
        return;
      }
      
      console.log(user);

      // Gọi API để cập nhật trạng thái người dùng
      await axios.put(`${configUrl.API_BASE_URL}/user/${_id}`, { status: 'premium' }, config);

      // Lưu trữ accessToken vào AsyncStorage nếu cần thiết

      console.log(approvalUrl);
      Alert.alert('Thông báo', 'Đang tiến hành thanh toán');
      // Chạy link trong approvalUrl
      await Linking.openURL(approvalUrl);
    } catch (error) {
      console.error('Error calling payment API:', error);
    }
  };

  return (
    <View style={styles.pricingplan}>
      <View style={[styles.pagebackground, styles.headerPosition]} />
      <Pressable
        style={styles.btncontinue}
        onPress={handleContinue}
      >
        <LinearGradient
          style={styles.background}
          locations={[0, 1]}
          colors={["#4beebd", "#3ddaaa"]}
          useAngle={true}
          angle={101.93}
        />
        <Text style={[styles.tipTc, styles.tipTcFlexBox]}>Tiếp tục</Text>
      </Pressable>
      <View style={[styles.listpackage, styles.item03Layout]}>
        <Pressable
          style={[styles.item01, styles.itemLayout]}
          onPress={() => handleViewPress('item01')}
        >
          <View style={styles.background1} />
          <View style={[styles.monthlyParent, styles.giCaoCpPosition]}>
            <Text style={[styles.monthly, styles.monthlyTypo]}>Monthly</Text>
            <Text style={[styles.giNngCao, styles.caoTypo]}>Gói cao cấp</Text>
            <Text style={[styles.text1, styles.textTypo]}>159.000đ</Text>
          </View>
          <Image
            style={styles.radiobtnIcon}
            resizeMode="cover"
            source={require("../assets/radiobtn1.png")}
          />
        </Pressable>

        <Pressable
          style={[styles.item02, styles.itemLayout]}
          onPress={() => handleViewPress('item02')}
        >
          <View style={[styles.background2, styles.backgroundBorder]} />
          <Image
            style={styles.radiobtnIcon}
            resizeMode="cover"
            source={require("../assets/radiobtn1.png")}
          />
          <View style={[styles.monthlyParent, styles.giCaoCpPosition]}>
            <Text style={[styles.monthly, styles.monthlyTypo]}>30 ngày</Text>
            <Text style={[styles.giNngCao, styles.caoTypo]}>Gói miễn phí</Text>
            <Text style={[styles.text1, styles.textTypo]}>0đ</Text>
          </View>
        </Pressable>
        <Text style={styles.ccLaChn}>Các lựa chọn</Text>
      </View>
      <View style={[styles.card01, styles.imageLayout]}>
        <View style={[styles.background4, styles.backgroundLayout1]} />
        <View style={[styles.image, styles.imageLayout]}>
          <View style={[styles.placeholder, styles.placeholderIconPosition]} />
          <Image
            style={[styles.overlayIcon, styles.placeholderIconPosition]}
            resizeMode="cover"
            source={require("../assets/overlay.png")}
          />
        </View>
      </View>
      <View style={[styles.background5, styles.backgroundLayout1]} />
      <View style={[styles.image1, styles.imageLayout]}>
        <Image
          style={[styles.placeholderIcon, styles.placeholderIconPosition]}
          resizeMode="cover"
          source={require("../assets/placeholder4.png")}
        />
      </View>
      <LinearGradient
        style={[styles.background6, styles.backgroundLayout]}
        locations={[0, 1]}
        colors={["rgba(106, 191, 165, 0)", "#6abfa5"]}
        useAngle={true}
        angle={180}
      />
      <Text style={[styles.dailyMealPlan, styles.giNngCao1Typo]}>
        Daily Meal Plan
      </Text>
      <Text style={[styles.programs, styles.programsTypo]}>Programs</Text>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.giNngCao1, styles.timeClr]}>Gói nâng cao</Text>
        <View style={[styles.btnoption, styles.iconTransform]}>
          <View style={[styles.background7, styles.btnoptionLayout]} />
          <View style={[styles.icon, styles.iconTransform]}>
            <View style={[styles.view, styles.viewBg]} />
            <View style={[styles.view1, styles.viewBg]} />
          </View>
        </View>
      </View>
      <LinearGradient
        style={[styles.background8, styles.backgroundLayout]}
        locations={[0, 1]}
        colors={["rgba(255, 144, 82, 0)", "#ff5b00"]}
        useAngle={true}
        angle={180}
      />
      <View style={[styles.swipeUp, styles.swipeUpPosition]}>
        <View style={[styles.btnhome, styles.swipeUpPosition]}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/background2.png")}
          />
          <View style={styles.view2} />
        </View>
      </View>
      <View style={[styles.card011, styles.card011Layout]}>
        <Text style={[styles.trainingGuide, styles.card011Layout]}>
          Training Guide
        </Text>
        <Text style={[styles.programs1, styles.programsTypo]}>Programs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tipTcFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  item03Layout: {
    width: 317,
    position: "absolute",
  },
  itemLayout: {
    height: 83,
    width: 317,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.mediumaquamarine_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "right",
    position: "absolute",
  },
  monthlyTypo: {
    color: Color.gray_700,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  backgroundBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  giCaoCpPosition: {
    top: 17,
    left: 78,
  },
  caoTypo: {
    color: Color.black,
    fontFamily: FontFamily.sFProMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  imageLayout: {
    height: 204,
    width: 263,
    position: "absolute",
  },
  backgroundLayout1: {
    backgroundColor: Color.mediumaquamarine_100,
    borderRadius: Border.br_base,
    height: 204,
    width: 263,
    position: "absolute",
  },
  placeholderIconPosition: {
    borderRadius: Border.br_base,
    height: 204,
    left: 0,
    top: 0,
    position: "absolute",
  },
  backgroundLayout: {
    height: 124,
    top: 202,
    borderRadius: Border.br_base,
    width: 263,
    // backgroundColor: Color.linear,
    position: "absolute",
  },
  giNngCao1Typo: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsSemibold,
  },
  programsTypo: {
    color: Color.gray_600,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  timeClr: {
    color: Color.darkslategray_300,
    fontWeight: "600",
    position: "absolute",
  },
  iconTransform: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  btnoptionLayout: {
    height: 46,
    width: 46,
  },
  viewBg: {
    backgroundColor: Color.darkslategray_300,
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
  card011Layout: {
    width: 165,
    position: "absolute",
  },
  pagebackground: {
    height: 812,
    backgroundColor: Color.white,
    width: 375,
  },
  background: {
    borderRadius: Border.br_31xl,
    // backgroundColor: Color.linear,
    height: 60,
    width: 318,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tipTc: {
    top: 19,
    left: 122,
    fontSize: FontSize.size_base,
    textTransform: "uppercase",
    fontFamily: FontFamily.sFProRegular,
    color: Color.white,
    textAlign: "center",
  },
  btncontinue: {
    top: 717,
    height: 60,
    width: 318,
    left: 29,
    position: "absolute",
  },
  background1: {
    borderColor: "#40b490",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    height: 83,
    width: 317,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    left: 255,
    textAlign: "right",
    top: 28,
    color: Color.mediumaquamarine_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  radiobtnIcon: {
    top: 25,
    left: 20,
    width: 34,
    height: 34,
    position: "absolute",
  },
  days: {
    textAlign: "right",
    top: 0,
  },
  daysWrapper: {
    top: 48,
    width: 55,
    height: 21,
    left: 78,
    position: "absolute",
  },
  item01: {
    top: 140,
  },
  background2: {
    borderColor: "rgba(56, 65, 68, 0.12)",
    borderRadius: Border.br_sm,
    borderWidth: 1,
    height: 83,
    width: 317,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  monthly: {
    top: 31,
    textAlign: "left",
  },
  giNngCao: {
    left: 0,
    top: 0,
  },
  text1: {
    top: 11,
    left: 144,
    textAlign: "right",
  },
  monthlyParent: {
    width: 219,
    height: 52,
    position: "absolute",
  },
  item02: {
    top: 38,
  },
  text2: {
    left: 221,
    textAlign: "right",
    top: 28,
    color: Color.mediumaquamarine_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  monthly1: {
    textAlign: "left",
    top: 0,
  },
  giCaoCp: {
    top: 17,
    left: 78,
  },
  minPh: {
    top: 116,
    left: 78,
  },
  item03: {
    top: 40,
    height: 137,
    left: 0,
  },
  ccLaChn: {
    fontSize: FontSize.size_xl,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  listpackage: {
    top: 368,
    height: 315,
    left: 29,
    width: 317,
  },
  background4: {
    left: 0,
    top: 0,
  },
  placeholder: {
    backgroundColor: "#b1b1b1",
    width: 263,
    borderRadius: Border.br_base,
  },
  overlayIcon: {
    width: 263,
    borderRadius: Border.br_base,
  },
  image: {
    left: 0,
    top: 0,
  },
  card01: {
    left: 28,
    top: 122,
  },
  background5: {
    left: 311,
    top: 122,
  },
  placeholderIcon: {
    width: 64,
  },
  image1: {
    left: 311,
    top: 122,
  },
  background6: {
    left: 311,
  },
  dailyMealPlan: {
    left: 331,
    top: 258,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  programs: {
    top: 281,
    left: 332,
  },
  giNngCao1: {
    top: 62,
    left: 30,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsSemibold,
    textAlign: "left",
  },
  background7: {
    left: -46,
    borderRadius: 31,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    top: 0,
  },
  view: {
    right: "62.59%",
    left: "-90.32%",
    borderRadius: Border.br_8xl,
    bottom: "-13.69%",
    top: "100%",
    width: "127.74%",
    height: "13.69%",
    backgroundColor: Color.darkslategray_300,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  view1: {
    right: "-18.06%",
    left: "-9.68%",
    borderRadius: Border.br_8xl,
    bottom: "-13.69%",
    top: "100%",
    width: "127.74%",
    height: "13.69%",
    backgroundColor: Color.darkslategray_300,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  icon: {
    height: "34.61%",
    width: "34.61%",
    top: "32.61%",
    right: "98%",
    bottom: "32.78%",
    left: "-32.61%",
  },
  btnoption: {
    top: 55,
    left: 347,
    height: 46,
    width: 46,
  },
  border: {
    height: "100%",
    width: "90.43%",
    top: "0%",
    right: "9.57%",
    bottom: "0%",
    left: "0%",
    borderRadius: 3,
    borderColor: "#2b395b",
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
    lineHeight: 20,
    color: Color.darkslategray_300,
    textAlign: "center",
  },
  statusbar: {
    height: 44,
    top: 0,
    position: "absolute",
  },
  header: {
    height: 101,
  },
  background8: {
    left: 28,
  },
  backgroundIcon: {
    bottom: -777,
    top: 777,
    right: 0,
    left: 0,
  },
  view2: {
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
  trainingGuide: {
    height: 20,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    color: Color.white,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  programs1: {
    top: 23,
    width: 69,
    height: 13,
    left: 0,
  },
  card011: {
    left: 46,
    height: 36,
    top: 258,
  },
  pricingplan: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.white,
  },
  selectedBackground: {
    backgroundColor: 'green', // Style được áp dụng khi view được chọn
  },
});

export default PricingPlan;
