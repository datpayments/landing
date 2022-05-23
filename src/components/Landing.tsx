import { ChakraProvider } from "@chakra-ui/react";
import { Hero } from "./Hero/Hero";
import { Navbar } from "./Navbar/Navbar";
import { theme } from "./theme/theme";

export function Landing() {
    return (
        <ChakraProvider theme={theme}>
            <Navbar />
            <Hero />
        </ChakraProvider>
    );
}
