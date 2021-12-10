import React from 'react';
import { Input } from 'native-base';

export default function TaskInput ({ getInputValue, inputValue }) {
    return (
        <Input 
            flex={1}
            fontSize={15}
            color="orange.500"
            borderColor="orange.500"
            _focus={{
                borderColor: "orange.600:alpha.20",
            }}
            onChangeText={(v) => getInputValue(v)}
            value={inputValue}
            placeholder="Add Task"      
        />
    )
}