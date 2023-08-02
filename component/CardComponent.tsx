import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import reactImage from '../assets/react.png'; 
import pythonImage from '../assets/python.png'; 
import CImage from '../assets/C++.png'; 
import cssImage from '../assets/css.png'; 
import htmlImage from '../assets/hmtl.png'; 
import javaImage from '../assets/java.png'; 
import mongodbImage from '../assets/mongodb.png'; 
import mysqlImage from '../assets/mysql.png'; 
import nodeImage from '../assets/node.png'; 


const CardComponent: React.FC = () => {
  return (
    <View>
        <View style={styles.card2}>
         <ScrollView>
           <View style={styles.card1}>
              <View style = {{flex:2, flexDirection:'row'}}>
                <Image source={reactImage} style={styles.image} />
                <View style = {{flex:1, flexDirection:'row'}}>
                  <Text style={styles.title}>React Native</Text>
                  <Text style={styles.description}> 90 %</Text> 
                </View>
              </View>
           </View>

           <View style={styles.card1}>
              <View style = {{flex:2, flexDirection:'row'}}>
                <Image source={htmlImage} style={styles.image} />
                <View style = {{flex:1, flexDirection:'row'}}>
                  <Text style={styles.title}>HTML</Text>
                  <View style={{marginLeft:50}}>
                  <Text style={styles.description}> 98 %</Text> 
                  </View>
                </View>
              </View>
           </View>

           <View style={styles.card1}>
              <View style = {{flex:2, flexDirection:'row'}}>
                <Image source={CImage} style={styles.image} />
                <View style = {{flex:1, flexDirection:'row'}}>
                  <Text style={styles.title}>C++ </Text>
                  <View style={{marginLeft:70}}>
                  <Text style={styles.description}> 80 %</Text> 
                  </View>
                </View>
              </View>
           </View>

           <View style={styles.card1}>
              <View style = {{flex:2, flexDirection:'row'}}>
                <Image source={javaImage} style={styles.image} />
                <View style = {{flex:1, flexDirection:'row'}}>
                  <Text style={styles.title}>Java </Text>
                  <View style={{marginLeft:70}}>
                  <Text style={styles.description}> 85 %</Text> 
                  </View>
                </View>
              </View>
           </View>

           <View style={styles.card1}>
              <View style = {{flex:2, flexDirection:'row'}}>
                <Image source={pythonImage} style={styles.image} />
                <View style = {{flex:1, flexDirection:'row'}}>
                  <Text style={styles.title}>python </Text>
                  <View style={{marginLeft:43}}>
                  <Text style={styles.description}> 85 %</Text> 
                  </View>
                </View>
              </View>
           </View>

           <View style={styles.card1}>
              <View style = {{flex:2, flexDirection:'row'}}>
                <Image source={cssImage} style={styles.image} />
                <View style = {{flex:1, flexDirection:'row'}}>
                  <Text style={styles.title}>CSS</Text>
                  <View style={{marginLeft:72}}>
                  <Text style={styles.description}> 80 %</Text> 
                  </View>
                </View>
              </View>
           </View>

           <View style={styles.card1}>
              <View style = {{flex:2, flexDirection:'row'}}>
                <Image source={nodeImage} style={styles.image} />
                <View style = {{flex:1, flexDirection:'row'}}>
                  <Text style={styles.title}>Node JS</Text>
                  <View style={{marginLeft:35}}>
                  <Text style={styles.description}> 75 %</Text> 
                  </View>
                </View>
              </View>
           </View>

           <View style={styles.card1}>
              <View style = {{flex:2, flexDirection:'row'}}>
                <Image source={mongodbImage} style={styles.image} />
                <View style = {{flex:1, flexDirection:'row'}}>
                  <Text style={styles.title}>Mongo DB</Text>
                  <View style={{marginLeft:15}}>
                  <Text style={styles.description}> 80 %</Text> 
                  </View>
                </View>
              </View>
           </View>

           <View style={styles.card1}>
              <View style = {{flex:2, flexDirection:'row'}}>
                <Image source={mysqlImage} style={styles.image} />
                <View style = {{flex:1, flexDirection:'row'}}>
                  <Text style={styles.title}>Mysql DB</Text>
                  <View style={{marginLeft:20}}>
                  <Text style={styles.description}> 90 %</Text> 
                  </View>
                </View>
              </View>
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
    height: 60,
   // borderRadius: 66,
    marginLeft:20,
  },

  card1: {
    width: 420,
    height: 80,
    backgroundColor: '#D1F2EB',
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
    height: 400,
    marginTop: 30,
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
    fontFamily: 'Poppins',
    fontSize: 22,
    fontWeight: 'bold',
    //marginBottom: 8,
    marginLeft:40,
    marginTop:14
    
  },

  description: {
    fontFamily: 'Poppins',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft:40,
    marginTop:14
    
  
  },
});

export default CardComponent;
