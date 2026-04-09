import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";
import { View, Text } from "react-native";

export default function Tab() {
  return (
    <View style={styles.centralizado}>
      <Ionicons name="flash-outline" size={180} color="#00ccff" />
      <Text style={styles.tituloGrande}>Fortnite</Text>
      <Text style={styles.texto}>
        Sobreviva, construa e seja o último jogador vivo.
      </Text>
    </View>
  );
}