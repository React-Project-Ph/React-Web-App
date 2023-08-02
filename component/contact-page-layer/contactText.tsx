import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';


const ContactText: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1} id="contactSection">Contact Me</Text>
        <View>
        <Text style={styles.text2}>Address</Text>
        <Text style={styles.text3}>No: 294, Minuwangoda  Rd,  Asgiriya,  Gampaha.</Text>
        </View>

        <View>
        <Text style={styles.text2}>E-Mail</Text>
        <Text style={styles.text3}>viduminarm@gmail.com</Text>
        </View>

        <View>
        <Text style={styles.text2}>Phone</Text>
        <Text style={styles.text3}>+9476-8013609</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  text1: {
    color: '#EDE4E4',
    fontFamily: 'Baloo Paaji',
    fontSize: 40,
    fontWeight: '700',
    marginLeft: 150,
    marginBottom: 30,
    
  },

  text2: {
    color: '#EDE4E4',
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 90,
    marginTop:40,
  },

  text3: {
    color: '#EDE4E4',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 100,
    marginTop:20,
  },

});

export default ContactText;