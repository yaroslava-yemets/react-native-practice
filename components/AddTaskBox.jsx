import React from 'react';
import { useState } from 'react';
import { Box } from 'native-base';

import AddButton from './AddButton';
import TaskInput from './TaskInput';

export default function AddTaskBox() {
    const [input, setInput] = useState(null)
    const getInput = (input) => {
    setInput(input);
  }
    return (
    <Box width="100%">
        <TaskInput getInput={getInput}/>
        <AddButton input={input} />
    </Box>
    );
}