import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//
import PinInsert from "../images/Pin.png";

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleTooltipClick() {
    navigation.navigate("accenture");
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          longitude: -7.2507272,
          latitude: -35.8709473,
          longitudeDelta: 0.015,
          latitudeDelta: 0.015,
        }}
      >
        <Marker
          icon={PinInsert}
          coordinate={{
            longitude: -7.2507272,
            latitude:  -35.8709473,
          }}
        >
          <Callout tooltip={true} onPress={handleTooltipClick}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Unidade CG</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Texto</Text>
        <RectButton style={styles.footerButton}>
          <Feather name="search" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  calloutContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
  calloutText: {
    color: "#A100FF",
  },
  footer: {
    padding: 15,
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 24,
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    color: "#8fa7b3",
  },
  footerButton: {
    height: 56,
    width: 56,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A100FF",
  },
});

export default Home;