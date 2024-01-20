import { View, Text, StyleSheet } from "react-native"

export default ({i,numbers}) =>{
    
    return(
        <View style={style.row}>
            {<Text style={style.text}>{i}</Text>}
            {numbers.map((number, index)=>{
                if(i === 'N' && index === 2){
                    return <Text key={number} style={style.text}></Text>
                }
                return <Text key ={number} style={style.text}>{number}</Text>
            })}
        </View>
)}

const style= StyleSheet.create({
    row: {
        padding: 20,
        gap: 8,
        alignContent: "center"
    },
    text: {
        fontSize: 22
    }
})