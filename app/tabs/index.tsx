import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";

export default function Index() {
  return (
    <View
      style={[
        styles.centralizado,
        {
          flex: 1,
          backgroundColor: '#0d0d0d',
          gap: 15
        }
      ]}
    >
      <Ionicons
        name="videocam-outline"
        size={180}
        color="#00ffcc"
      />

      <Text
        style={{
          fontSize: 34,
          fontWeight: '800',
          color: '#8a2be2',
          textShadowColor: '#8a2be2',
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 10
        }}
      >
        📺 STREAM ACADEMY
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        Assista conteúdos e suba de nível no game 🎮
      </Text>
    </View>
  );
}