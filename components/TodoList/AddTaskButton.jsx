import React from 'react';
import { IconButton, Icon } from 'native-base';
import { Ionicons } from "@expo/vector-icons"

export default function AddTaskButton ({ addTodoItem }) {
    return (
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
    )
}