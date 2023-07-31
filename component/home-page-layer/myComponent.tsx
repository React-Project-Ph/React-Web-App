import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class MyComponent extends Component {
  render() {
    return (
      <View style={styles.baseText} >
        <View style={{marginLeft:360}}>
        <Text style={styles.baseText1}>Home</Text>
        </View>
        <View style={{marginLeft:50}}>
        <Text style={styles.baseText1}>Skill</Text>
        </View>
        <View style={{marginLeft:50}}>
        <Text style={styles.baseText1}>About</Text>
        </View>
        <View style={{marginLeft:50}}>
        <Text style={styles.baseText1}>Project</Text>
        </View>
        <View style={{marginLeft:50}}>
        <Text style={styles.baseText1}>Contact</Text>
        </View>
        <View style={{marginLeft:275, marginTop: -10}}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Download CV</Text>
        </TouchableOpacity>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    desplay: 'flex',
    flexDirection: 'row',
    marginTop: 40,
  },

  baseText1: {
    fontWeight: 'bold',
    color: 'white',
  },

  button: {
    width: 143,
    height: 46,
    borderRadius: 21,
    backgroundColor: '#7883EA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 51,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
    
});

export default MyComponent;