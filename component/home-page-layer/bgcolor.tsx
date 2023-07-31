import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyComponent from './myComponent';
import DeveloperComponent from './developerComponent';



const BgColor = () => {
  return (
    <View>
      <View
        style={{
          width: 1350,
          height: 650,
          backgroundColor: '#121212',
        }}>
        <View style={{flex:1,flexDirection:'row'}}>
          <Text style={styles.baseText}>VIDU.</Text>
          <MyComponent/>
        </View>
           <DeveloperComponent/>
        </View>
        </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 37,
    marginLeft: 54,
  },

});

export default BgColor;
