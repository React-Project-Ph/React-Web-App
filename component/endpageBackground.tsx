import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import facebookImage from '../assets/facebook.png';
import githubImage from '../assets/github.png';
import linkdinImage from '../assets/linkedin.png';
import twitterImage from '../assets/twitter.png';




const EndpageBackground = () => {
  return (
    <View>
      <View style={{width: 1350, height: 430, backgroundColor: '#121212'}}>
        <View style={{flex:1, flexDirection:'column'}}>
                <View style={{flex:4,flexDirection:'row'}}>
                <View style = {{flex:1, flexDirection:'column'}}>
                    <Text style={styles.Text1}>Lets talk about</Text>
                    <Text style={styles.Text2}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
                    <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText1}>L E A R N  M O R E</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{flex:1, flexDirection:'column'}}>
                    <Text style = {styles.Text1}>Links</Text>
                    <Text style={styles.Text2}>{'>'}  Home</Text>
                    <Text style={styles.Text2}>{'>'}  About Me</Text>
                    <Text style={styles.Text2}>{'>'}  My Skills</Text>
                    <Text style={styles.Text2}>{'>'}  My Projects</Text>
                    <Text style={styles.Text2}>{'>'}  Contacts</Text>
                </View>

                <View style={{flex:1, flexDirection:'column'}}>
                    <Text style = {styles.Text1}>Services</Text>
                    <Text style={styles.Text2}>{'>'}  Web Design</Text>
                    <Text style={styles.Text2}>{'>'}  UI/UX Design</Text>
                    <Text style={styles.Text2}>{'>'}  IOT System Design</Text>
                    <Text style={styles.Text2}>{'>'}  PCB Design</Text>
                    <Text style={styles.Text2}>{'>'}  Backend Design</Text>
                </View>

                <View style={{flex:1, flexDirection:'column', marginRight:100}}>
                    <Text style = {styles.Text1}>Have a Questions ?</Text>
                    <Text style={styles.Text2}>{'>'}  No: 294, Minuwangoda Rd, Asgiriya, Gampaha.</Text>
                    <Text style={styles.Text2}>{'>'}  viduminarm@gmail.com</Text>
                    <Text style={styles.Text2}>{'>'}  +9476-8013609</Text>
                    <View style={{flex:1, flexDirection:'row'}}>
                    <Image source={facebookImage} style={styles.image} />
                    <Image source={githubImage} style={styles.image} />
                    <Image source={linkdinImage} style={styles.image} />
                    <Image source={twitterImage} style={styles.image} />
                    </View>

                </View>
            </View>
            <View>
                <Text style={{fontWeight: 'bold', color: '#BDB69C', fontFamily: 'Arial', fontSize: 16, marginTop: 20, marginLeft: 400, marginBottom:50}}>Copyright ©2023 All rights reserved | Created By Vidumina Rathnayake</Text>
            </View>
        </View>     
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Text1: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 22,
    marginTop: 20,
    marginLeft: 100,
  },

  Text2: {
    fontWeight: 'bold',
    color: '#BDB69C',
    fontFamily: 'Arial',
    fontSize: 16,
    marginTop: 30,
    marginLeft: 100,
  },

  button1: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#B1B493',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:100,
    marginTop:20,
  },

  buttonText1: {
    color: '#FFFFF8',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Arial',
    
  },

  image: {
    marginTop: 30,
    width: 50,
    height: 50,
   // borderRadius: 66,
    marginLeft:40,
  },

});

export default EndpageBackground;
