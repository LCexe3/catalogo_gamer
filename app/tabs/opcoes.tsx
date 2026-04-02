import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.centralizado}>
      <Ionicons name="list" size={200} color="rgb(42, 112, 218)"/>
      <Text style = {{fontSize: 40,fontWeight:700}}>Opções</Text>
      <Text style = {{fontSize: 20,fontWeight:700}}>Veja varias das nossas vacinas!</Text>
    </View>
  );
}