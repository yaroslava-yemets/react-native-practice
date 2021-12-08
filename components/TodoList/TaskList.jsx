import React from 'react';
import { HStack } from 'native-base';

import ListCheckbox from './ListCheckbox';
import DeleteIconButton from './DeleteIconButton';

export default function TaskList ({ changeStatus, item, removeTodoItem }) {
    return (
        <HStack 
            justifyContent="space-between"
            alignItems="center"
        >                    
            <ListCheckbox item={item} changeStatus={changeStatus} />
            <DeleteIconButton removeTodoItem={removeTodoItem} item={item} />
        </HStack>
    )
}