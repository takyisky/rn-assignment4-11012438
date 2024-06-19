
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView
} from 'react-native';


const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    

    <SafeAreaView style={styles.safeArea}>
      <View><Text>Your name : </Text></View>
      <View><Text>Your email : </Text></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8FA',
  },
  
});

export default HomeScreen;
