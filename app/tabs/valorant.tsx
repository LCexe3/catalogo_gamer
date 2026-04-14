import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";
import { View, Text } from "react-native";

export default function Tab() {
  return (
    <View style={styles.centralizado}>
      <Ionicons name="locate-outline" size={180} color="#ff3355" />
      <Text style={styles.tituloGrande}>Valorant</Text>
      <Text style={styles.texto}>
        Mire certo, reaja rápido e domine o mapa.
      </Text>
    </View>
  );
}