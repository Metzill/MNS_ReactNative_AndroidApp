import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import QuoteList from './screens/QuoteList';
import Cart from './screens/Cart';
import Profil from './screens/Profil';
import React, {useEffect, useState} from 'react';

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Tab = createMaterialBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer style={{color: '#E9EFC0'}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Tab.Navigator initialRouteName="Profil">
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <Icon name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profil"
            component={Profil}
            options={{
              tabBarLabel: 'Profil',
              tabBarIcon: ({color}) => (
                <Icon name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  equivalentClasse: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
