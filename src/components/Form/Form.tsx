import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export function Form() {
    return (
        <Flex
            p={16}
            borderRadius={16}
            boxShadow="0px -5px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
            direction="column"
        >
            <FormControl mb="6" minWidth="320px">
                <FormLabel htmlFor="bitcoin-address">Bitcoin address</FormLabel>
                <Input size="md" id="bitcoin-address" placeholder="343af2b..." variant='filled' />
            </FormControl>
            <FormControl mb="6">
                <FormLabel htmlFor="email">Email for invoce</FormLabel>
                <Input id="email" placeholder="invoce@example.com" variant='filled' />
            </FormControl>
            <FormControl mb="6">
                <FormLabel htmlFor="price">Price in $</FormLabel>
                <Input id="price" placeholder="$ 123.45" variant='filled' />
            </FormControl>
            <FormControl mb="6">
                <FormLabel htmlFor="callback-url">Return to</FormLabel>
                <Input id="callback-url" placeholder="https://awesome-shop.com/finish" variant='filled' />
            </FormControl>
            <Button>Create Payment Link</Button>
        </Flex>
    );
}
