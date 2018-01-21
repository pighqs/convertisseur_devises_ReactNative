import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";

import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode="contain"
      style={styles.containerImage}
      source={require("./images/background.png")}
    >
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("./images/logo.png")}
      />
    </ImageBackground>
    <Text style={styles.text}>Convertisseur de Devises</Text>
  </View>
);

export default Logo;
