import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from "react-native";
import Todo from "./Todo";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addHandler = () => {
    if (todo) {
      setTodos((prev) => [...prev, todo]);
      setTodo("");
    } else {
      alert("There is no data");
    }
  };

  const deleteHandler = (id) => {
    // todos.splice(id, 1);
    const newArray = todos.filter((_, index) => index !== id);
    setTodos(newArray);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ToDo app</Text>
      </View>
      <View style={styles.viewPart}>
        <TextInput
          style={styles.input}
          placeholder=" Enter "
          onChangeText={(value) => setTodo(value)}
          value={todo}
        ></TextInput>
        <View style={styles.button}>
          <Button title="Add" onPress={() => addHandler()} color="black" />
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              index={index}
              deleteProp={() => deleteHandler(index)}
            />
          );
        })}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>footer</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: "lightgray",
    // textAlign:'center',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    color: "white",
    marginTop: 80,
    marginBottom: 20,
    backgroundColor: "lightgray",
    padding: 10,
  },
  button: {
    margin: 10,
    height: 100,
  },
  scroll: {
    flex: 1,
    marginBottom: 100,
  },
  viewPart: { flex: 1, flexDirection: "row" },
  input: {
    backgroundColor: "lightgray",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: 200,
    height: 50,
    marginLeft: 10,
  },
  footer: {
    backgroundColor: "lightgray",
  },
  footerText: {
    color: "black",
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
  },
});
