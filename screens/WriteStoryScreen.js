import React from 'react';
import {Text,View,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader'

export default class WriteStoryScreen extends React.Component {
   render() {
     return(
       <View style={{justifyContent:'center',alignItems:'center'}}>
           <AppHeader/>

           <TextInput style={styles.storyTitle}
          placeholder="  Story Title"/>

           <TextInput style={styles.storyTitle}
          placeholder="  Author"/>

         <TextInput  style={styles.Story}
          placeholder="  Write your story"/>

           <TouchableOpacity  style={styles.submitButton}>
          
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
       </View>
     
     )
   }
  }

  const styles = StyleSheet.create({
    submitButton:{
      backgroundColor: '#FDB9C8',
      width: 100,
      height:50
    },
    submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'black'
  },
  storyTitle:{
    width:350,
    height:50,
    borderWidth:2,
    marginTop:35,
    fontWeight:"bold",
    color: 'black'

  },
  Story:{
    width:350,
    height:300,
    borderWidth:2,
    marginTop:35,
    marginBottom:20,
    fontWeight:"bold",
    color: 'black'
  }
  })
