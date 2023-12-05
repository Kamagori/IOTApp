import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style"


export default function Caixa(){

    const [Caixa, setCaixa] = useState([])

    useEffect(() => {
        database.collection("Caixa").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setCaixa(list)
        });
    }, [])
    return(
        <View>
            <Text>
                Page Caixa
             </Text>   
        </View>
    )
}