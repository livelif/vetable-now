import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet } from 'react-native';
import LoginVegetableSvg from './assets/loginVegetable'

import styles from './login.styles';

interface Props {
  navigation: any;
}

const LogIn: React.FC<Props> = ({ navigation  }) => {
  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  }

  const navigateToNested = () => {
    navigation.navigate('PrivateNavigator')
  }

  return (
    <View style={styles.container}>

      <View style={styles.loginVegetableSvg}>
        <LoginVegetableSvg />
      </View>

      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.textButtonLogin}>
            Login
          </Text>
        </TouchableOpacity>
        
      </View>

      <Text>ou</Text>
      <Text>Registre-se</Text>

    </View>
  );
}

export default LogIn;