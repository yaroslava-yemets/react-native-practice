import React from 'react';
import { NativeBaseProvider, Box, Text } from 'native-base';

import ToDoList from './components/ToDoList';
import TodoListSplited from './components/TodoListSplited';
import EmptyInputAlert from './components/TodoList/EmptyInputAlert';

export default function App() {
  return (
    <NativeBaseProvider>
      <ToDoList />
      <TodoListSplited />
    </NativeBaseProvider>
  );
}

