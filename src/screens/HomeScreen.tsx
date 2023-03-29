import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  SectionList,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { WeatherRow } from "../components";
import { Colors } from "../constants";
import { RootState } from "src/store/initialState";
import { Creators } from "../store/actions";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const weather = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    dispatch(Creators.fetchWeatherForecast(16));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={weather.weatherDatesByWeek}
        keyExtractor={(item, index) => JSON.stringify(item) + index}
        renderItem={({ item: date }) => {
          const rowData = weather.weatherByDate[date];
          return (
            <WeatherRow
              date={rowData.date}
              humidity={rowData.humidity}
              nightTemperature={rowData.nightTemperature}
              windSpeed={rowData.windSpeed}
              iconUrl={rowData.iconUrl}
              dayName={rowData.dayName}
              dayTemperature={rowData.dayTemperature}
            ></WeatherRow>
          );
        }}
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
