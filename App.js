import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screen/Home';
import WelcomeScreen from './Screen/WelcomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; // Importe l'icône AntDesign
import { FontAwesome } from '@expo/vector-icons';
import { colors } from './Contants';
import Scoreboard from './Screen/Scoreboard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Team from './Screen/Team';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle : {backgroundColor: colors.COLOR_GREEN},
        tabBarLabelStyle:{color:colors.COLOR_WHITE, fontSize: 13, paddingBottom:2},
        headerShown: false,
        tabBarIcon: ({ focused, color, size, }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            return <FontAwesome name="home" size={28} color={colors.COLOR_WHITE} />;
          }else if (route.name === 'Scoreboard'){
            iconName = 'scoreboard';
            return <MaterialCommunityIcons name="scoreboard" size={24} color={colors.COLOR_WHITE} />
          }
          else if (route.name === 'Team'){
            iconName = 'people';
            return <Ionicons name="people" size={24} color={colors.COLOR_WHITE} />
          }
        },
      })}
    >
      <Tab.Screen name="Team" component={Team}  />
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Scoreboard" component={Scoreboard}  />
      {/* Ajoute d'autres écrans de la Tab.Navigator si nécessaire */}
    </Tab.Navigator>
  );
}


