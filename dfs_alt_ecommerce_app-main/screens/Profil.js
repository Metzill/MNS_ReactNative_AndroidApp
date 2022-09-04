import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import EditProfil from './EditProfil';
import CameraView from './CameraView';

const Profil = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Edit profil" component={EditProfil} />
        <Stack.Screen name="Take photo" component={CameraView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Profil;
