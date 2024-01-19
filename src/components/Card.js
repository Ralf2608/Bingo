import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import Columns from "./Columns";


export default function Card(){

    const [line1, setLine1] = useState([])
    const [line2, setLine2] = useState([])
    const [line3, setLine3] = useState([])
    const [line4, setLine4] = useState([])
    const [line5, setLine5] = useState([])
    const [qtd, setQtd] = useState(0)

    function Random(max,min){
        return (Math.round(Math.random() * (max - min) + min))
    }

    function RandomLine(max,min){
        const line = []

        while(line.length<5){
            const n = Random(max,min)
            if(!line.includes(n)){
                line.push(n)
            }
        }

        const lineSort = line.sort() 
        return lineSort
    }

    function UpdateLines(){
        setLine1(RandomLine(1,15))
        setLine2(RandomLine(16,30))
        setLine3(RandomLine(31,45))
        setLine4(RandomLine(46,60))
        setLine5(RandomLine(61,75))
    }

    useEffect(() => {
        UpdateLines()
    }, [])

    return(
        <>
            <Columns i={'B'} numbers={line1} />
            
            <Columns i={'I'} numbers={line2} />
            
            <Columns i={'N'} numbers={line3} />

            <Columns i={'G'} numbers={line4} />
            
            <Columns i={'O'} numbers={line5} />

            <Button title="Gere sua cartela!" onPress={() => UpdateLines()}></Button>

        </>
    )
}
