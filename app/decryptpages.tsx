import { useState } from "react"
import { TouchableOpacity, TextInput, View, Text } from 'react-native'
const Decrypt = () => {
let alphabelts = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я',';',':',',','.','-']
let numbers = ['7', '54', '90', '241', '16', '101', '43', '81', '6', '93', '120', '145', '17', '84', '99', '89', '9', '71', '46', '31', '3', '45', '74', '76', '29', '52', '42', '101', '18', '40', '39', '67', '47', '19']
    const [Encrypt, setEncrypt] = useState('')
    const [result, setResult] = useState('')
    const handleEncrypt = () => {
        debugger
        let encryptResult = "";
                for (let i = 0; i < Encrypt.length; i++){
            const char = Encrypt[i].toUpperCase()
            const index = alphabelts.indexOf(char)
            encryptResult += numbers[index]
            setResult(encryptResult)
        }
    } 
    return (
      <View>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            color: "black",
            fontSize: 40,
            padding: 10,
            marginBottom: 10,
          }}
          value={Encrypt}
          onChangeText={setEncrypt}
        ></TextInput>
        <TouchableOpacity
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            marginBottom: 10,
            width: 205,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={handleEncrypt}
        >Шифровка</TouchableOpacity>
        <Text>{result}</Text>
      </View>
    );
}
export default Decrypt