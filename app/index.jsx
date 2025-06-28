import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, Text } from "react-native";
import { SevenDayWeather } from "../components/ui/SevenDayWeather";
import { WeatherCard } from "../components/ui/WeatherCard";
import { useThemeColor } from "../hooks/useThemeColor";

export default function BlankScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentTime, setCurrentTime] = useState();

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});

    setLocation(location);
    return location;
  };
  const fetchWeather = async (location) => {
    if (!location) return;
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&current_weather=true&hourly=uv_index,relative_humidity_2m`
    );
    const data = await response.json();
    setWeather(data);
    setCurrentTime(
      data.current_weather.time
        ? `${data.current_weather.time.split(":")[0]}:00`
        : ""
    );
  };
  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor }}
      contentContainerStyle={{ alignItems: "center" }}
      refreshControl={
        <RefreshControl
          progressBackgroundColor={"rgb(184, 172, 239)"}
          colors={["#3e3b4d"]}
          refreshing={!weather}
          onRefresh={async () => {
            let loc = await getLocation();
            if (loc) {
              await fetchWeather(loc);
            }
          }}
        />
      }
    >
      <Text style={[styles.text, styles.header, { marginTop: 50 }]}>
        WEATHER
      </Text>
      {errorMsg ? (
        errorMsg
      ) : weather ? (
        <WeatherCard weather={weather} time={currentTime} />
      ) : (
        "Fetching weather..."
      )}
      <Text style={[styles.text, styles.header, { marginTop: 50 }]}>
        7-DAY FORECAST
      </Text>
      <SevenDayWeather weather={weather} currentTime={currentTime} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 5,
  },
  text: {
    color: "rgb(184, 172, 239)",
    fontSize: 15,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
