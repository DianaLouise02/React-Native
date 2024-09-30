import React, { useEffect, useState } from 'react'
import {StyleSheet, View, Text, Button } from 'react-native';

const Status = () => {
    // Gerenciar o status de conexão
    const [status, setStatus] = useState('Offline');

    //Exibir uma mensagem no console quando os status mudar
    useEffect(() => {
        console.log(`Status atual: ${status}`);
    }, [status]); // Executa o useEffect quando os status passam por uma mudança

    return (
        <View style={{ padding: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 15, marginBottom: 10 }}>Você está: {status}</Text>

            {/* Botão para alternar entre "Online" e "Offline" */}
            <Button style={estilos.button}
                title={status === 'Offline' ? "Ficar Online" : "Ficar Offline"}
                onPress={() => setStatus(status === 'Offline' ? 'Online' : 'Offline')}
            />
        </View>
    );
};


const estilos = StyleSheet.create({

    button: {
        padding: 20,
        marginLeft: 15

    },


});



export default Status;