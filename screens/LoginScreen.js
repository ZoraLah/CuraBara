import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar'; // Correct import for StatusBar
import Animated,{ FadeIn, FadeInUp, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Image style={styles.backgroundImage} source={require('../assets/images/background.png')} />
      

      <View style={styles.lightsContainer}>
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} style={styles.light1} source={require('../assets/images/light.png')} />
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)}style={styles.light2} source={require('../assets/images/light.png')} />
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
            <Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.loginText}>
                Login
            </Animated.Text>
        </View>

        <View style={styles.inputContainer}>
          <Animated.View entering={FadeInDown.duration(1000).springify()} style={styles.inputBox}>
            <TextInput 
              placeholder="Email" 
              placeholderTextColor="gray" 
              style={styles.textInput} 
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.inputBox}>
            <TextInput 
              placeholder="Password" 
              placeholderTextColor="gray" 
              style={styles.textInput} 
              secureTextEntry
            />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={styles.loginButton}>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={styles.signUpContainer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('Signup')}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    top: '0%', // Adjust this based on your design
  },
  light1: {
    width: 90,
    height: 225,
    left: 70,
  },
  light2: {
    width: 65,
    height: 160,
    left: 275,
    top: -225, 
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',  // Align to the top
    paddingTop: 20,  // Reduced from 40 to move it up
    paddingBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    top: -160,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontSize: 60,
    textAlign: 'center', // To align the text properly
  },

  // New Styles for the TextInput container
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 20,
  },
  inputBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    marginBottom: 20,
  },
  textInput: {
    color: 'black',
    fontSize: 16,
  },

  // New Styles for Button and Text
  loginButton: {
    width: '100%',
    backgroundColor: '#00A9E0',
    padding: 7,
    borderRadius: 16,
    marginBottom: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#00A9E0',
    fontWeight: 'bold',
  },
});
