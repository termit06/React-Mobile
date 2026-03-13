import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { WeatherDto } from './types/weather.types';
const weatherv2 = () => {
    const API_KEY = "W7A8UXC8ZXTXS7427H28M3EZJ";
    const optionConfig = "days,current";
    const WeatherData = 'metric'
    const TypeOfFormat = 'json'
    const [data, setData] = useState<WeatherDto[]>()
    const [location, setLocation] = useState("Washington")

    useEffect(() => {
        fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=${WeatherData}&include=${optionConfig}&contenttype=${TypeOfFormat}&key=${API_KEY}`,
            {
                method: "GET",
            },
        )
          .then((response) => response.json())
            .then((data) => {
                console.log(data.days)
                setData(data.days)
            });
    },[location])
    
    return (
      <View>
        <View>
                <Button title="London" onPress={() => setLocation("London")} />
                <Button title="Washington" onPress={() => setLocation("Washington")} />
                <Button title="Tokyo" onPress={() => setLocation("Tokyo")} />
                <Button title="Kyoto" onPress={() => setLocation("Kyoto")} />
                <Button title="Reykjavik" onPress={() => setLocation("Reykjavik")}/>
          <View>
            {data?.map((item: WeatherDto, index) => (
              <View key={index}>
                <Text>
                  {new Date(item.datetime).toLocaleDateString("ru-RU")}
                    </Text>
                    <Text>
                        {Number(item.temp)}
                    </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
}
export default weatherv2