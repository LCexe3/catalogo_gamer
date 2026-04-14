import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";
import { View, Text } from "react-native";

export default function Tab() {
  return (
    <View style={styles.centralizado}>
      <Ionicons name="car-sport-outline" size={180} color="#00ff66" />
      <Text style={styles.tituloGrande}>GTA V</Text>
      <Text style={styles.texto}>
        Explore a cidade e complete grandes missões.
      </Text>
    </View>
  );
}