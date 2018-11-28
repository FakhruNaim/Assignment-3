/**

 * Sample React Native App

 * https://github.com/facebook/react-native

 *

 * @format

 * @flow

 */



import React, {Component} from 'react';

import {StyleSheet, Text,TextInput, View, Button} from 'react-native';





export default class App extends Component {



  constructor(){

    super();

    this.state = {
      word:'',
      wordCount:0,
      vowelCountt:0,
      consonantCountt:0

    }

  }

  analyzeWord = () => {



    var vowel = 'aAeEiIoOuU';                  
    var vowelCount = 0;
    var consonantCount = 0;

    let myString = this.state.word;     
    let wordLength = myString.length;             
    let split = myString.split('');                 

    this.setState({wordCount:wordLength}, ()=>{
      for(var i=0;i<wordLength;i++){
        if(vowel.indexOf(split[i])!== -1)
        {
          vowelCount++;
          this.setState({vowelCountt:vowelCount});
        }
        else 
        {
          consonantCount++;
          this.setState({consonantCountt:consonantCount});
        }

      }

    });

  }



  render() {

    return (

      <View style={styles.container}>

        <Text style={styles.welcome}>A Word Analyzer</Text>

        <Text></Text>

        <Text></Text>

        

        <View style={styles.buton}>

       
       <Text style={{paddingRight:60}}> Word </Text>
         <TextInput  style={styles.instructions} onChangeText={(word) => this.setState({word})} placeholder='type here'/>
        
         <Button color="#4286f4" onPress={this.analyzeWord} title='Analyze'/>

        </View>

        <View>

        <Text></Text>

       <Text style={{paddingRight:60}}>Word: {this.state.word}</Text>

        <Text>No of Vowels: {this.state.vowelCountt}</Text>

        <Text>No of Consonant: {this.state.consonantCountt}</Text>

        <Text style={styles.Character}>No of Characters: {this.state.wordCount}</Text>

        </View>

      </View>

    );

  }

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#F5FCFF',

  },

  welcome: {

    fontWeight:'bold',

    textAlign: 'center',

    margin: 10,

  },

  instructions: {



    width:100,

    borderWidth:1,

    textAlign: 'center',

    color: '#333333',

    marginBottom: 5,

  },

  buton:{

    flexDirection:'row',

    alignItems:'flex-start',

  },

 

});