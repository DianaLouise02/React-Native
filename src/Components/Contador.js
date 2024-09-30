import React, { useEffect, useState } from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'

export default function Contador() {

    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('');

useEffect(() => {
    setMsg('O valor do contador foi atualizado ' + count + ' Vez(es)')
}, [count])

    return (
        <>

            <Text style={estilos.texto}>Você clicou aqui {count} </Text>
            <Text>{msg}</Text>

            <View style={estilos.buttonList}>
                <Button
                    onPress={() => {
                        setCount(count + 1)

                    }}
                    title="Clique aqui" 
                    />
            </View>

            <View style={estilos.buttonList}>
                <Button
                  onPress={() => {
                    setCount(count - 1)

                }}
                title="Diminuir" 
                />
            </View>


        </>

    )
}


const estilos = StyleSheet.create({

    buttonList: {
        padding: 10,

    },

    texto: {
        color: "blueviolet",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 15,
        marginLeft: 20
    }

})
