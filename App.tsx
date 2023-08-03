import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import BgColor from './component/home-page-layer/bgcolor';
import myImage from './assets/mainImage.png'; 
import AboutBackgroud from './component/about-me-layer/aboutBackground';
import ContactBackground from './component/contact-page-layer/contactBackground'
import SkillBackground from './component/skillBackground';
import ProjectBackground from './component/projectBackground';
import EndpageBackground from './component/endpageBackground';



const App = () => {
  return (
      <View>
        <View style = {{flex:2, flexDirection:'row'}}>
          <BgColor/>
          <View style={styles.container}>
              <Image source={myImage} style={styles.image} />
          </View>
        </View>
        <AboutBackgroud/>
        <SkillBackground/>
        <ProjectBackground/>
        <ContactBackground/>
        <EndpageBackground/>
      </View>
    
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    
  },

  image: {
    marginTop: 120,
    width: 400,
    height: 480,
    borderRadius: 66,
    marginRight:600,
  },
});






// // import React from 'react';
// // import { View, StyleSheet } from 'react-native';
// // import vid from './assets/video.mp4';
// // import Video from 'react-native-video';

// // const App: React.FC = () => {
// //   // const videoUrl = 'https://drive.google.com/drive/u/0/my-drive'; // Replace with your Google Drive video URL

// //   return (
// //     <View style={styles.container}>
// //       {/* <VideoPlayer videoUrl={videoUrl} /> */}
// //       <Video
// //         source={vid} // Replace 'your_video.mp4' with your video file's name and path
// //         style={{ flex: 1 }}
// //         resizeMode="contain"
// //         controls={true} // Set to false if you don't want to display video controls
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// // });

// // export default App;


// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';
// import gif from './assets/stdy.gif'; // Replace with the correct path to your GIF file

// const App: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Image source={gif} style={styles.gif} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gif: {
//     width: 200,
//     height: 200,
//   },
// });

// export default App;


// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// const App: React.FC = () => {
//   const pdfUrl = 'https://drive.google.com/file/d/1VhneOOo9hIxKNEo5TNDH4jlnyAvEQkwb/view?usp=drive_link'; // Replace with the actual PDF URL

//   const handleDownloadPDF = () => {
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = 'downloaded-file.pdf';
//     link.target = '_blank'; // Add this line for React Native web
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={handleDownloadPDF}>
//         <Text style={styles.buttonText}>Download PDF</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 18,
//     color: 'blue',
//   },
// });

// export default App;


// import React from 'react'
// import ReactPlayer from 'react-player'
// import { View, StyleSheet } from 'react-native';

// const App: React.FC = () => {
//   // const videoUrl = 'https://drive.google.com/drive/u/0/my-drive'; // Replace with your Google Drive video URL

//   return (
//     <View style={styles.container}>
//       <ReactPlayer url='https://www.youtube.com/watch?v=XpEttvg3R3U' />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;











