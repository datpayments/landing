import {
    Box,
    Button,
    Container,
    Flex,
    Link,
    useColorMode,
} from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";

export function Navbar() {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <Container maxWidth="container.xl">
            <Flex justifyContent="space-between" alignItems="center" py={4}>
                <Logo />
                <Box>
                    <Link mr="8">Simple Platform</Link>
                    <Link mr="8">Pricing</Link>
                    <Link mr="8">Documentation</Link>
                    <Button variant="outline" onClick={toggleColorMode} mr="4">
                        {colorMode === "dark" ? "🌞" : "🌙"}
                    </Button>
                    <Button>Log In</Button>
                </Box>
            </Flex>
        </Container>
    );
}
