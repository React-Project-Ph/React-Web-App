import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HorizontalCardScroll from './HorizontalCardScroll';


const ProjectBackground = () => {
  return (
    <View>
      <View style={{width: 1350, height: 650, backgroundColor: '#121212' }}>
        <View >
               <Text style={styles.text1}>My Projects</Text>
        </View> 
        <View style = {{marginTop:50}}>
            <HorizontalCardScroll/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    text1: {
        color: '#EDE4E4',
        fontFamily: 'Baloo Paaji',
        fontSize: 40,
        fontWeight: '700',
        marginLeft: 700,
        //marginTop:20,
        marginBottom:10,
    },

});

export default ProjectBackground;
