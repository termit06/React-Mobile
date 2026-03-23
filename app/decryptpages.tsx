import { useState } from "react";
import { TouchableOpacity, TextInput, View, Text } from "react-native";
const Decrypt = () => {
  let alphabelts = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
    ";",
    ":",
    ",",
    ".",
    "-",
  ];
  let numbers = [
    "7",
    "54",
    "90",
    "241",
    "16",
    "101",
    "43",
    "81",
    "6",
    "93",
    "120",
    "145",
    "17",
    "84",
    "99",
    "89",
    "9",
    "71",
    "46",
    "31",
    "3",
    "45",
    "74",
    "76",
    "29",
    "52",
    "42",
    "101",
    "18",
    "40",
    "39",
    "67",
    "47",
    "19",
  ];
  const [encrypt, setEncrypt] = useState("");
  const [decrypt, setDecrypt] = useState("");
  const [result, setResult] = useState("");
  const handleEncrypt = () => {
    let encryptResult = "";
    for (let i = 0; i < encrypt.length; i++) {
      const char = encrypt[i].toUpperCase();
      const index = alphabelts.indexOf(char);
      encryptResult += numbers[index] + " ";
      setResult(encryptResult);
    }
  };
  const handleDecrypt = () => {
    debugger;
    let decryptResults = "";
    let arr = decrypt.split(" ");
    for (let i = 0; i < arr.length; i++) {
      const index = numbers.indexOf(arr[i]);
      decryptResults += alphabelts[index];
      setResult(decryptResults);
    }
  };
  return (
    <View>
      <TextInput
       
        value={encrypt}
        onChangeText={setEncrypt}
      ></TextInput>
      <TouchableOpacity
        onPress={handleEncrypt}>
        Шифровка
      </TouchableOpacity>
      <TextInput value={decrypt} onChangeText={setDecrypt}></TextInput>
      <TouchableOpacity onPress={handleDecrypt}>Расшифровка</TouchableOpacity>
      <Text>{result}</Text>
    </View>
  );
};
export default Decrypt;
