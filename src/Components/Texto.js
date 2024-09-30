import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
/// atalho "rfc"

export default function Texto() {
    const [texto, setTexto] = useState('Texto do novo componente');

    useEffect(() => {
        setTexto("Hello World!");
    }, []);

    return (
        <Text style={estilos.texto}>{texto}</Text>
    )
}

const estilos = StyleSheet.create({
    texto: {
        color: "violet",
        fontWeight: "bold",
        fontSize: 26,
        marginTop: 10,
        marginLeft: 20
    }


});