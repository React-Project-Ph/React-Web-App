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
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Link } from 'react-scroll';

// const App: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.navBar}>
//         <TouchableOpacity>
//           <Link activeClass="active"
//             to="aboutSection" 
//             spy={true}
//             smooth={true}
//             offset={-70} 
//             duration={500}
//           >
//             <Text style={styles.navBarItem}>About</Text>
//           </Link>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.content}>
//         <Text>Content goes here. </Text>
//       </View>

//       {/* The "about me" section with ID "aboutSection" */}
//       <View style={styles.aboutSection} id="aboutSection">
//         <Text style={styles.sectionText}>This is the about me section</Text>
//       </View>      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
//   navBar: {
//     height: 50,
//     backgroundColor: '#333',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   navBarItem: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   content: {
//     padding: 20,
//   },
//   aboutSection: {
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   sectionText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default App;













