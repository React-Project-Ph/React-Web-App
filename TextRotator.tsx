import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextRotator: React.FC = () => {
  const textList = ['Web Developer', 'UI/UX Designer', 'Backend'];
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
      <Text style={styles.text}>{displayText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default TextRotator;