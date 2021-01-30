import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import AppHeader from  '../components/AppHeader'

export default class ReadStoryScreen extends React.Component {
  render() {
    return(
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <AppHeader/>
       <Text style={styles.Txt}>Read Story</Text>
      </View>
    )
  }

  }
  
  const styles = StyleSheet.create({
    Txt:{
    color:'coral',
    fontSize:25,
    marginTop:300
    }
  })
