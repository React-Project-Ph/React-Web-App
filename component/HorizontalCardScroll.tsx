import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import myImage from '../assets/react.png'; 


const HorizontalCardScroll: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <View style = {{flex:1, flexDirection:'column'}}>
            <Image source={myImage} style={styles.image} />
            <Text style={styles.title}>Card1</Text>
            <Text style={styles.description}>This is Card 1 description.</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Card 2</Text>
          <Text style={styles.description}>This is Card 2 description.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Card 3</Text>
          <Text style={styles.description}>This is Card 3 description.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Card 3</Text>
          <Text style={styles.description}>This is Card 3 description.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Card 3</Text>
          <Text style={styles.description}>This is Card 3 description.</Text>
        </View>
      
        
        {/* Add more cards as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    //backgroundColor: '#f2f2f2',
  },

  image: {
    //marginTop: 70,
    width: 100,
    height: 100,
    borderRadius: 66,
    marginLeft:30,
  },

  card: {
    width: 300,
    height: 400,
    backgroundColor: '#BAC964',
    borderRadius: 15,
    padding: 16,
    //margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginLeft: 100,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    alignContent: 'center'
  
  },
  description: {
    fontSize: 16,
  },
});

export default HorizontalCardScroll;
