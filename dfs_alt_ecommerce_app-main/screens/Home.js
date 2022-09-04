import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import QuoteDetails from './QuoteDetails';
import QuoteList from './QuoteList';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Quote list" component={QuoteList} />
        <Stack.Screen name="Product details" component={QuoteDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
