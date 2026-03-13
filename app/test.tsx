import { useState } from "react";
import { Button, TextInput, View } from "react-native";

const Test = () => {
    const [tre, setTre] = useState(0);

    return <View>
        <TextInput /> 
        {tre}
        <Button title="Жми" onPress={() => setTre(tre + 1)} />
    </View>
}

export default Test;