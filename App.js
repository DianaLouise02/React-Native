import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScroolView, ScrollView } from 'react-native';
import Prime from './src/Telas/Prime';
import Texto from './src/Components/Texto';
import Contador from './src/Components/Contador';
import Status from './src/Components/Status';
import CadNews from './src/Components/CadNews';

export default function App() {
  return (
    <ScrollView>
    <Prime />
    <Texto />
    <CadNews />
    <Contador />
    <Status />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

//ScrollView -> Rolagem da página


