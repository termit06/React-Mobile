import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { WeatherDto } from "./types/weather.types";
const WeatherComponents = () => {
  const API_KEY = "W7A8UXC8ZXTXS7427H28M3EZJ";
  const unitGroup = "metric";
  const optionsInclude = "days,current";
  const typeOfcontent = "json";
  const [record, setRecord] = useState<WeatherDto[]>();
  const [position, setPosition] = useState("Moscow");
useEffect(() => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(position)}?unitGroup=${unitGroup}&include=${optionsInclude}&contenttype=${typeOfcontent}&key=${API_KEY}`,
      {
        method: "GET",
      },
    )
      .then((response) => response.json())
      .then((record) => {
        console.log("Forecast days:", record.days);
        setRecord(record.days);
      });
  }, [position]);
return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <Button title="Гонконг" onPress={() => setPosition("Hong Kong")} />   
        </View>
      <View>
        {record?.map((item: WeatherDto, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: 5,
              borderColor: "#e9ecef",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {new Date(item.datetime).toLocaleDateString("ru-RU")}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#007AFF",
                }}
              >
                {Number(item.temp)}°C
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default WeatherComponents;