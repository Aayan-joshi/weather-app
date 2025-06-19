import { ForecastResponse } from "@/types/forecast";

export const getWeatherDetails = async (city: string) => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  if (!apiKey) {
    throw new Error("API key is not defined");
  }

  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data: WeatherApiResponse = await response.json();
  return data;
}

export const getWeatherForecast = async (city: string) => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    if (!apiKey) {
    throw new Error("API key is not defined");
    }
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=no&alerts=no`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch weather forecast data");
    }
    const data: ForecastResponse = await response.json();
    return data;
}

export const getCurrentTime = async (timezone: string) => {
  const response = await fetch(
    `https://worldtimeapi.org/api/timezone/${timezone}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch current time");
  }

  const data = await response.json();
  return data.datetime;
}
