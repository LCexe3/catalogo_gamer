import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";
import { View, Text } from 'react-native';

export default function Tab() {
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
        name="rocket-outline"
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
        🚀 MISSÕES
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        Evolua seu nível e desbloqueie conhecimento gamer 🎮
      </Text>
    </View>
  );
}