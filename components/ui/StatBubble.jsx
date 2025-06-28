import { Image, SafeAreaView, StyleSheet, Text } from "react-native";

export function StatBubble(props) {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      <Image
        source={props.img}
        style={[
          styles.img,
          props.label === "winddirection" && {
            transform: [{ rotate: `${props.value}deg` }],
          },
        ]}
      />
      <Text style={styles.text}>
        {props.value}
        {props.unit}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "45%",
    height: "25%",
    backgroundColor: "rgb(184, 172, 239)",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  img: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  text: {
    color: "#3e3b4d",
    fontSize: 12,
    fontWeight: "600",
  },
});
