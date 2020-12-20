import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Ticker from "./Ticker";

export default function Foreground() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode={"contain"}
        source={require("../assets/bitfinex.png")}
      />
      {/* <Text style={styles.title}>BITFINEX</Text>   */}
      <Text style={styles.subTitle}>Home of Digital Asset Trading</Text>
      <Ticker/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    margin: 50,
    justifyContent: "flex-end",
    alignItems: "center",
   height:'100%' ,
   marginTop:0 ,
  },
  image: {
    height: "15%",
    marginBottom:0,

  },
  title: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom:0
  },
  subTitle: {
    color: "#C3C3EE",
    marginBottom:0 ,
  
  },
});
