import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.centralizado}>
      <Ionicons name="play" size={200} color="rgb(42, 112, 218)"/>
      <Text style = {{fontSize: 40,fontWeight:700}}>Cursos</Text>
      <Text style = {{fontSize: 20,fontWeight:700}}>Vire um veterinario agora mesmo!</Text>
    </View>
  );
}