import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";

export default function Index() {
  return (
    <View style={styles.centralizado}>
      <Ionicons name="tv" size={200} color="rgb(9, 32, 240)"/>
      <Text style = {{fontSize: 20,fontWeight:700}}>VideoAulas</Text>
    </View>
  );
}
