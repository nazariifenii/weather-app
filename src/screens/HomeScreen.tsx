import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { WeatherRow } from "../components";
import { Colors } from "../constants";
import { RootState } from "src/store/initialState";
import { Creators } from "../store/actions";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const weatherByWeek: WeatherDataByWeek[] = useSelector(
    (state: RootState) => state.weather.weatherForecastByWeek
  );

  useEffect(() => {
    dispatch(Creators.fetchWeatherForecast(16));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={weatherByWeek}
        keyExtractor={(item, index) => JSON.stringify(item) + index}
        renderItem={({ item }) => (
          <WeatherRow
            humidity={item.humidity}
            nightTemperature={item.nightTemperature}
            windSpeed={item.windSpeed}
            iconUrl={item.iconUrl}
            dayName={item.dayName}
            dayTemperature={item.dayTemperature}
          ></WeatherRow>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    paddingHorizontal: 16,
    fontSize: 32,
    backgroundColor: Colors.whiteColor,
  },
});

export default HomeScreen;
