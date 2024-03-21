import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Header = ({ title }) => {

  const _goBack = () => console.log('Went back');

  return (
    <Appbar.Header style={styles.APPbar} >
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
 APPbar:{
    backgroundColor: '#0E4032', // Cor padrão da Appbar
  },
});

export default Header;
