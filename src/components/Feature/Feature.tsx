import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
    title: string;
    description: string;
};

export function Feature({ title, description }: Props) {
    return (
        <Flex>
            <Box
                height="20px"
                borderLeft="2px"
                borderLeftColor="primary.500"
                mr={2}
            />
            <Box>
                <Text fontSize="sm" fontWeight="bold" mb={2.5}>
                    {title}
                </Text>

                <Text whiteSpace="pre-line" fontSize="sm">
                    {description}
                </Text>
            </Box>
        </Flex>
    );
}
