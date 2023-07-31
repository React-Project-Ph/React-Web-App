import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import BgColor from './component/home-page-layer/bgcolor';
import myImage from './assets/mainImage.png'; 
import AboutBackgroud from './component/about-me-layer/aboutBackground';
import ContactBackground from './component/contact-page-layer/contactBackground'
import SkillBackground from './component/skillBackground';
import ProjectBackground from './component/projectBackground';



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
// import { View, Image, StyleSheet } from 'react-native';
// import myImage from './assets/mainImage.png'; 

// const MyComponent = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={myImage} style={styles.image} 
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     display:'flex',
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'row',
    
//   },

//   image: {
//     marginTop: 120,
//     width: 400,
//     height: 480,
//     borderRadius: 66,
//     marginRight:600,
//   },
// });

// export default MyComponent;




// import React from 'react';
// import { View } from 'react-native';
// import TextRotator from './TextRotator';

// const App: React.FC = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <TextRotator />
//     </View>
//   );
// };

// export default App;




// import React from 'react';
// import { View } from 'react-native';
// import CardComponent from './CardComponent';

// const App: React.FC = () => {
//   return (
//     <View >
//         <CardComponent />
//         <CardComponent /> 
//     </View>
//   );
// };


// export default App;




// import React from 'react';
// import { View } from 'react-native';
// import HorizontalCardScroll from './component/HorizontalCardScroll';

// const App: React.FC = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <HorizontalCardScroll />
//     </View>
//   );
// };

// export default App;
