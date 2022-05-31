import { Box, Flex, Text } from "@chakra-ui/react";

export function Iphone() {
    return (
        <Box
            w="264px"
            borderRadius="24px"
            bg="white"
            p={6}
            h="542px"
            position="relative"
        >
            <Box
                position="absolute"
                h="110px"
                left="0"
                top="0"
                w="100%"
                borderTopRadius="24px"
                bg="gray.500"
                zIndex={0}
            />
            <Flex justifyContent="space-between" color="white">
                <Box>QR Code</Box>
                <Box flexShrink={1} flexGrow={0} zIndex={1}>
                    <Text>Awaiting payment 12:13</Text>
                </Box>
            </Flex>
        </Box>
    );
}
