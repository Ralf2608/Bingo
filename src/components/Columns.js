import { View, Text, StyleSheet } from "react-native"

function Board(i){
    return <Text>{i}</Text>
}


export default ({i,numbers}) =>{
    return(
        <View style={style.row}>
            {Board(i)}
            {numbers.map((number)=>{
                return <Text>{number}</Text>
            })}
        </View>
)}

const style= StyleSheet.create({
    row: {
        padding: 20,
        gap: 5,
        alignContent: "center"
    }
})