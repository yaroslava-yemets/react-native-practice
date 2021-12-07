import React from 'react';
import { useState } from 'react';
import { 
  Alert, 
  Box, 
  Heading, 
  Center, 
  Input, 
  IconButton, 
  Icon, 
  HStack, 
  VStack, 
  Checkbox, 
  Text, 
  ScrollView,
  CloseIcon,
  List
} from 'native-base';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

export default function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [showAlert, setShowAlert] = useState(false)

  function addTodoItem () {
    if(inputValue.trim() === "") {
      setShowAlert(true)
      return
    }
    if(showAlert) {
      setShowAlert(false)
    }
    setList(prevList => [
      ...prevList, 
      {
        id: Date.now(),
        task: inputValue.trim(),
        isCompleted: false
      },
    ]);
    setInputValue("");
  }

  function removeTodoItem (id) {
    const filteredList = list.filter(item => item.id !== id)
    setList(filteredList)
  }

  const changeStatus = (id) => {
    const modifiedlist = list.map(item => {
      if(item.id !== id) {
        return item
      }

      return {
        ...item,
        isCompleted: !item.isCompleted
      }
    })

    setList(modifiedlist)
  }

    return (
      <ScrollView>
        <Center p={10} flex={1} >
          <Box
            w="100%" 
            overflow-x="scroll"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading mb="5" color="orange.500">To do List</Heading>
            <VStack space={3} width="90%">

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
                  onPress={addTodoItem}
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

              {showAlert && 
              <Alert w="100%" status="warning" colorScheme="warning">
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack
                    flexShrink={1}
                    space={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <HStack flexShrink={1} space={2} alignItems="center">
                      <Alert.Icon />
                      <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                       You have to enter task. The field cannot be empty!
                      </Text>
                    </HStack>
                    <IconButton
                      onPress={() => setShowAlert(false)}
                      variant="unstiled"
                      icon={<CloseIcon size="3" color="coolGray.600" />}
                    />
                  </HStack>
                </VStack>
              </Alert> 
              }
            
              {list.map(item => (
                <HStack 
                  justifyContent="space-between"
                  alignItems="center"
                  space={5}
                  key={item.id}
                >                    
                  <Checkbox
                    maxWidth="80%"
                    colorScheme="orange"
                    borderColor="orange.500:alpha.20"
                    isChecked={item.isCompleted}
                    onChange={() => changeStatus(item.id)}
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
                    onPress={() => removeTodoItem(item.id)}
                  />
                </HStack>
              ))}

            </VStack>
          </Box>
        </Center>
      </ScrollView>
    );
}