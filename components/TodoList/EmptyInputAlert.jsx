import React from 'react';
import { 
    Alert, 
    IconButton,
    HStack, 
    VStack, 
    Text,
    CloseIcon
} from 'native-base';

export default function EmptyInputAlert ({ hideAlertMessage }) {
    return (
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
                    onPress={hideAlertMessage}
                    variant="unstiled"
                    icon={<CloseIcon size="3" color="coolGray.600" />}
                />
                </HStack>
            </VStack>
        </Alert> 
    )
}

