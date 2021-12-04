import React from 'react';
import { useState } from 'react';
import { Box, Heading, Center, Input, IconButton, Icon, HStack, VStack, Checkbox, Text } from 'native-base';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

export default function ToDoList() {
  const [inputValue, setInputValue] = useState("")
  const [list, setList] = useState([])

  const addTask = (task) => {
    setList([
      ...list, 
      {
        task,
        isCompleted: false
      },
    ])
  }

  const handleDelete = (index) => {
    const temp = list.filter((_, itemI) => itemI !== index)
    setList(temp)
  }

  const handleStatusChange = (index) => {
    const temp = list.map((item, itemI) =>
      itemI !== index ? item : { ...item, isCompleted: !item.isCompleted }
    )
    setList(temp)
  }

    return (
      <Center p={10} flex={1}>
        <Box 
          w="100%" 
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading mb="5" color="orange.500">To do List</Heading>
          <VStack space={3} width="100%">
            <HStack space={3} justifyContent="space-between">
              <Input 
                flex={1}
                fontSize={15}
                color="orange.500"
                borderColor="orange.500"
                _focus={{
                  borderColor: "orange.600:alpha.20",
                }}
                onChangeText={(v) => setInputValue(v)}
                value={inputValue}
                placeholder="Add Task"
              />
              <IconButton
                onPress={() => {
                  addTask(inputValue)
                  setInputValue("")
                }}
                icon={<Icon as={Ionicons} name="ios-add-circle" />}
                borderRadius="full"
                _icon={{
                  color: "orange.500",
                  size: "md",
                }}
                _hover={{
                  bg: "orange.600:alpha.20",
                }}
                _pressed={{
                  bg: "orange.600:alpha.20",
                  _icon: {
                    name: "ios-add-circle",
                  },
                  _ios: {
                    _icon: {
                      size: "3xl",
                    },
                  },
                }}
                _ios={{
                  _icon: {
                    size: "3xl",
                  },
                }}
              />
            </HStack>

            {list.map((item, itemI) => (
              <HStack 
                justifyContent="space-between"
                alignItems="center"
                space={5}
                key={item.task + itemI.toString()}
              >
              <Checkbox
                colorScheme="orange"
                borderColor="orange.500:alpha.20"
                isChecked={item.isCompleted}
                onChange={() => handleStatusChange(itemI)}
                value={item.task}
                icon={<Icon as={<Ionicons name="md-checkmark-done" />} />}
                _hover={{
                  borderColor: "orange.500"
                }}
                _focus={{
                  borderColor: "orange.500"
                }}
              >
                <Text
                  mx={3}
                  fontStyle="italic"
                  fontSize={15}
                  strikeThrough={item.isCompleted}
                  _light={{
                    color: item.isCompleted ? "orange.600:alpha.30" : "orange.500",
                  }}
                >
                  {item.task}
                </Text>
              </Checkbox>
              <IconButton
                size="sm"
                colorScheme="orange"
                color="orange.500"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    name="delete"
                    size="lg"
                    color="orange.500"
                    _hover={{
                      bg: "orange.600:alpha.20"
                    }}
                    _focus={{
                      bg: "orange.600:alpha.20",
                    }}
                  />
                  
                }
                onPress={() => handleDelete(itemI)}
              />
            </HStack>
          ))}

          </VStack>
        </Box>
      </Center>
    );
}