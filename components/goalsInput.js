import { View, TextInput, Button, Modal, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function GoalsInput({
  isModalVisible,
  modalVisible,
  addGoalHandler,
}) {
  const [input, setInput] = useState("");
  function goalInputHandler(input) {
    setInput(input);
  }
  function addGoalHandler2() {
    addGoalHandler(input);
    isModalVisible()
    setInput("");
  }
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="   your course goals"
          value={input}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="add goal" onPress={addGoalHandler2} color="#bdb2ff"></Button>
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={isModalVisible} color="#ffafcc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#ffddd2",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,

  },
  textInput: {
    borderWidth: 2,
    borderColor: "#6d597a",
    backgroundColor:"#cbc0d3",
    width: "70%",
    borderRadius: 5,
    padding:3,
    paddingLeft:15,
    
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

