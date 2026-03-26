import { useState } from "react"
import { View, TextInput, Button, Text} from "react-native"
const tableChess = () => {
const [sizeTable, setSizeTable] = useState("")
const [input, setInput] = useState<number[]>([])
const [element,setElement] = useState("")
const [result,setResult] = useState<number[]>([])
const addElement = () =>{
    const num = parseInt(element)
    if(!isNaN(num)){
        setInput([...input,num])
        setElement("")
    }
}
const rotateClockWise = () => {
   const n = parseInt(sizeTable)
    if(input.length === n){
        const newPosition = new Array(n + 1)
        for(let i = 1; i <= n; i++){
            const index = input[i - 1]
            newPosition[index] = n + 1 - i
        }
        setResult(newPosition)
    }
}
return (
  <View>
    <Text>Введите размер шахматной доски:</Text>
    <TextInput value={sizeTable} onChangeText={setSizeTable}></TextInput>
    <Text>Стандартный ввод:</Text>
    <TextInput value={element} onChangeText={setElement}></TextInput>
    <Button onPress={addElement} title="Добавить Элемент" />
    <Button onPress={rotateClockWise} title="Повернуть 90 градусов по часовой"/>
    <Text>Стандартный вывод:</Text>
    {result.map((item) => (
      <View>{item}</View>
    ))}
  </View>
);
}
export default tableChess