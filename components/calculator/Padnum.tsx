import { TouchableOpacity } from "react-native";
import * as React from 'react'
import { StyleSheet } from 'react-native';

type PadnumProps = {
    num: number;
    back: (value: number) => void;
}

export default function Numpad(props: PadnumProps) {
    let c = [];
    const test = (t: number) => {

        props.back(t);
    }



    return (
    <TouchableOpacity
    style={styles.button1}

    
    onPress={() => test(props.num)} >
        {props.num}
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    button1:{
        display:"flex",
        fontSize:40,
        borderColor:"black",
        borderWidth: 1,
        backgroundColor:"blue",
        color:"white"
    }
})