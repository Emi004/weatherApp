import { useState } from "react";
import { Image, SafeAreaView, Text } from "react-native";
import { ColorWeather } from "../../constants/ColorWeather";
import { WeatherCode } from "../../constants/WeatherCode";
import { StatusPill } from "./StatusPill";

export function SevenDayWeatherElement({
  width,
  height,
  weather,
  currentTime,
}) {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const indexUV = (time) => {
    return weather?.daily.time.indexOf(time?.split("T")[0] || time);
  };
  const dayName = new Date(currentTime).toLocaleDateString("en-US", {
    weekday: "long",
  });
  const currentDate = new Date().toISOString().split("T")[0];
  const weatherInfo =
    WeatherCode[weather?.daily.weathercode[indexUV(currentTime)]];
  return (
    <SafeAreaView
      style={{
        width: width * 0.4,
        height: height * 0.9,
        backgroundColor: "rgba(186, 172, 239, 0.25)",
        borderRadius: 10,
        flex: 1,
        alignItems: "center",
      }}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setContainerSize({ width, height });
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          color: "#rgb(184, 172, 239)",
          textAlign: "center",
        }}
      >
        {currentTime === currentDate ? "TODAY" : dayName.toUpperCase()}
        {"\n"}
        <Text
          style={{ fontSize: 12, fontWeight: "normal", textAlign: "center" }}
        >
          {currentTime.substring(5)}
        </Text>
      </Text>
      <Image
        source={weatherInfo?.img}
        style={{
          width: containerSize.width * 0.7,
          height: containerSize.height * 0.45,
        }}
      />
      <StatusPill
        text={weatherInfo?.weather}
        color={ColorWeather[weatherInfo?.intensity]}
      />
      <SafeAreaView
        style={{
          width: "100%",
          height: "25%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingBottom: 0,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            color: "#rgb(184, 172, 239)",
          }}
        >
          {Math.round(weather?.daily.temperature_2m_max[indexUV(currentTime)])}
          {weather?.current_weather_units.temperature}
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            color: "#rgb(184, 172, 239)",
          }}
        >
          {`${weather?.daily.uv_index_max[indexUV(currentTime)]}`.substring(
            0,
            3
          )}
          {weather?.daily_units.uv_index_max}
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
