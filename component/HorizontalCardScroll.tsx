import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import powersocketImage from '../assets/powersocket.png';
import medicalboxImage from '../assets/medicalbox.png';
import medifamilyImage from '../assets/medifamily.png';
import poweradapterImage from '../assets/poweradapter.png';


const HorizontalCardScroll: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <View style = {{flex:1, flexDirection:'column'}}>
            <Image source={medicalboxImage} style={styles.image} />
            <Text style={styles.title}>Dementia Patients smart Medical Box</Text>
            <Text style={styles.description}>This is Card 1 description. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Text>
            <Text style={{fontSize:16, fontFamily:'Roboto', marginLeft:90, marginTop:15, color: '#B2C251'}}>Learn More  {'>'}</Text>
          </View>
        </View>
       
        <View style={styles.card}>
          <View style = {{flex:1, flexDirection:'column'}}>
            <Image source={medifamilyImage} style={styles.image} />
            <Text style={styles.title}>Medi-Family Android Based App</Text>
            <Text style={styles.description}>This is Card 1 description. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Text>
            <Text style={{fontSize:16, fontFamily:'Roboto', marginLeft:90, marginTop:15, color: '#B2C251'}}>Learn More  {'>'}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style = {{flex:1, flexDirection:'column'}}>
            <Image source={powersocketImage} style={styles.image} />
            <Text style={styles.title}>IOT Based Smart Power Socket</Text>
            <Text style={styles.description}>This is Card 1 description. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Text>
            <Text style={{fontSize:16, fontFamily:'Roboto', marginLeft:90, marginTop:15, color: '#B2C251'}}>Learn More  {'>'}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style = {{flex:1, flexDirection:'column'}}>
            <Image source={poweradapterImage} style={styles.image} />
            <Text style={styles.title}>IOT Based Smart Power Socket</Text>
            <Text style={styles.description}>This is Card 1 description. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Text>
            <Text style={{fontSize:16, fontFamily:'Roboto', marginLeft:90, marginTop:15, color: '#B2C251'}}>Learn More  {'>'}</Text>
          </View>
        </View>
    
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },

  image: {
    //marginTop: 70,
    width: 120,
    height: 120,
    borderRadius: 66,
    marginLeft:90,
    marginBottom:30,
  },

  card: {
    width: 320,
    height: 450,
    backgroundColor: '#333333',
    borderRadius: 15,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginLeft: 60,

  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: 'Poppins',
    color:'#DEF2CA',
    marginLeft:10,
    marginRight:10,
    textAlign:'center',
    
  },
  description: {
    fontSize: 17,
    fontFamily: 'Poppins',
    //color:'#6F7F77',
    textAlign:'justify',
    marginLeft: 10,
    color: '#CACFD2'

  },
});

export default HorizontalCardScroll;
