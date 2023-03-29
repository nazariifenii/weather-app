import React, { useState, useEffect, useMemo, useRef } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { useDispatch, useSelector } from "react-redux";
import BottomSheet from "@gorhom/bottom-sheet";
import moment from "moment";
import { DATE_FORMAT, FORECAST_DAYS_COUNT } from "@env";

import { Creators } from "../store/actions";
import { Colors } from "../constants";
import { RootState } from "src/store/initialState";
import { WeatherRow } from "../components";
import { formatDate } from "../utils/date";

const HomeScreen: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const [selectedDate, setSelectedDate] = useState("");
  const [dateNow] = useState(formatDate());

  const dispatch = useDispatch();
  const weather = useSelector(
    (state: RootState) => state.weather.weatherByDate
  );

  const rowData = weather[selectedDate];

  useEffect(() => {
    dispatch(Creators.fetchWeatherForecast(16));
  }, []);

  const onDayPress = (date: DateData) => {
    setSelectedDate(formatDate(date.dateString));
    bottomSheetRef.current?.expand();
  };

  const forecastLastDate = moment(dateNow)
    .add(FORECAST_DAYS_COUNT - 1, "days")
    .format(DATE_FORMAT);

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        firstDay={1}
        style={styles.calendar}
        disableAllTouchEventsForInactiveDays
        current={dateNow}
        minDate={dateNow}
        maxDate={forecastLastDate} // API restrictions to get a weather
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: Colors.empireBlue,
          },
        }}
      />
      <BottomSheet
        style={styles.bottomSheet}
        enablePanDownToClose
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
      >
        {rowData && (
          <WeatherRow
            date={rowData.date}
            dayName={rowData.dayName}
            iconUrl={rowData.iconUrl}
            humidity={rowData.humidity}
            windSpeed={rowData.windSpeed}
            dayTemperature={rowData.dayTemperature}
            nightTemperature={rowData.nightTemperature}
          ></WeatherRow>
        )}
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  calendar: {
    marginTop: 20,
  },
  bottomSheet: {
    backgroundColor: Colors.whiteColor,
    shadowColor: Colors.blackColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default HomeScreen;
