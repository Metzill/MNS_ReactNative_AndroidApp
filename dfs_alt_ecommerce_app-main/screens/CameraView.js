import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';

const CameraView = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  if (device) {
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        photo={true}
        device={device}
        isActive={true}
      />
    );
  } else {
    return <Text>Waiting for camera ...</Text>;
  }
};

export default CameraView;
