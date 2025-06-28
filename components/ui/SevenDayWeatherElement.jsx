import { SafeAreaView } from "react-native";
export function SevenDayWeatherElement({
  width,
  height,
  weather,
  currentTime,
}) {
  return (
    <SafeAreaView
      style={{
        width: width * 0.4,
        height: height * 0.9,
        backgroundColor: "rgba(186, 172, 239, 0.25)",
        borderRadius: 10,
      }}
    ></SafeAreaView>
  );
}
