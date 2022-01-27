import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Full Name" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 41,

    margin: 12,
    padding: 10,
    width: "80%",
    backgroundColor: "#C4C4C4",
    borderRadius: 8,
  },
});
