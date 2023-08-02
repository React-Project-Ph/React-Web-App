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







// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// import VideoPlayer from './VideoPlayer';

// const App: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <VideoPlayer />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2',
//   },
// });

// export default App;







