import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../constants";

const WeatherRow: React.FC<DayWeatherData> = (item) => {
  return (
    <View style={[styles.item, styles.shadow]}>
      <View style={[styles.flexRowContainer, styles.alignCenter]}>
        <View style={[styles.flexRowContainer, styles.alignCenter]}>
          <Text style={styles.title}>{item.dayName}</Text>
          <Image style={styles.image} source={{ uri: item.iconUrl }} />
        </View>
        <View style={styles.tempContainer}>
          <Text style={styles.title}>{item.dayTemperature}</Text>
          <Text> </Text>
          <Text style={styles.subTitle}>{item.nightTemperature}</Text>
        </View>
      </View>
      <View style={styles.additionalInfoContainer}>
        <View style={styles.additionalInfoLeftContainer}>
          <Text style={styles.additionalInfoPrimaryText}>Wind: </Text>
          <Text style={styles.additionalInfoSecondaryText}>
            {item.windSpeed}
          </Text>
        </View>
        <View style={[styles.additionalInfoRightContainer]}>
          <Text style={[styles.additionalInfoPrimaryText, styles.textRight]}>
            {"Humidity: "}
          </Text>
          <Text style={[styles.additionalInfoSecondaryText, styles.textRight]}>
            {item.humidity}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRowContainer: {
    flex: 1,
    flexDirection: "row",
  },
  additionalInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  additionalInfoLeftContainer: {
    flexDirection: "row",
    width: "45%",
  },
  additionalInfoRightContainer: {
    flexDirection: "row",
    width: "45%",
  },
  additionalInfoPrimaryText: {
    fontSize: 15,
    width: "50%",
  },
  additionalInfoSecondaryText: {
    fontSize: 15,
    color: Colors.greyscale,
    width: "50%",
  },
  textRight: {
    textAlign: "right",
  },
  alignCenter: {
    alignItems: "center",
  },
  tempContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  item: {
    backgroundColor: Colors.reefBlue,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 15,
  },
  shadow: {
    shadowColor: Colors.blackColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
  },
  subTitle: { fontSize: 19, color: Colors.greyscale },
});

export default WeatherRow;
