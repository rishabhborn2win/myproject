import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#333'
    },
    boxOne: {
        flex: 1,
        backgroundColor:'#777',
        padding: 10
    },
    boxTwo: {
        flex: 2,
        backgroundColor:'#888',
        padding: 20
    },
    boxThree: {
        flex: 1,
        backgroundColor:'#999',
        padding: 30
    },
    boxFour: {
        flex: 3,
        backgroundColor:'#aaa',
        padding: 40
    }
})