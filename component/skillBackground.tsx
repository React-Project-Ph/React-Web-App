import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CardComponent from './CardComponent';



const SkillBackground = () => {

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
      <View style={{ width: 1350, height: 600, backgroundColor: '#121212'}}>
            <View >
               <Text style={styles.text1} id="skillSection">My Skills</Text>
            </View> 
            <View style={{flex:2, flexDirection:'row'}}>
              <View style={{flex:2,flexDirection:'column'}}>
                <Text style={styles.text2}>For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer. At the moment, this journey has brought me to Cloud Academy in Mendrisio, Switzerland where I am a full-time Product Designer. In this position, as with freelance, I am working remotely and I have been for approximately two years.</Text>
                <Text style={styles.text2}>For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer. At the moment, this journey has brought me to Cloud Academy in Mendrisio, Switzerland where I am a full-time Product Designer. In this position, as with freelance, I am working remotely and I have been for approximately two years.</Text>
                <View style = {{marginLeft:100, marginTop:30}}>
              <TouchableOpacity style={styles.button2} onPress={handleDownloadPDF}>
                <Text style={styles.buttonText2}>D O W N L O A D  C V</Text>
              </TouchableOpacity>
            </View>
              </View>
              <View>
                <CardComponent/>
              </View> 
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    
    image: {
        marginTop: 70,
        width: 150,
        height: 150,
        borderRadius: 66,
        marginLeft:70,
        
    },

    text1: {
        color: '#EDE4E4',
        fontFamily: 'Baloo Paaji',
        fontSize: 40,
        fontWeight: '700',
        marginLeft: 150,
        //marginTop:20,
        marginBottom:30
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

    text3: {
        color: '#E1D9D9',
        fontFamily: 'Poppins',
        fontSize: 32,
        fontWeight: '500',
        marginLeft: 100,
        //marginTop:5,
      },

      text4: {
        color: '#B2C251',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '500',
        marginLeft: 110,
        marginTop:5,
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

export default SkillBackground;
