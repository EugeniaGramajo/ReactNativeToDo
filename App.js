import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalsInput from "./components/goalsInput";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalvisible]= useState(false)

  function addGoalHandler(input) {
    setCourseGoals((current) => [
      ...current,
      { text: input, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal)=>goal.id!==id);
    })
  }
  function isModalVisible(){
    setModalvisible(!modalVisible)
  }
  return (
    <>
    <StatusBar style="Dark" />
    <View style={styles.appContainer}>
      <Button onPress={isModalVisible} title="Add a new Goal"  color="#ffcfd2"/>
      <GoalsInput modalVisible={modalVisible} isModalVisible={isModalVisible} addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem id={itemData.item.id} deleteGoalHandler={deleteGoalHandler} text={itemData.item.text} />
          }}
          keyExtractor={(item,index)=>{
            return item.id
          }}
        />
      </View>
    </View></>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
    justifyContent:"center"
  },
  
  goalsContainer: {
    flex: 2,
    borderTopWidth: 3,
    borderTopColor: "white",
    marginTop:25,
  },

});
