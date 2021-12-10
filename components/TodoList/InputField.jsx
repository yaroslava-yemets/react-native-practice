import React from 'react';
import { useState } from 'react';
import { HStack } from 'native-base';

import TaskInput from './TaskInput';
import AddTaskButton from './AddTaskButton';

export default function InputField ({ getNewList, showAlertMessage }) {
    const [inputValue, setInputValue] = useState("");

    function getInputValue (v) {
        setInputValue(v)
    }

    function addTodoItem () {
        if(inputValue.trim() === "") {
            console.log('no information');
            showAlertMessage()
          return
        }
        getNewList(inputValue);
        setInputValue("");
    }

    return (
        <HStack space={3} justifyContent="space-between">
            <TaskInput getInputValue={getInputValue} inputValue={inputValue} />
            <AddTaskButton addTodoItem={addTodoItem} />
        </HStack>
    )
}