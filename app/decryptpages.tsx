import { useState } from "react";
import {TextInput, Button,View} from "react-native";
const Decrypt = () => {
  let alphabelts = ["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я","."];
  let deCypher = [7,54,90,241,16,102,43,81,6,93,120,145,17,84,99,89,9,71,46,31,3,45,74,76,29,52,42,101,18,40,39,67,47,19];
  const [encrypt, setEncrypt] = useState("");
  const [decrypt, setDecrypt] = useState("");
  const [result,setResult] =useState("")
  const handleEncrypt = () => {
    debugger
    let encryptResult = ""
    for (let i = 0; i < encrypt.length; i++) {
      for (let j = 0; j < alphabelts.length; j++) {
        if (encrypt[i] === alphabelts[j]) {
          encryptResult += deCypher[j] + " "
        }
      }
    }
    setResult(encryptResult)
  }
  const handleDecrypt = () => {
    debugger
    let simulation = decrypt.split(" ")
    let decryptResult = ""
    for (let i = 0; i < simulation.length; i++){
      for (let j = 0; j < deCypher.length; j++) {
        if (simulation[i] === String(deCypher[j])) {
          decryptResult += alphabelts[j]
        }
      }
    }
    setResult(decryptResult)
  }
  return (
    <View>
      <TextInput value={encrypt} onChangeText={setEncrypt}></TextInput>
      <Button title="Шифровка" onPress={handleEncrypt}></Button>
      <TextInput value={decrypt} onChangeText={setDecrypt}></TextInput>
      <Button title="Расшифровка" onPress={handleDecrypt}></Button>
      {result}
    </View>
  );
};
export default Decrypt;