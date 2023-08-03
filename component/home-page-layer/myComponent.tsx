import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'react-scroll';



class MyComponent extends Component {
  render() {
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
      <View style={styles.baseText} >
        <View style={{marginLeft:360}}>
          <TouchableOpacity>
            <Link activeClass="active"
              to="homeSection" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500}
            >
              <Text style={styles.baseText1}>Home</Text>
            </Link>
         </TouchableOpacity>
        </View>
        <View style={{marginLeft:50}}>
        <TouchableOpacity>
            <Link activeClass="active"
              to="aboutSection" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500}
            >
              <Text style={styles.baseText1}>About</Text>
            </Link>
         </TouchableOpacity>
        </View>
        <View style={{marginLeft:50}}>
        <TouchableOpacity>
            <Link activeClass="active"
              to="skillSection" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500}
            > 
              <Text style={styles.baseText1}>Skills</Text>
            </Link>
         </TouchableOpacity>
        </View>
        <View style={{marginLeft:50}}>
        <TouchableOpacity>
            <Link activeClass="active"
              to="projectSection" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500}
            >
              <Text style={styles.baseText1}>Project</Text>
            </Link>
         </TouchableOpacity>
        </View>
        <View style={{marginLeft:50}}>
        <TouchableOpacity>
            <Link activeClass="active"
              to="contactSection" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500}
            >
              <Text style={styles.baseText1}>Contact</Text>
            </Link>
         </TouchableOpacity>
        </View>
        <View style={{marginLeft:275, marginTop: -10}}>
        <TouchableOpacity style={styles.button} onPress={handleDownloadPDF}>
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