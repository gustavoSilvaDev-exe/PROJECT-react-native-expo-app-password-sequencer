import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';

import batLogo from '../../../assets/logo-batman.png';

export function BatLogo() {
  return (
    <View>
      <Text style={styles.title}> BAT PASS GENERATOR </Text>
      <Image style={styles.img} source={batLogo} />
    </View>
  );
}