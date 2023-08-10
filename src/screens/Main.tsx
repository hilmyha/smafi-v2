import {View, Text, Image} from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';

const Tab = createBottomTabNavigator();

const iconStyle = 'w-8 h-8'

export default function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home" 
      backBehavior="initialRoute" 
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => {
          return (
            <View className="bg-white rounded-t-[30px] h-screen"/>
          )
        }
      }}>

      <Tab.Screen name="Home" component={Home} options={{ 
        tabBarIcon: ({focused}) => {
          return (
            <View className="items-center" >
              { focused? 
                <Image source={require("../assets/icon-home.png")} className={iconStyle}/> :
                <Image source={require("../assets/icon-home-inactive.png")} className={iconStyle}/> }
            </View>
          )
        }
      }} />
    
    </Tab.Navigator>
  );
}
