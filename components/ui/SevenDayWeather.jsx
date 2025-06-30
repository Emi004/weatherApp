import { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { SevenDayWeatherElement } from "./SevenDayWeatherElement";
const { width, height } = Dimensions.get("window");

export function SevenDayWeather({ weather, currentTime }) {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  return (
    <ScrollView
      horizontal={true}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setContainerSize({ width, height });
      }}
      style={{
        width: width * 0.93,
        height: height * 0.33,
        backgroundColor: "transparent",
        marginTop: 20,
        borderRadius: 20,
      }}
      contentContainerStyle={{
        alignItems: "center",
        gap: width * 0.05,
        padding: 15,
        overflow: "hidden",
      }}
    >
      {weather?.daily?.time.slice(0, 7).map((day, index) => (
        <SevenDayWeatherElement
          key={index}
          weather={weather}
          currentTime={day}
          height={containerSize.height}
          width={containerSize.width}
        />
      ))}
    </ScrollView>
  );
}
