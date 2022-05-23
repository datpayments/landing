import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export function Form() {
    return (
        <Flex
            p={16}
            borderRadius={16}
            boxShadow="0px -5px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
        >
            <FormControl>
                <FormLabel size="md" htmlFor="bitcoin-address">Bitcoin address</FormLabel>
                <Input id="bitcoin-address" placeholder="343af2b..." />
            </FormControl>
        </Flex>
    );
}
