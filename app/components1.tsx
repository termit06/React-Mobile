import { useState } from "react"
import { Button, Text,TextInput,View } from "react-native"
const Components1 = () => {
  let sampleText = "Hello Word!"
  let p = "Privet Mir!"
  const [vvod, setVvod] = useState("")
  const [vivod, setVivod] = useState("")
  const [x1, setX1] = useState("")
  const [y2, setY2] = useState("")
  const handleAnswer = () => setVivod(vvod)
  
  const otvetPoMatematiki = () => {
    let slojenie = Number(x1) + Number(x1)
    setY2(String(slojenie))
   }

  console.log(p)
  console.log(sampleText)
  console.log("Привет Мир!")
    return (
      <View>
        <Text>Привет Мир!</Text>
        {sampleText}
        <TextInput onChangeText={setVvod}></TextInput>
        <Button title="Вывод" onPress={handleAnswer}></Button>
        {p}
        {vivod}
        <Text>1ый ввод по x:</Text>
        <TextInput onChangeText={setX1}></TextInput>
        <Text>2-ой ввод по x:</Text>
        <TextInput onChangeText={setX1}></TextInput>
        <Button title="Сложить" onPress={otvetPoMatematiki}></Button>
        {y2}
      </View>
    );
}
export default Components1;