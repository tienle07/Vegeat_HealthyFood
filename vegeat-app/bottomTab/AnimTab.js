import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../components/Icons';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
import TodayRecipe from '../screens/todayRecipe';
import Blog from '../screens/blog';
import Profile from '../screens/profile';
import ListRecipe from '../screens/listRecipe';

const TabArr = [
    { route: 'Home', label: 'Công thức', type: Icons.Feather, icon: 'home', component: ListRecipe, color: Colors.primary, alphaClr: Colors.primaryAlpha },
    { route: 'TodayRecipe', label: 'Yêu thích', type: Icons.Feather, icon: 'search', component: TodayRecipe, color: Colors.green, alphaClr: Colors.greenAlpha },
    { route: 'Blog', label: 'Theo dõi', type: Icons.Feather, icon: 'plus-square', component: Blog, color: Colors.red, alphaClr: Colors.redAlpha },
    { route: 'Profile', label: 'Cá nhân', type: Icons.FontAwesome, icon: 'user-circle-o', component: Profile, color: Colors.purple, alphaClr: Colors.purpleAlpha },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const textViewRef = useRef(null);

    useEffect(() => {
        if (focused) { // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
            viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
            textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
        } else {
            viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
            textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
        }
    }, [focused])

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.container, { flex: focused ? 1 : 0.65 }]}>
            <View>
                <Animatable.View
                    ref={viewRef}
                    style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 16 }]} />
                <View style={[styles.btn, { backgroundColor: focused ? null : item.alphaClr }]}>
                    <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} />
                    <Animatable.View
                        ref={textViewRef}>
                        {focused && <Text style={{
                            color: Colors.white, paddingHorizontal: 8
                        }}>{item.label}</Text>}
                    </Animatable.View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default function AnimTab3() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    left: 16,
                    borderRadius: 16
                }
            }}
        >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 16,
    }
})