import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import Clicker from "./clicker";
import Calculator from "./calculator";
import WeatherComponents from "./weathercomponents";
export default function App() {


  const [showClicker,setShowClicker] = useState(false)
  const [showCalculator,setShowCalculator] = useState(false)
  const [showWeather,setShowWeather] = useState(false)
  
  
if(showClicker) {
  return <Clicker onBack={() => setShowClicker(false)}/>;
}
if(showCalculator) {
  return <Calculator/>;
}
if(showWeather){
  return <WeatherComponents/>;
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