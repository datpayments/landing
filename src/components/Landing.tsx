import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { theme } from "./theme";

export function Landing() {
    return (
        <ChakraProvider theme={theme}>
            <Navbar />
        </ChakraProvider>
    );
}
