import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Colors';
import GlobalStyles from '../GlobalStyles';

const CustomButton = ({children, onPress, style}) => {
  return (
    <View style={style}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, GlobalStyles.shadow]}>
        <Text style={styles.textButton}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    width: 250,
    padding: 10,
  },
  textButton: {
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomButton;
