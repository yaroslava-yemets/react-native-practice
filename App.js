import React from 'react';
import { NativeBaseProvider, Box, Text } from 'native-base';

import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <NativeBaseProvider>
      <ToDoList />
    </NativeBaseProvider>
  );
}

