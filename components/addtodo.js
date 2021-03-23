import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'

export default function AddToDo({pressHandler}) {
    const [text, setText] = useState();

    const changeHandler = (value) =>{
        setText(value);
    }

    const onSubmit = (text) => {
        
        pressHandler(text)
        setText(" ");
        
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                value={text}
                onChangeText={(value) => changeHandler(value)}
            />
            <Button onPress={ () => onSubmit(text)} title="add todo" color="coral" />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})