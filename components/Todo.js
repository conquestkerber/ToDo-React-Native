import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Todo({ todo, index, deleteProp }) {
  let date = new Date();
  let year = date.getFullYear(); //2023
  let month = date.getMonth(); //6
  let day = date.getDate(); //11
  return (
    <View style={styles.container} key={index}>
      <View style={styles.info}>
        <Text>
          {day}/{month}/{year}
        </Text>
        <Text>{todo}</Text>
      </View>
      <View style={styles.button}>
        <Button title="X" color="red" onPress={deleteProp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
    backgroundColor: "gainsboro",
    // marginBottom: 10,
    // padding: 10,
    padding: 20,
    paddingRight: 100,
    marginBottom: 10,
  },
  info: {
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    paddingLeft: 10,
  },
  button: {
    // justifyContent: "center",
    // alignItems: "center",
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    // top: 10,
    bottom: 10,
    right: 10,
  },
});
