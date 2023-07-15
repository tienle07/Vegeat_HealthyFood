/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

const Stack = createNativeStackNavigator();
import { NavigationContainer } from "@react-navigation/native";
import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Login from "./screens/login";
import RecipeDetail from "./screens/recipeDetails";
import ListRecipe from "./screens/listRecipe";
import SignUp from "./screens/signup";
import Home from "./screens/home";
import PricingPlan from "./screens/pricingPlan";
import Profile from "./screens/profile";
import Blog from "./screens/blog";
import Splash from "./screens/splash";
import TodayRecipe from "./screens/todayRecipe";
import NutritionSchedule from "./screens/nutritionSchedule";
import DietPrograms from "./screens/dietPrograms";
import Statist from "./screens/Statist";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function App() {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Công thức" component={HomeScreen} />
    //     <Tab.Screen name="Tài khoản" component={Home2Screen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListRecipe"
              component={ListRecipe}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecipeDetail"
              component={RecipeDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PricingPlan"
              component={PricingPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Blog"
              component={Blog}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TodayRecipe"
              component={TodayRecipe}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="NutritionSchedule"
              component={NutritionSchedule}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="DietPrograms"
              component={DietPrograms}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Statist"
              component={Statist}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
}

