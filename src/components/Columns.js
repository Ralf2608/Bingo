import { View, Text, StyleSheet } from "react-native"

export default ({i,numbers}) =>{
    
    return(
        <View style={style.row}>
            {<Text>{i}</Text>}
            {numbers.map((number, index)=>{
                if(i === 'N' && index === 2){
                    return <Text></Text>
                }
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