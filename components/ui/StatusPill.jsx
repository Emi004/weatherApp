import { SafeAreaView, StyleSheet, Text } from "react-native";

export function StatusPill(props) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.text}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "70%",
    height: "15%",
    borderRadius:500,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  text: {
    color: "#3e3b4d",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
});
