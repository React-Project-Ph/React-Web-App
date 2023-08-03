import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const embeddedUrl = videoUrl.replace('/view', '/preview');

  return (
    <View style={styles.container}>
      <WebView
        allowsInlineMediaPlayback
        javaScriptEnabled
        source={{ uri: embeddedUrl }}
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
});

export default VideoPlayer;
