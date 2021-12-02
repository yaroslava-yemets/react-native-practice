import React from 'react';
import { useState } from 'react';
import { Input } from 'native-base';

export default function TaskInput({ getInput }) {
    const [input, setInput] = useState(null)

    const handleInput = (e) => {
    setInput(e.currentTarget.value);
    getInput(input);
  }
    return (
      <Input onChange={handleInput} width="50%" height="100px"/>
    );
}