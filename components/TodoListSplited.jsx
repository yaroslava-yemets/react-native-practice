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

import InputField from './TodoList/InputField'
import EmptyInputAlert from './TodoList/EmptyInputAlert';
import TaskList from './TodoList/TaskList';

export default function TodoListSplited() {
    const [list, setList] = useState([]);
    const [showAlert, setShowAlert] = useState(false)

    function getNewList (inputValue) {
        setList(prevList => [
            ...prevList, 
            {
              id: Date.now(),
              task: inputValue.trim(),
              isCompleted: false
            },
        ]);
        setShowAlert(false);
    }

    function showAlertMessage () {
        setShowAlert(true)
    }

    function hideAlertMessage () {
        setShowAlert(false)
    }

    function changeStatus (id) {
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

    function removeTodoItem (id) {
        const filteredList = list.filter(item => item.id !== id)
        setList(filteredList)
    }

    return (
        <ScrollView>
            <Center p={10} flex={1} >

                <Heading mb="5" color="orange.500">To do List</Heading>
                <VStack space={3} width="90%">
                    <InputField getNewList={getNewList} showAlertMessage={showAlertMessage} />
                    {showAlert &&  <EmptyInputAlert hideAlertMessage={hideAlertMessage} /> }
                    {list.map(item => 
                        (<TaskList 
                            changeStatus={changeStatus} 
                            item={item} 
                            key={item.id}  
                            removeTodoItem={removeTodoItem} 
                        />))
                    }
                </VStack>
                    
            </Center>
        </ScrollView>
    )
}