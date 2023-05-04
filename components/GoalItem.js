import {Pressable, StyleSheet} from 'react-native'
import { View, Text } from 'react-native'


export default function GoalItem(props){

    return(
      <View style={styles.goalItem}>
        <Pressable
       android_ripple={{color:'red'}}
       onPress={props.deleteGoalHandler.bind(this, props.id)}
       style={({pressed})=> pressed && styles.pressedItem}
       >
        
        <Text style={{ padding: 8,color: "white" }} >
          {props.text}
        </Text>
      
      </Pressable></View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#d55d92",
        
      },
      pressedItem:{
        opacity:0.5
      }
})
