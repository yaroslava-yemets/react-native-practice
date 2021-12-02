import React from 'react';
import { Button, Box, Text } from 'native-base';

export default function AddButton({input}) {
  const addTask = () => {
  <Box>
    <Text>{input}</Text>
  </Box>
  }
  return (
    <Button width="100px" onPress={addTask}>add task</Button>
  );
}