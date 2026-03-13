import * as React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";

type FieldProps = {
  inputStr: string;
};

export default function Field(props: FieldProps) {
  return <TextInput style={styles.box} value={props.inputStr} />;
}

const styles = StyleSheet.create({
  box: {
    fontSize: 60,
    height: 100,
    backgroundColor: "black",
    borderColor: "dark",
    display: "flex",
    color:"lime",
  },
});
