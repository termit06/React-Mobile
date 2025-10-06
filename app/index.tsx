import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import Calculator from "./calculator";

import Clicker from "./clicker";

export default function App() {
  const [showCalculator, setShowCalculator] = useState(false);

  const [showWeather,setShowWeather] = useState(false);

  const [showClicker,setShowClicker] = useState(false)
  
  if (showCalculator) {
    return <Calculator onBack={() => setShowCalculator(false)} />;
  }

if(showClicker) {
  return <Clicker onBack={() => setShowClicker(false)}/>;
}

 

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Моё мобильное приложение</Text>
      <Button 
        title="Калькулятор" 
        color="#E9967A"
        onPress={() => setShowCalculator(true)}
      />
      <Button
      title="Погода"
      color="#800080"
      onPress={() => setShowWeather(true)}
      />
      <Button
      title="Кликер"
      color="#000080"
      onPress={() => setShowClicker(true)}
      />
      <Button
      title="Шашки"
      color="#ff7f50"
      />
    </View>
  );
}