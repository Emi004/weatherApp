import clear_sky from "../assets/images/clear_sky.png";
import light_rain from "../assets/images/light_rain.png";
import pouring from "../assets/images/pouring.png";
import snow from "../assets/images/snow.png";
import thunder from "../assets/images/Thunder.png";

export const WeatherCode = {
  0: { weather: "Clear sky", intensity: null, img: clear_sky },

  1: {
    weather: "Mainly clear, partly cloudy, and overcast",
    intensity: null,
    img: clear_sky,
  },
  2: {
    weather: "Mainly clear, partly cloudy, and overcast",
    intensity: null,
    img: clear_sky,
  },
  3: {
    weather: "Mainly clear, partly cloudy, and overcast",
    intensity: null,
    img: clear_sky,
  },

  45: {
    weather: "Fog and depositing rime fog",
    intensity: null,
    img: clear_sky,
  },
  48: {
    weather: "Fog and depositing rime fog",
    intensity: null,
    img: clear_sky,
  },

  51: { weather: "Drizzle", intensity: "Light", img: light_rain },
  53: { weather: "Drizzle", intensity: "Moderate", img: light_rain },
  55: { weather: "Drizzle", intensity: "Dense", img: light_rain },

  56: { weather: "Freezing Drizzle", intensity: "Light", img: light_rain },
  57: { weather: "Freezing Drizzle", intensity: "Dense", img: light_rain },

  61: { weather: "Rain", intensity: "Slight", img: pouring },
  63: { weather: "Rain", intensity: "Moderate", img: pouring },
  65: { weather: "Rain", intensity: "Heavy", img: pouring },

  66: { weather: "Freezing Rain", intensity: "Light", img: pouring },
  67: { weather: "Freezing Rain", intensity: "Heavy", img: pouring },

  71: { weather: "Snow fall", intensity: "Slight", img: snow },
  73: { weather: "Snow fall", intensity: "Moderate", img: snow },
  75: { weather: "Snow fall", intensity: "Heavy", img: snow },

  77: { weather: "Snow grains", intensity: null, img: snow },

  80: { weather: "Rain showers", intensity: "Slight", img: light_rain },
  81: { weather: "Rain showers", intensity: "Moderate", img: light_rain },
  82: { weather: "Rain showers", intensity: "Violent", img: light_rain },

  85: { weather: "Snow showers", intensity: "Slight", img: snow },
  86: { weather: "Snow showers", intensity: "Heavy", img: snow },

  95: {
    weather: "Thunderstorm",
    intensity: "Slight or moderate",
    img: thunder,
  },

  96: { weather: "Thunderstorm with hail", intensity: "Slight", img: thunder },
  99: { weather: "Thunderstorm with hail", intensity: "Heavy", img: thunder },
};
