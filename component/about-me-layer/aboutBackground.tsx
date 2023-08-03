import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Link } from 'react-scroll';
// import ReactPlayer from 'react-player'
 import gif from './picslide.gif';


const AboutBackgroud = () => {
  const pdfUrl = 'https://drive.google.com/file/d/1VhneOOo9hIxKNEo5TNDH4jlnyAvEQkwb/view?usp=drive_link'; // Replace with the actual PDF URL

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    link.target = '_blank'; // Add this line for React Native web
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <View>
      <View
        style={{
          width: 1350,
          height: 650,
          backgroundColor: '#121212',
        }}>
        <View style={{flex:2, flexDirection:'row'}} >
        <View>
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=XpEttvg3R3U' width={500} height={400} /> */}
        <Image source={gif} style={styles.gif} />
        </View>
        <View style={{flex:1,flexDirection:'column'}}>
          <Text style={styles.text1} id="aboutSection">About Me</Text>
          <Text style={styles.text2}>For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer. At the moment, this journey has brought me to Cloud Academy in Mendrisio, Switzerland where I am a full-time Product Designer. In this position, as with freelance, I am working remotely and I have been for approximately two years.</Text>
          <Text style={styles.text2}>For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer. At the moment, this journey has brought me to Cloud Academy in Mendrisio, Switzerland where I am a full-time Product Designer. In this position, as with freelance, I am working remotely and I have been for approximately two years.</Text>
          <View style = {{flex:1, flexDirection:'row', marginLeft: 100, marginTop: 40}}>
            <TouchableOpacity style={styles.button1} >
            <Link activeClass="active"
              to="contactSection" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500}
            >
              <Text style={styles.buttonText1}>H I R E  M E</Text>
            </Link>
            </TouchableOpacity>
            <View style = {{marginLeft:30}}>
              <TouchableOpacity style={styles.button2} onPress={handleDownloadPDF}>
                <Text style={styles.buttonText2}>D O W N L O A D  C V</Text>
              </TouchableOpacity>
            </View>
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
    marginLeft: 300,
    marginTop:20,
    marginBottom:30,

  },

  text2: {
    color: '#B0A7A9',
    marginLeft: 100,
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

  gif: {
        width: 550,
        height: 430,
        marginLeft:100,
        marginTop:90,
        borderRadius: 20,
      },

});



export default AboutBackgroud;
