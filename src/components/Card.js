import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";

import Columns from "./Columns";


export default function Card(){

    // Números da tabela:
    const [line1, setLine1] = useState([])
    const [line2, setLine2] = useState([])
    const [line3, setLine3] = useState([])
    const [line4, setLine4] = useState([])
    const [line5, setLine5] = useState([])

    // Função para gerar números aleatórios:
    function Random(max,min){
        return (Math.round(Math.random() * (max - min) + min))
    }

    // Adição dos números aleatórios nas linhas
    function RandomLine(max,min){

        const line = []
        while(line.length<5){
            const n = Random(max,min)
            if(!line.includes(n)){
                line.push(n)
            }
        }

        //Duplicando a lista criada:
        let newList = [...line]

        // Criando as condições para ordenar a lista:
        let lineSort = newList.sort((a,b) => (a > b)?1 : (b > a)?-1 : 0)

        return lineSort
    }

    // Função para atualizar as linhas:
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
            <View style={style.row}>
            
                <View style={style.table}>
                    <Columns i={'B'} numbers={line1}/>
                    
                    <Columns i={'I'} numbers={line2}/>
                    
                    <Columns i={'N'} numbers={line3}/>

                    <Columns i={'G'} numbers={line4}/>
                    
                    <Columns i={'O'} numbers={line5}/>
                </View>

                <Button title="Gere sua cartela!" onPress={() => UpdateLines()}></Button>
            </View>
        </>
    )
}

const style= StyleSheet.create({
    row: {
        padding: 20,
        gap: 5,
        alignContent: "center",
        flexDirection: "column"
    },
    table: {
        padding: 20,
        gap: 5,
        alignContent: "center",
        flexDirection: "row"
    }
})
