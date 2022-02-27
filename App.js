import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View>
        <Image 
          style={styles.logo}
          source={require('./img/2.png')}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
      
          style={styles.input}
          placeholder= 'Senha'
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.btnCriar}
        >
          <Text>Criar Conta</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  logo:{
     marginTop:80,
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    width: '90%'
  },
  input:{
    backgroundColor: '#ccc',
    width:'90%',
    marginBottom:15,
    color: '#fff',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit:{
    backgroundColor: '#0f0',
     width: '90%',
     height:50,
     borderRadius: 7,
     alignItems: 'center',
     justifyContent:'center',
     marginBottom: 5
  },
  btnCriar:{
    backgroundColor: '#00BFFF',
     width: '90%',
     height:50,
     borderRadius: 7,
     alignItems: 'center',
     justifyContent:'center'
  }
});















