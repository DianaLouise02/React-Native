import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Prime() {
    return (
        <>
            <View style={estilos.topo}>
                <Text style={estilos.titleTop}>Detalhes do Sistema</Text>
            </View>
            <View style={estilos.listaDescricao}>

                <Text style={estilos.nomeLista}>Lista de compras</Text>
            </View>


            <View>
                <Text style={estilos.descricao}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer.
                </Text>

                <Text style={estilos.preco}>
                    R$ 40,00
                </Text>
            </View>

        </>




    )
}
const estilos = StyleSheet.create({

    topo: {
        width: "100%",
        height: 150,
        backgroundColor: "plum",

    },
    titleTop: {
        width: "100%",
        textAlign: "center",
        paddingTop: 60,
        fontSize: 20,
        color: "white",
        fontWeight: "bold"

    },
    listaDescricao: {
        paddingTop: 20,
        fontSize: 15,
        marginLeft: 15
    },

    nomeLista: {
        fontWeight: "bold",
        fontSize: 16

    },
    descricao: {
        paddingTop: 20,
        color: "gray",
        marginLeft: 20,
        fontSize: 16,
        lineHeight: 26


    },

    preco: {
        color: "darkviolet",
        fontWeight: "bold",
        fontSize: 26,
        marginTop: 8,
        marginLeft: 20
    },

    titulo:{
        textAlign:30,
        paddingTop: 50,
        marginLeft:30,
        backgroundColor: "Darkviolet"

    }



})