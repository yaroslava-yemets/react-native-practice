import React from 'react';
import { Icon, Checkbox, Text } from 'native-base';
import { Ionicons } from "@expo/vector-icons"

export default function ListCheckbox ({ item, changeStatus }) {
    return (
        <Checkbox
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
    )
}