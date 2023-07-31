import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const TextInputExample: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handleSubjectChange = (text: string) => {
    setSubject(text);
  };

  const handleMessageChange = (text: string) => {
    setMessage(text);
  };

  return (
    <View style={{flex: 2, flexDirection: 'column'}}>
        <View style={{marginLeft: 200, marginTop: 100 }}>
                <View style = {{flex:1, flexDirection: 'row'}}>
                    <TextInput
                        style={styles.input1}
                        value={name}
                        onChangeText={handleNameChange}
                        placeholder="Your Name"
                        placeholderTextColor="#b7b6aa" 
                        
                    />

                    <View style = {{marginLeft:10}}>
                        <TextInput
                            style={styles.input1}
                            value={email}
                            onChangeText={handleEmailChange}
                            placeholder="Your E-Mail"
                            keyboardType="email-address" 
                            placeholderTextColor="#b7b6aa"
                        />
                    </View>
                </View>

            <TextInput
                style={styles.input2}
                value={subject}
                onChangeText={handleSubjectChange}
                placeholder="Subject"
                placeholderTextColor="#b7b6aa"
            />

            <TextInput
                style={styles.input3}
                value={message}
                onChangeText={handleMessageChange}
                placeholder="Message"
                placeholderTextColor="#b7b6aa"
            />

            <View style={{marginLeft:400, marginTop: 20}}>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>S E N D  M E S S A G E</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  input1: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 30, 
  },

  input2: {
    width: 610,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 30, 
  },

  input3: {
    width: 610,
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 30, 
  },

  button: {
    width: 200,
    height: 46,
    borderRadius: 21,
    backgroundColor: '#325AE8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 51,
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },


});

export default TextInputExample;
