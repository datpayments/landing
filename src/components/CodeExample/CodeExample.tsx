import { Box, BoxProps, Flex } from "@chakra-ui/react";

const Control = (props: BoxProps) => (
    <Box borderRadius="full" w="16px" h="16px" {...props} />
);

const CodeBlock = (props: BoxProps) => <Box as="span" {...props} />;

export function CodeExample() {
    return (
        <Box w="340px" borderRadius="12px" overflow="hidden">
            <Flex bg="gray.200" p={6}>
                <Control mr={1.5} bg="red.500" />
                <Control mr={1.5} bg="yellow.400" />
                <Control bg="green.300" />
            </Flex>
            <Box p={8} bg="gray.50">
                <Box as="pre" fontFamily="Inconsolata" fontSize="md">
                    <CodeBlock color="blue.400">await</CodeBlock>{" "}
                    <CodeBlock color="purple.400">datpayments</CodeBlock>
                    <CodeBlock color="red.600">.createPayment</CodeBlock>
                    <CodeBlock color="gray.700">{"({"}</CodeBlock>
                    <br />
                    <CodeBlock color="green.500">{"  "}amount</CodeBlock>
                    <CodeBlock color="gray.700">: </CodeBlock>
                    <CodeBlock color="yellow.500">0.00006</CodeBlock>
                    <CodeBlock color="gray.700">,</CodeBlock>
                    <br />
                    <CodeBlock color="green.500">{"  "}title</CodeBlock>
                    <CodeBlock color="gray.700">: </CodeBlock>
                    <CodeBlock color="green.400">
                        "Subscription for films"
                    </CodeBlock>
                    <br />
                    <CodeBlock color="gray.700">{"});"}</CodeBlock>
                </Box>
            </Box>
        </Box>
    );
}
