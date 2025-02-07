import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Abutton from './src/components/atoms/Abutton';
import OtypeNumber from './src/components/organisms/OtypeNumber';
// import Ainput from './src/components/atoms/Ainput';
import { useState } from 'react';
import Minputfield from './src/components/mollecules/Minputfield';
import OtypeMail from './src/components/organisms/OtypeMail';
import  Colors  from './src/styles/colors';
import Parameters from './src/styles/param';

export default function App() {

  const [text, setText] = useState('');
  const [number, onChangeNumber ] = useState('');
  const numberchange = (text) => {
      const numericValue = text.replace(/[^0-9]/g, "");
      onChangeNumber(numericValue);
      }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Minputfield label="Eto texte:" placeholder="texte tsotra" value={ text } onChangeText={setText}/>
      <OtypeNumber label="Entrrer un chiffre:" placeholder="entrer un chiffre" />
      <OtypeMail label="e-mail:" placeholder="entrer un chiffre" />
      {/* <Minputfield placeholder="mdp lesy" security={true}/>
      <Minputfield placeholder="mdp " security={true}/>
      <Minputfield placeholder="chiffre e" value={number} keyboardtype= "numeric" onChangeText={numberchange}/> */}
      <Abutton title={"Za bouton"} color={ Colors.my_black } buttonsize={Parameters.small_size}/>

      {/* <Ainput placeholder="" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
