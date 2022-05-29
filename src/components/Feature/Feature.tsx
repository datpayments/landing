import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
    title: string;
    description: string;
};

export function Feature({ title, description }: Props) {
    return (
        <Flex>
            <Box
                height="16px"
                borderLeft="2px"
                borderLeftColor="primary.500"
                mr={2}
            />
            <Box>
                <Text fontSize="xs" fontWeight="bold" mb={2.5}>
                    {title}
                </Text>

                <Text whiteSpace="pre-line" fontSize="xs">
                    {description}
                </Text>
            </Box>
        </Flex>
    );
}
