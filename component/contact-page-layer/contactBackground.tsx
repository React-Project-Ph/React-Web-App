import React from 'react';
import {View } from 'react-native';
import TextInputExample from './TextInputExample';
import ContactText from './contactText';




const ContactBackground = () => {
  return (
    <View>
      <View style={{width: 1350, height: 600, backgroundColor: '#121212',}}>
            <View style={{flex:2,flexDirection:'row'}}>
              <ContactText/>
              <TextInputExample/>
            </View>
                
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   baseText: {
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 37,
//     marginLeft: 54,
//   },

// });

export default ContactBackground;
