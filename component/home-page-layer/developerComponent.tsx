import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const DeveloperComponent = () => {
  return (
        <View style={styles.container}>
          <Text style={styles.text1}>Hello, </Text>
          <Text style={styles.text2}>I'm Vidumina </Text>
          <Text style={styles.text3}>Web Designer & Developer </Text>
            <View style = {{marginTop: 40, marginLeft: 230}}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Works</Text>
              </TouchableOpacity>
            </View>
        </View>
          
  );
};

const styles = StyleSheet.create({
  container: {
    flex:3,
    display: 'flex',
    flexDirection: 'column',

  },

  text1: {
    color: '#B0A7A9',
    marginLeft: 300,
    fontFamily: 'Poppins',
    fontSize: 64,
    fontWeight: '500',
    
    
  },

  text2: {
    color: '#EDE4E4',
    fontFamily: 'Poppins',
    fontSize: 70,
    fontWeight: '700',
    marginLeft: 170,
    marginTop:20,

  },

  text3: {
    color: '#E1D9D9',
    fontFamily: 'Poppins',
    fontSize: 32,
    fontWeight: '500',
    marginLeft: 200,
    marginTop:15,
  },

  button: {
    width: 260,
    height: 75,
    borderRadius: 46,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'poppins',
    
  },

});

export default DeveloperComponent;