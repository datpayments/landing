import { Button, Flex, Input, Link, Text } from "@chakra-ui/react";

export function ServiceUnavailable() {
    return (
        <Flex direction="column" maxWidth="320px">
            <Text fontSize="md" fontWeight="semibold" mb={5}>
                Service temporarily closed
            </Text>
            <Text fontSize="sm" mb={4}>
                Creation of payment pages for anonymous users is suspended,
                leave your email — we’ll notify you when the service becomes
                available
            </Text>
            <Flex mb="6" flexDirection="row">
                <Input
                    id="email"
                    placeholder="invoce@example.com"
                    variant="filled"
                    mr={2}
                />
                <Button>Send</Button>
            </Flex>
            <Text>
                or <Link color="blue.500">log In</Link>
            </Text>
        </Flex>
    );
}
