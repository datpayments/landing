import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

type Props = {
    onSubmit: () => void;
};

export function Form({ onSubmit }: Props) {
    return (
        <>
            <FormControl mb="6" minWidth="320px">
                <FormLabel htmlFor="bitcoin-address">Bitcoin address</FormLabel>
                <Input
                    size="md"
                    id="bitcoin-address"
                    placeholder="343af2b..."
                    variant="filled"
                />
            </FormControl>
            <FormControl mb="6">
                <FormLabel htmlFor="email">Email for invoce</FormLabel>
                <Input
                    id="email"
                    placeholder="invoce@example.com"
                    variant="filled"
                />
            </FormControl>
            <FormControl mb="6">
                <FormLabel htmlFor="price">Price in $</FormLabel>
                <Input id="price" placeholder="$ 123.45" variant="filled" />
            </FormControl>
            <FormControl mb="6">
                <FormLabel htmlFor="callback-url">Return to</FormLabel>
                <Input
                    id="callback-url"
                    placeholder="https://awesome-shop.com/finish"
                    variant="filled"
                />
            </FormControl>
            <Button onClick={onSubmit}>Create Payment Link</Button>
        </>
    );
}
