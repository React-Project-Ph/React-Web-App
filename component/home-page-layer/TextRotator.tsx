import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextRotator: React.FC = () => {
  const textList = ['Web Designer & Developer', 'UI/UX Designer & Developer', 'Printed Circut Board Designer', 'Circuit Designer & Researcher', 'IOT System Developer', 'Full Stack Web Developer', 'ML Algorithem Designer'];
  const [displayText, setDisplayText] = useState(textList[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textList.length);
    }, 2000); // Change text every 2 seconds (2000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayText(textList[index]);
  }, [index, textList]);

  return (
    <View style={styles.container}>
      <Text style={styles.text3}>{displayText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text3: {
    color: '#E1D9D9',
    fontFamily: 'Poppins',
    fontSize: 32,
    fontWeight: '500',
    marginLeft: 200,
    marginTop:15,
  },

});

export default TextRotator;