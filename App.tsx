import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

export default function App() {
  return (
    <View style={styles.container}>

      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE} 
        initialRegion={{latitude : +0.054060, longitude: -51.052250, latitudeDelta: 0.008, longitudeDelta:0.008 }} >
      </MapView>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map:{
    width: Dimensions.get('window').width,
    height:  Dimensions.get('window').height,
  }
});
