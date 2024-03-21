import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import LogoTransparente from '../assets/LogoTransparente.png';

const ImageLogo = () => {
  return (
    <View style={styles.imageContainer}>
      {/* Use o componente Image para renderizar a imagem */}
      <Image source={LogoTransparente} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200, // Defina a largura da imagem
    height: 200, // Defina a altura da imagem
  },
});

export default ImageLogo;
