import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import myImage from '../assets/react.png'; 

const CardComponent: React.FC = () => {
  return (
    <View>
        <View style={styles.card2}>
         <ScrollView>
           <View style={styles.card1}>
              <View style = {{flex:2, flexDirection:'row'}}>
                <Image source={myImage} style={styles.image} />
                <View style = {{flex:1, flexDirection:'column'}}>
                  <Text style={styles.title}>Card Title</Text>
                  <Text style={styles.description}>This is the card description.</Text> 
                </View>
              </View>
           </View>
           <View style={styles.card1}>
              <Text style={styles.title}>Card Title</Text>
              <Text style={styles.description}>This is the card description.</Text> 
           </View>
           <View style={styles.card1}>
              <Text style={styles.title}>Card Title</Text>
              <Text style={styles.description}>This is the card description.</Text> 
           </View>
           <View style={styles.card1}>
              <Text style={styles.title}>Card Title</Text>
              <Text style={styles.description}>This is the card description.</Text> 
           </View>
           <View style={styles.card1}>
              <Text style={styles.title}>Card Title</Text>
              <Text style={styles.description}>This is the card description.</Text> 
           </View>
           <View style={styles.card1}>
              <Text style={styles.title}>Card Title</Text>
              <Text style={styles.description}>This is the card description.</Text> 
           </View>
          </ScrollView> 
        </View> 
    </View>
  );
};

const styles = StyleSheet.create({

  image: {
    //marginTop: 70,
    width: 70,
    height: 70,
    borderRadius: 66,
    marginLeft:30,
  },

  card1: {
    width: 420,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  card2: {
    width: 500,
    height: 500,
    backgroundColor: '#333333',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginRight: 100,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default CardComponent;
