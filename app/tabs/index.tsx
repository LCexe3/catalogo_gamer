import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";

export default function Index() {
  return (
    <View style={styles.centralizado}>
      <Ionicons name="tv" size={200} color="rgb(42, 112, 218)"/>
      <Text style = {{fontSize: 40,fontWeight:700}}>VideoAulas</Text>
      <Text style = {{fontSize: 20,fontWeight:700}}>Aprenda a educar seu cachorro!</Text>
    </View>
  );
}
