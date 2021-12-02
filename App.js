import React from 'react';
import { extendTheme, NativeBaseProvider, Box, Text } from 'native-base';

// import AddButton from './components/AddButton';
// import TaskInput from './components/TaskInput';
import AddTaskBox from './components/AddTaskBox';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <NativeBaseProvider>
      <TodoList />
      <AddTaskBox />
      <Box flex={1} bg="#941c1c" alignItems="center" justifyContent="center">
        <Text color="#469e9e">Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>This is my firs expo app</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
