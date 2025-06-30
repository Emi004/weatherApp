import { SafeAreaView, StyleSheet, Text } from "react-native";

export function StatusPill({text,color}) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>
        {text?.split(",")[0] ?text.split(",")[0] : text}
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "70%",
    height: "15%",
    borderRadius: 1000,
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
