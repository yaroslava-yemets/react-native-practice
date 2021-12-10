import React from 'react';
import { IconButton, Icon } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function DeleteIconButton ({ removeTodoItem, item }) {
    return (
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
    )
}