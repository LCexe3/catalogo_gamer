import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View style={styles.centralizado}>
      <Ionicons name="cube-outline" size={180} color="#00ff99" />
      <Text style={styles.tituloGrande}>Minecraft</Text>
      <Text style={styles.texto}>
        Construa mundos infinitos e sobreviva à noite.
      </Text>
    </View>
  );
}