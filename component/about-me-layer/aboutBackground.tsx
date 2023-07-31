import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const AboutBackgroud = () => {
  return (
    <View>
      <View
        style={{
          width: 1350,
          height: 650,
          backgroundColor: '#121212',
        }}>
        <View style={{flex:1,flexDirection:'column'}}>
          <Text style={styles.text1}>About Me</Text>
          <Text style={styles.text2}>For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer. At the moment, this journey has brought me to Cloud Academy in Mendrisio, Switzerland where I am a full-time Product Designer. In this position, as with freelance, I am working remotely and I have been for approximately two years.</Text>
          <Text style={styles.text2}>For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer. At the moment, this journey has brought me to Cloud Academy in Mendrisio, Switzerland where I am a full-time Product Designer. In this position, as with freelance, I am working remotely and I have been for approximately two years.</Text>
          <View style = {{flex:1, flexDirection:'row', marginLeft: 700, marginTop: 40}}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.buttonText1}>H I R E  M E</Text>
            </TouchableOpacity>
            <View style = {{marginLeft:30}}>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.buttonText2}>D O W N L O A D  C V</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
           
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
    color: '#EDE4E4',
    fontFamily: 'Baloo Paaji',
    fontSize: 40,
    fontWeight: '700',
    marginLeft: 700,
    marginTop:20,

  },

  text2: {
    color: '#B0A7A9',
    marginLeft: 700,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
    paddingRight: 100,
    textAlign: 'justify'

  },

  button1: {
    width: 150,
    height: 50,
    borderRadius: 46,
    backgroundColor: '#B2C251',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText1: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'poppins',
    
  },

  button2: {
    width: 250,
    height: 50,
    borderRadius: 46,
    backgroundColor: '#5A6268',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText2: {
    color: '#d3e84e',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'poppins',
    
  },

});



export default AboutBackgroud;
