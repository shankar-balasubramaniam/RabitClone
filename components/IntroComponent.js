import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const IntroComponent = () => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/intro_page1.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Welcome to Rabit! <Icon name="carrot" size={20} />
          </Text>
          <Text style={styles.text}>
            The app that will help you plant new habits and transform your life
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flexDirection: 'column',
    height: '35%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'Baloo2-Bold',
    fontSize: 24,
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'Baloo2-Regular',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default IntroComponent;
