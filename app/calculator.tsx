import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Field from "@/components/calculator/Field";
import Padnum from "@/components/calculator/Padnum";

const Calculator = () => {
  const [buffer, setBuffer] = React.useState("");
  const [numInput, setInput] = React.useState("");
  const [numSecond, setSecond] = React.useState("");
  const [operator, setOperator] = React.useState("");

  let k = [];

  for (let i = 0; i <= 9; i++) {
    k.push(i);
  }

  const numBack = (value: any) => {
    setInput(numInput + value.toString());
  };

  const handleOperator = (operator: string) => {
    setOperator(operator);
    switch (operator) {
      case "+": {
        setBuffer(numInput);
        setInput("");
        setSecond(numInput + " " + operator + " ");
        break;
      }
      case "-": {
        setBuffer(numInput);
        setInput("");
        setSecond(numInput + " " + operator + " ");
        break;
      }
      case "*": {
        setBuffer(numInput);
        setInput("");
        setSecond(numInput + " " + operator + " ");
        break;
      }
      case "/": {
        setBuffer(numInput);
        setInput("");
        setSecond(numInput + " " + operator + " ");
        break;
      }
      case "!": {
        if (numInput) {
          const num = Number(numInput);
          if (num >= 0 && num <= 170) {
            const result = factorial(num);
            setSecond(numInput + "! = " + result.toString());
            setInput(result.toString());
          } else {
            setSecond("Ошибка: число должно быть 0-170");
            setInput("");
          }
        }
        break;
      }
    }
  };

  const handleEquation = (operator: any) => {
    let result;
    console.log(result);
    switch (operator) {
      case "+": {
        result = Number(buffer) + Number(numInput);
        setSecond(
          numInput.toString() +
            operator.toString() +
            numInput.toString() +
            "=" +
            result.toString()
        );
        break;
      }
      case "-": {
        result = Number(buffer) - Number(numInput);
        setSecond(
          numInput.toString() +
            operator.toString() +
            numSecond.toString() +
            "=" +
            result.toString()
        );
        break;
      }
      case "*": {
        result = Number(buffer) * Number(numInput);
        setSecond(
          numInput.toString() +
            operator.toString() +
            numSecond.toString() +
            "=" +
            result.toString()
        );
        break;
      }
      case "/": {
        result = Number(buffer) / Number(numInput);
        setSecond(
          numInput.toString() +
            operator.toString() +
            numSecond.toString() +
            "=" +
            result.toString()
        );
        break;
      }
    }
  };

  const handleClear = () => {
    setSecond("");
    setBuffer("");
    setInput("");
    setOperator("");
  };

  const factorial = (c: number) => {
    let f = 1;
    for (let i = 1; i <= c; i++) {
      f = f * i;
    }
    return f;
  };
  return (
    <View>
      <text>Калькулятор</text>
      <View style={styles.box1}>
        <Field inputStr={numSecond} />
        <Field inputStr={numInput} />

        {k.map((item, index) => (
          <Padnum num={index} back={numBack} />
        ))}
      </View>
      <View>
        <View style={styles.box2}>
          <TouchableOpacity
            style={styles.button2}
            onPress={(e) => handleOperator("+")}
          >
            +
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={(e) => handleOperator("-")}
          >
            -
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={(e) => handleOperator("*")}
          >
            *
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={(e) => handleOperator("/")}
          >
            ÷
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={(e) => handleEquation(operator)}
          >
            =
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={handleClear}>
            Clear
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={(e) => handleOperator("!")}
          >
            !
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box1: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: 80,
  },
  button1: {
    display: "flex",
    fontSize: 40,
    borderColor: "red",
    borderWidth: 1,
    color: "red",
    backgroundColor: "orange",
  },
  button2: {
    display: "flex",
    fontSize: 40,
    borderColor: "lime",
    borderWidth: 1,
    color: "lime",
    backgroundColor: "blue",
  },
  box2: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: 100,
  },
});

export default Calculator;
