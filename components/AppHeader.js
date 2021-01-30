import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View>
          <Text style={styles.Text}>Story Hub</Text>       
      </View>
    );
  }
}

export default AppHeader;

const styles = StyleSheet.create({
  Text:{
    backgroundColor:'#FDB9C8',
    width:420,
    height:85,
    textAlign:'center',
    alignItems:'center',
    marginTop:40,
    fontSize:50
  }
})
