import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import { icons } from "../../constants/CharacteristicIcons";
import { ColorWeather } from "../../constants/ColorWeather";
import { WeatherCode } from "../../constants/WeatherCode";
import { StatBubble } from "./StatBubble";
import { StatusPill } from "./StatusPill";

const { width, height } = Dimensions.get("window");

export function WeatherCard(props) {
  const weatherInfo = WeatherCode[props.weather?.current_weather.weathercode];
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const keys = [
    "winddirection",
    "windspeed",
    "uv_index",
    "relative_humidity_2m",
  ];

  useEffect(() => {
    const getState = async () => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${props.weather.latitude}&lon=${props.weather.longitude}`,
        {
          headers: {
            "User-Agent": "MyWeatherApp/1.0 aenoaeiemi49@gmail.com",
          },
        }
      );
      const data = await response.json();
      setState(data.address.state || data.address.county);
      setCity(data.address.city);
    };
    getState();
  }, [props.weather.latitude, props.weather.longitude]);

  const getUVIndex = (time) => {
    const index = props.weather.hourly.time.indexOf(time);
    if (index === -1) return null;
    return props.weather.hourly.uv_index[index];
  };
  const getHumidity = (time) => {
    const index = props.weather.hourly.time.indexOf(time);
    if (index === -1) return null;
    return props.weather.hourly.relative_humidity_2m[index];
  };

  return (
    <SafeAreaView
      style={{
        width: width * 0.93,
        height: height * 0.25,
        backgroundColor: "rgba(186, 172, 239, 0.25)",
        marginTop: 20,
        borderRadius: 20,
      }}
    >
      <SafeAreaView style={styles.innerContainer}>
        <Image
          source={weatherInfo.img}
          style={{ width: "30%", height: "60%" }}
        />
        <SafeAreaView style={styles.rightContainer}>
          <SafeAreaView style={styles.textRow}>
            <SafeAreaView style={styles.locationContainer}>
              <Text style={[styles.text, styles.header]}>{state}</Text>
              <Text style={styles.text}>{city}</Text>
            </SafeAreaView>
            <Text style={[styles.text, styles.temperature]}>
              {Math.round(props.weather.current_weather.temperature)}
              {props.weather.current_weather_units.temperature}
            </Text>
          </SafeAreaView>
          <StatusPill
            text={weatherInfo.weather}
            color={ColorWeather[weatherInfo.intensity]}
          />
          <SafeAreaView style={styles.grid}>
            {keys.map((key) => (
              <StatBubble
                key={key}
                label={key}
                value={
                  props.weather.current_weather[key] ||
                  (key === "uv_index" && getUVIndex(props.time)) ||
                  (key === "relative_humidity_2m" && getHumidity(props.time))
                }
                unit={
                  props.weather.current_weather_units[key] ||
                  props.weather.hourly_units[key]
                }
                img={icons[key]?.img}
                style={styles.grid_item}
              />
            ))}
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 8,
  },
  rightContainer: {
    width: "70%",
    height: "80%",
    paddingRight: 20,
  },
  textRow: {
    height: "30%",
    flexDirection: "row",
    gap: 0,
  },
  locationContainer: {
    flex: 1,
  },
  text: {
    color: "rgb(184, 172, 239)",
    fontSize: 12,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  temperature: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "right",
  },
  grid: {
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    height: "80%",
    width: "100%",
  },
  grid_item: {
    marginRight: 10,
    marginBottom: 10,
  },
});
