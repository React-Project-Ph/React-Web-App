import React from 'react';
import { View, StyleSheet } from 'react-native';

interface GifDisplayProps {
  gifUrl: string;
}

const GifDisplay: React.FC<GifDisplayProps> = ({ gifUrl }) => {
  return (
    <View style={styles.container}>
      <img src={gifUrl} alt="GIF" style={styles.gif} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    width: 200,
    height: 200,
  },
});

export default GifDisplay;
