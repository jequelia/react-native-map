import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// import { Container } from './styles';

export default function() {
  return (
      <View>
          <Text style={style.scrollView}>Contatct</Text>

      </View>
  );
}

const style = StyleSheet.create({

    scrollView: {
        width: Dimensions.get('window').width,
    }

})